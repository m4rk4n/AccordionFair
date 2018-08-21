using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccordionFair.Services
{
    public class NullMailService : IMailService
    {
        private readonly ILogger<NullMailService> _logger;

        public NullMailService(ILogger<NullMailService> logger)
        {
            _logger = logger;
        }

        public Task<bool> SendAsync(string to, string subject, string message)
        {
            throw new NotImplementedException();
        }

        public Task<bool> SendEmailAsync(string to, string subject, string message)
        {
            throw new NotImplementedException();
        }

        public void SendMessage(string to, string subject, string body)
        {
            _logger.LogInformation($"To : {to} Subject: {subject} Body: {body}");
        }
    }
}
