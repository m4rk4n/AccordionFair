using AccordionFair.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccordionFair.Services
{
    [Authorize]
    public class NotifyHub : Hub
    {
        private readonly IAccordionRepository repo;

        public NotifyHub(IAccordionRepository repo)
        {
            this.repo = repo;
        }

        public async Task SendMessage(string message)
        {
            await Clients.Caller.SendAsync("ReceiveNotification", message);
        }

        public override async Task OnConnectedAsync()
        {
            var lastOrder = repo.GetAllOrders().OrderByDescending(o => o.OrderNumber).First();
            var userName = lastOrder.User.UserName;
            
             await Groups.AddToGroupAsync(Context.ConnectionId, userName);
            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {   
            await base.OnDisconnectedAsync(exception);
        }
    }
}
