using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace library.Models
{
    public class BorrowedBook
    {
        public int BorrowedBookID { get; set; }
        public string Title { get; set; }
        public string AutherName { get; set; }
        public string PublicherName { get; set; }
        public int NumberOfPage { get; set; }
        public string Image { get; set; }
        public DateTime? TimeOfRequsetToBorrow { get; set; }
        public DateTime TimeOfPost { get; set; }
        public bool? Request { get; set; }
        public bool? ISborrwed { get; set; }
        public int? BookIdOfNewBook { get; set; }
        public int? UserID { get; set; }
        public virtual User User { get; set; }
    }
}