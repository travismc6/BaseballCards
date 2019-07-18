using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseballCardsCore.Dtos
{
    public class CardsForListDto
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string PlayerName { get; set; }
        public string Notes { get; set; }
        public string SetName { get; set; }
        public string Brand { get; set; }
        public string Year { get; set; }

    }
}
