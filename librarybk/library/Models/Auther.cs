using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace library.Models
{
    public class Auther
    {
     
        public int AutherID { get; set; }
        public string Name { get; set; }
        public string AutherImage { get; set; }
        public string JobDescribtion { get; set; }
        public virtual ICollection<Book> Books { get; set; }
        public Auther()
        {
            Books = new HashSet<Book>();
        }
    }
}