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
        public async Task<IActionResult> GetSetChecklists([FromQuery]CardParams cardParams)
        {
            CardsForChecklistDto dto = new CardsForChecklistDto();

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

                foreach(var c in s)
                {
                    var card = new CardForChecklistDto();

                    //card.HasCard = 


                    //setDto.Cards.Add(card);
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