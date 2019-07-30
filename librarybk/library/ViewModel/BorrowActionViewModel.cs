using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace library.ViewModel
{
    public class BorrowActionViewModel
    {
        public int UserId { get; set; }
        public int BorrowedBookId { get; set; }
    }
}