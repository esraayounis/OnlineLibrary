using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace library.Models
{
    public class Category
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public virtual ICollection<Book>Books { get; set; }
        public Category()
        {
            Books = new HashSet<Book>();
        }

    }
}