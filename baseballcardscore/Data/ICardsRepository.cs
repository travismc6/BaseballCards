using BaseballCardsCore.Helpers;
using BaseballCardsCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseballCardsCore.Data
{
    public interface ICardsRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;

        Task<ICollection<Card>> GetCards(CardParams userParams);

    }
}
