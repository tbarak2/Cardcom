using System.Collections.Generic;
using CardComApi.Data.Entity;
using Microsoft.EntityFrameworkCore;

namespace CardComApi.Data.Context
{
    public class PersonContext:DbContext
    {
        public PersonContext()
        {
           
        }
        public PersonContext(DbContextOptions<PersonContext> options)
          : base(options)
        {
        }
        //private const string V = "Data Source=persons.db";

        public DbSet<Person> Person { get; set; }
        //protected override void OnConfiguring(DbContextOptionsBuilder options)
        //    => options.UseSqlite(V);

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Person>()
                .HasIndex(p => p.IdNumber)
                .IsUnique();
        }
    }
}
