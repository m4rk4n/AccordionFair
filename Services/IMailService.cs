using System.Threading.Tasks;

namespace AccordionFair.Services
{
    public interface IMailService
    {
        void SendMessage(string to, string subject, string body);
        Task<bool> SendEmailAsync(string to, string subject, string message);
    }
}