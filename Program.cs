using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace AccordionFair
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args)
              //  .UseDefaultServiceProvider(options => options.ValidateScopes = false)  // BAD!
                    .Build()
                    .Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration(SetupConfiguration)
                .UseStartup<Startup>();

        private static void SetupConfiguration(WebHostBuilderContext ctx, IConfigurationBuilder builder) // different than asp.net and webconfig
        {
            builder.Sources.Clear();

            builder.AddJsonFile("config.json", false, true)
                    .AddEnvironmentVariables();
        }
    }
}
