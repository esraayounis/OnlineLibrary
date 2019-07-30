using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace library.ViewModel
{
    public class BorrowBookModel
    {
        public int BorrowedBookID { get; set; }
        public string Title { get; set; }
        public string AutherName { get; set; }
        public string PublicherName { get; set; }
        public int NumberOfPage { get; set; }
        public string Image { get; set; }
  
    }
}