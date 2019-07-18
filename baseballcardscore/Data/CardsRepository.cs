using BaseballCardsCore.Helpers;
using BaseballCardsCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseballCardsCore.Data
{
    public class CardsRepository : ICardsRepository
    {
        private readonly DataContext _context;
        public CardsRepository(DataContext context)
        {
            _context = context;
        }


        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<ICollection<Card>> GetCards(CardParams userParams)
        {
            var cards =  _context.Cards.Include(x=> x.CardSet).AsQueryable();

            if(userParams.Year != null)
            {
                cards = cards.Where(x => x.CardSet.Year == userParams.Year);
            }

            if(!String.IsNullOrEmpty(userParams.Brand))
            {
                cards = cards.Where(x => x.CardSet.Brand.ToLower() == userParams.Brand.ToLower());
            }

            if (!String.IsNullOrEmpty(userParams.Name))
            {
                cards = cards.Where(x => x.CardSet.Name.ToLower() == userParams.Name.ToLower());
            }

            return  await cards.OrderBy(x => x.CardSet.Year)
                .ThenBy(x => x.CardSet.Brand)
                .ThenBy(x => x.Number).ToListAsync();
        }
    }
}
