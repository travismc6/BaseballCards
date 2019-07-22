using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BaseballCardsCore.Data;
using BaseballCardsCore.Dtos;
using BaseballCardsCore.Helpers;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BaseballCardsCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardsController : Controller
    {
        private readonly ICardsRepository _repo;
        private readonly IMapper _mapper;


        public CardsController(ICardsRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<IActionResult> GetCards([FromQuery]CardParams cardParams)
        {
            var cards = await _repo.GetCards(cardParams);
            var cardToReturn = _mapper.Map<ICollection<CardsForListDto>>(cards);
            
            return Ok(cardToReturn);
        }

        [HttpGet("setchecklists")]
        public async Task<IActionResult> GetSetChecklists(int collectionId, [FromQuery]CardParams cardParams)
        {
            CardsForChecklistDto dto = new CardsForChecklistDto {CollectionId = collectionId };

            var cards = await _repo.GetCards(cardParams);

            var sets = cards.GroupBy(r => r.CardSet);

            foreach(var s in sets)
            {
                var setDto = new SetForChecklistDto
                {
                    Brand = s.Key.Brand,
                    Description = s.Key.Description,
                    Year = s.Key.Year,
                    Name = s.Key.Name,
                    Cards = new List<CardForChecklistDto>()
                };

                var mycards = await _repo.GetCollectionCards(collectionId, cardParams);

                foreach(var c in s)
                {
                    CardForChecklistDto cardDto = new CardForChecklistDto()
                    {
                        Brand = c.CardSet.Brand,
                        PlayerName = c.Name,
                        Id = c.Id,
                        Notes = c.Notes,
                        Year = c.CardSet.Year,
                        SetName = c.CardSet.Name,
                        Number = c.Number,
                        HasCard = mycards.Any(x => x.CardId == c.Id)
                    };
                  
                    setDto.Cards.Add(cardDto);
                }

                dto.Sets.Add(setDto);
            }

            return Ok(dto);
        }




        [HttpGet("cardsforcollection")]
        public async Task<IActionResult> GetCardsForCollection([FromQuery]CardParams cardParams)
        {
            var cards = await _repo.GetCards(cardParams);

            var cardToReturn = _mapper.Map<ICollection<CardsForListDto>>(cards);

            return Ok(cardToReturn);
        }
    }
}