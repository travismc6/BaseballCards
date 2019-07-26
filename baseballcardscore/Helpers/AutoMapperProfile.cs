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

            CreateMap<CollectionCard, CardsForListDto>()
                .ForMember(x => x.Brand, opt => { opt.MapFrom(src => src.Card.CardSet.Brand); })
                .ForMember(x => x.Year, opt => { opt.MapFrom(src => src.Card.CardSet.Year); })
                .ForMember(x => x.PlayerName, opt => { opt.MapFrom(src => src.Card.Name); })
                .ForMember(x => x.SetName, opt => { opt.MapFrom(src => src.Card.CardSet.Name); })
                .ForMember(x => x.SetId, opt => { opt.MapFrom(src => src.Card.CardSet.Id); })
                .ForMember(x => x.Condition, opt => { opt.MapFrom(src => src.Condition); })
                .ForMember(x => x.Image, opt => { opt.MapFrom(src => src.Condition); })
                .ForMember(x => x.Notes, opt => { opt.MapFrom(src => src.Notes); })
                .ForMember(x => x.Number, opt => { opt.MapFrom(src => src.Card.Number); });

        }
    }
}
