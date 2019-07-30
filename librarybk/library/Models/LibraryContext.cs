namespace library.Models
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class LibraryContext : DbContext
    {
     
        public LibraryContext()
            : base("name=LibraryContext")
        {
        }

        

        // public virtual DbSet<MyEntity> MyEntities { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Book> Books  { get; set; }
        public virtual DbSet<Auther> Authers { get; set; }
        public virtual DbSet<BorrowedBook> BorrowedBooks { get; set; }
        public virtual DbSet<publisher> Publishers { get; set; }
        public virtual DbSet<Purchase> Purchases { get; set; }
        public virtual DbSet<Category>Categories { get; set; }
        public virtual DbSet<DataEntry>DataEntries { get; set; }
        public virtual DbSet<Admin>Admins { get; set; }

    }

    //public class MyEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //}
}