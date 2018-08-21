using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace AccordionFair.Services
{
    public class MailService : IMailService
    {

        private readonly ILogger<MailService> logger;
        private readonly EmailSettings emailSettings;

        public MailService(ILogger<MailService> logger, IOptions<EmailSettings> emailSettings)
        {
            this.logger = logger;
            this.emailSettings = emailSettings.Value;
        }

        public void SendMessage(string to, string subject, string body)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> SendEmailAsync(string to, string subject, string message)
        {
            try
            {
                MailMessage mail = new MailMessage()
                {
                    From = new MailAddress(emailSettings.UsernameEmail, "Accordion Fair")
                };
                mail.To.Add(new MailAddress(to));
                //mail.CC.Add(new MailAddress(emailSettings.CcEmail));

                mail.Subject = subject;
                mail.Body = message;
                // mail.IsBodyHtml = true;
                mail.Priority = MailPriority.High;

                using (SmtpClient smtp = new SmtpClient(emailSettings.PrimaryDomain, emailSettings.PrimaryPort))
                {
                    smtp.Credentials = new NetworkCredential(emailSettings.UsernameEmail, emailSettings.UsernamePassword);
                    smtp.EnableSsl = true;
                    await smtp.SendMailAsync(mail);
                }
                logger.LogInformation("Mail sent");
                return true;
            }
            catch (Exception ex)
            {
                logger.LogError($"There has been an exception: {ex}");
            }
            logger.LogError("Failed to send email");
            return false;
        }
    }

    public class EmailSettings
    {
        public String PrimaryDomain { get; set; }

        public int PrimaryPort { get; set; }

        public String SecondayDomain { get; set; }

        public int SecondaryPort { get; set; }

        public String UsernameEmail { get; set; }

        public String UsernamePassword { get; set; }

        public String FromEmail { get; set; }

        public String ToEmail { get; set; }

        public String CcEmail { get; set; }
    }
}
