﻿// <auto-generated />
using System;
using BaseballCardsCore.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BaseballCardsCore.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20190718195232_updates")]
    partial class updates
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BaseballCardsCore.Models.Card", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CardSetId");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<string>("Number");

                    b.Property<int?>("StockPhotoId");

                    b.HasKey("Id");

                    b.HasIndex("CardSetId");

                    b.HasIndex("StockPhotoId");

                    b.ToTable("Cards");
                });

            modelBuilder.Entity("BaseballCardsCore.Models.CardSet", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Brand");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<int>("Year");

                    b.HasKey("Id");

                    b.ToTable("CardSets");
                });

            modelBuilder.Entity("BaseballCardsCore.Models.Collection", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Collections");
                });

            modelBuilder.Entity("BaseballCardsCore.Models.CollectionCard", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CardId");

                    b.Property<int?>("CollectionId");

                    b.Property<int>("Condition");

                    b.Property<string>("Notes");

                    b.HasKey("Id");

                    b.HasIndex("CardId");

                    b.HasIndex("CollectionId");

                    b.ToTable("CollectionCards");
                });

            modelBuilder.Entity("BaseballCardsCore.Models.Photo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CollectionCardId");

                    b.Property<string>("PublicId");

                    b.Property<string>("Url");

                    b.HasKey("Id");

                    b.HasIndex("CollectionCardId");

                    b.ToTable("Photos");
                });

            modelBuilder.Entity("BaseballCardsCore.Models.Card", b =>
                {
                    b.HasOne("BaseballCardsCore.Models.CardSet", "CardSet")
                        .WithMany("Cards")
                        .HasForeignKey("CardSetId");

                    b.HasOne("BaseballCardsCore.Models.Photo", "StockPhoto")
                        .WithMany()
                        .HasForeignKey("StockPhotoId");
                });

            modelBuilder.Entity("BaseballCardsCore.Models.CollectionCard", b =>
                {
                    b.HasOne("BaseballCardsCore.Models.Card", "Card")
                        .WithMany()
                        .HasForeignKey("CardId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("BaseballCardsCore.Models.Collection")
                        .WithMany("CollectionCards")
                        .HasForeignKey("CollectionId");
                });

            modelBuilder.Entity("BaseballCardsCore.Models.Photo", b =>
                {
                    b.HasOne("BaseballCardsCore.Models.CollectionCard")
                        .WithMany("Photos")
                        .HasForeignKey("CollectionCardId");
                });
#pragma warning restore 612, 618
        }
    }
}
