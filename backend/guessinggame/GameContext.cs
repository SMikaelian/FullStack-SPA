using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using guessinggame.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace guessinggame
{
    public class QuizContext : DbContext
    {
        //public GamesContext() {}

        public QuizContext(DbContextOptions<guessinggame.QuizContext> options) : base(options) { }

        public virtual DbSet<guessinggame.Models.Question> Questions { get; set; }
        public virtual DbSet<guessinggame.Models.Quiz> Quiz { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("GuessingGameDB");
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Question>(entity =>
            {
                entity.HasIndex(e => e.QuizId);

                entity.HasOne(d => d.Quiz)
                    .WithMany(p => p.Question)
                    .HasForeignKey(d => d.QuizId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Questions_Quiz");
            });
        }

        //    modelBuilder.Entity<guessinggame.Models.Quiz>(entity =>
        //    {
        //        entity.Property(e => e.ID).ValueGeneratedNever();
        //    });
        //}
    }
    //public class QuizContext : DbContext
    //{
    //    public QuizContext(DbContextOptions<QuizContext> options) : base(options) { }

    //    public DbSet<guessinggame.Models.Question> Questions { get; set; }

    //    public DbSet<guessinggame.Models.Game> Game { get; set; }

    //}
}
