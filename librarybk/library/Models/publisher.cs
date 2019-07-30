using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace library.Models
{
    public class publisher
    {
        public int PublisherID { get; set; }
        public string Name { get; set; }
   
        public virtual ICollection<Book>Books { get; set; }

        public publisher()
        {

            Books = new HashSet<Book>();

        }

    }
}