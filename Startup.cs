using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AccordionFair.Data;
using AccordionFair.Data.Entities;
using AccordionFair.Services;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace AccordionFair
{
    public class Startup
    {
        private readonly IConfiguration config;
        private readonly IHostingEnvironment env;

        public Startup(IConfiguration config, IHostingEnvironment env)
        {
            this.config = config;
            this.env = env;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<StoreUser, IdentityRole>(cfg =>
            {
                cfg.User.RequireUniqueEmail = true;
            })
                .AddEntityFrameworkStores<AccordionContext>();

            services.AddAuthentication(options => // remove the   options if Cookie auth is desired
            {

                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
               // .AddCookie() // disable cookie autenthication
                .AddJwtBearer(cfg =>
                {
                    cfg.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters()
                    {
                        ValidIssuer = config["Tokens:Issuer"],
                        ValidAudience = config["Tokens:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Tokens:Key"]))
                    };

                    // We have to hook the OnMessageReceived event in order to
                    // allow the JWT authentication handler to read the access
                    // token from the query string when a WebSocket or 
                    // Server-Sent Events request comes in.
                    cfg.Events = new JwtBearerEvents
                    {
                        OnMessageReceived = context =>
                        {
                            var accessToken = context.Request.Query["access_token"];

                            // If the request is for our hub...
                            var path = context.HttpContext.Request.Path;
                            if (!string.IsNullOrEmpty(accessToken) &&
                                (path.StartsWithSegments("/notifyHub")))
                            {
                                // Read the token out of the query string
                                context.Token = accessToken;
                            }
                            return Task.CompletedTask;
                        }
                    };
                });


            services.AddMvc(opt =>
            {
                if (env.IsProduction())
                {
                    opt.Filters.Add(new RequireHttpsAttribute()); // possible to specify certain controllers for https, this way whole site goes https
                }
            })
                .AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            services.AddAutoMapper();
            // with the option ignore, it just trim off self-referencing object
            services.AddTransient<AccordionSeeder>();
            services.AddScoped<IAccordionRepository, AccordionRepository>();
            services.AddDbContext<AccordionContext>(cfg =>
            {
                cfg.UseSqlServer(config.GetConnectionString("AccordionConnectionString"));
            });


            // services.AddHostedService<TimedHostedService>();
            // services.AddHostedService<ConsumeScopedServiceHostedService>();
            //services.AddScoped<IScopedProcessingService, ScopedProcessingService>();
             services.AddTransient<IMailService, MailService>();
            services.Configure<EmailSettings>(config.GetSection("EmailSettings"));
            services.AddSignalR();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if(env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }
            

            app.UseStaticFiles();

            app.UseAuthentication(); // make sure it's before mvc, middleware pipeline jbg

            app.UseSignalR(routes =>
            {
                routes.MapHub<NotifyHub>("/notifyHub");
                // konfigurirat trajanja konekcije i slicno
            });

            app.UseMvc(cfg =>
            {
                cfg.MapRoute("Default",
                    "/{controller}/{action}/{id?}",
                    new { controller = "App", Action = "Index" }); // if there is no route supplied, use this one as default
            });

            if  (env.IsDevelopment())
            {
                // seed the database
                using (var scope = app.ApplicationServices.CreateScope())
                {
                    var seeder = scope.ServiceProvider.GetService<AccordionSeeder>();
                    seeder.Seed().Wait(); // From async too sync :  )
                }
            }

            // possible to put a service here  that runs on startup
        }
    }
}
