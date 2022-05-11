﻿using Microsoft.EntityFrameworkCore;


namespace WebApplication1.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Delivery> Deliveries  { get; set; }

        public DbSet<Product> Products { get; set; }
    }
}

