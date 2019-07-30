using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace library.Models
{
    public class User
    {
        public int UserID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public virtual ICollection<Purchase>Purchases { get; set; }
        public virtual ICollection<BorrowedBook> BorrowedBooks{ get; set; }
        public User()
        {

            BorrowedBooks = new HashSet<BorrowedBook>();
            Purchases = new HashSet<Purchase>();
        }

}
}