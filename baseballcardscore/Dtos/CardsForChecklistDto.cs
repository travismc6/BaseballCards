using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseballCardsCore.Dtos
{
    public class CardsForChecklistDto
    {
        public int CollectionId { get; set; }
        //list of sets
        public List<SetForChecklistDto> Sets = new List<SetForChecklistDto>();
    }

    public class SetForChecklistDto
    {
        public int Year { get; set; }
        public string Brand { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }

        // list of cards that are owned
        public ICollection<CardForChecklistDto> Cards { get; set; }

    }

    public class CardForChecklistDto
    {
        public CardsForListDto CardsForList { get; set; }
        public bool HasCard { get; set; }
    }
}
