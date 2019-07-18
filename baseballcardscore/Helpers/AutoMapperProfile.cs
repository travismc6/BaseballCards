using AutoMapper;
using BaseballCardsCore.Dtos;
using BaseballCardsCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseballCardsCore.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Card, CardsForListDto>()
                .ForMember(x=> x.Brand, opt => { opt.MapFrom(src => src.CardSet.Brand); })
                .ForMember(x => x.Year, opt => { opt.MapFrom(src => src.CardSet.Year); })
                .ForMember(x => x.PlayerName, opt => { opt.MapFrom(src => src.Name); })
                .ForMember(x => x.SetName, opt => { opt.MapFrom(src => src.CardSet.Name); });

        }
    }
}
