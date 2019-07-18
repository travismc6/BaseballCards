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

        [HttpGet]
        public async Task<IActionResult> GetCards([FromQuery]CardParams cardParams)
        {
            var cards = await _repo.GetCards(cardParams);
            var cardToReturn = _mapper.Map<ICollection<CardsForListDto>>(cards);
            
            return Ok(cardToReturn);
        }

    }
}