using BaseballCardsCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseballCardsCore.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Card> Cards { get; set; }
        public DbSet<CardSet> CardSets { get; set; }
        public DbSet<Collection> Collections { get; set; }
        public DbSet<CollectionCard> CollectionCards { get; set; }
        public DbSet<Photo> Photos { get; set; }
    }
}
