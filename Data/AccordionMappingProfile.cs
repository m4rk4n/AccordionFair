using AccordionFair.Data.Entities;
using AccordionFair.ViewModels;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccordionFair.Data
{
    public class AccordionMappingProfile : Profile
    {
        public AccordionMappingProfile()
        {
            CreateMap<Order, OrderViewModel>()
                .ForMember(o => o.OrderId, ex => ex.MapFrom(o => o.Id))
                .ForMember(o => o.BtcPrice, ex => ex.MapFrom(o => o.BitcoinPrice))
                .ReverseMap(); //when you are looking for orderid map it from the Id

            CreateMap<OrderItem, OrderItemViewModel>()
                .ReverseMap();
        }
    }
}
