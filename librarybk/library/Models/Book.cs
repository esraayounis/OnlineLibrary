using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace library.Models
{
    public class Book
    {
        public int BookID { get; set; }
        public string Title { get; set; }
        public int NumberOfPage { get; set; }
        public string contentPDF { get; set; }
        public string Image { get; set; }
        public int NumberOfCopys { get; set; }
        public Double Price { get; set; }
        public DateTime PublishDate { get; set; }
        public int ReateBook { get; set; }
        public int NumberOfCustomerRate { get; set; }

        public int AutherID { get; set; }
        public virtual Auther Auther { get; set; }
        public int CategoryID { get; set; }
        public virtual Category Category { get; set; }
        public int PublisherID { get; set; }
        public virtual publisher Publisher { get; set; }
        public virtual ICollection<Purchase> Purchases { get; set; }
        //public virtual ICollection<publisher>Publishers { get; set; }
        //public virtual ICollection<Purchase>Purchases { get; set; }
        public Book()
        {
           
            Purchases = new HashSet<Purchase>();


        }


    }
}