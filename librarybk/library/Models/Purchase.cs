using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace library.Models
{
    public class Purchase
    {
        [Key]
        public int PurchaseID { get; set; }
        public int UserID { get; set; }
        public DateTime PurchaseData { get; set; }
        public virtual User User { get; set; }
        public int BookID { get; set; }
        public virtual Book Book { get; set; }

    }
}