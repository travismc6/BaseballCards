﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseballCardsCore.Models
{
    public class Card 
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string Name { get; set; }
        public string Notes { get; set; }
        public Photo StockPhoto { get; set; }

        public int CardSetId { get; set; }

        public CardSet CardSet { get; set; }
    }
}
