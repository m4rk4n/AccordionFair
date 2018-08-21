using AccordionFair.Data;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccordionFair.Services
{
    internal class ScopedProcessingService : IScopedProcessingService
    {
        private readonly ILogger _logger;
        private readonly IAccordionRepository repo;

        public ScopedProcessingService(ILogger<ScopedProcessingService> logger, IAccordionRepository repo)
        {
            _logger = logger;
            this.repo = repo;
        }

        public void DoWork()
        {
            _logger.LogInformation("Scoped Processing Service is working.");

            var orderCount = repo.GetAllOrders().Count();

            _logger.LogInformation($"Fetched {orderCount} orders from repository"); 
        }
    }
}
