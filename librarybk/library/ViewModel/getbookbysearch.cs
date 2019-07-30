using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace library.ViewModel
{
    public class getbookbysearch
    {
          
        public string Title { get; set; }
        public int NumberOfPage { get; set; }
        public string contentPDF { get; set; }
        public string Image { get; set; }
        public Double Price { get; set; }
        public DateTime PublishDate { get; set; }
        public string AuthorName { get; set; }
        public string PublisherName { get; set; }
        public string CategoryName { get; set; }
    
}
}