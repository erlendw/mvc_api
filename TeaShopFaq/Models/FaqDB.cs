using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace TeaShopFaq.Models
{

    public class Posts
    {

        [Key]
        public int PostId { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public string TimeStamp { get; set; }
        public string UserEmail { get; set; }
        public string Category { get; set; }
        public bool IsAnswered { get; set; }

    }

    public class FaqContext : DbContext
    {
        public FaqContext() : base ("FaqDB") {

            Database.CreateIfNotExists();

            }

        public DbSet<Posts> Posts { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Entity<Posts>()
                .HasKey(c => new {c.PostId});
        }

    }
}