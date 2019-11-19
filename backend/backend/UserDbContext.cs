using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;

namespace backend
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<QuizContext> options) : base(options) { }
        public DbSet<Models.Question> Questions { get; set; } //Columns
        public DbSet<backend.Models.Quiz> Quiz { get; set; }

    }
}

//When you retrieve data using ORM it's always in generic.