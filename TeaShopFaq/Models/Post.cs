using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeaShopFaq.Models
{
    public class Post
    {

        [Key]
        public int PostId { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public string TimeStamp { get; set; }
        public string UserEmail { get; set; }
        public string Category { get; set; }
        public bool IsAnswered { get; set; }

    }
}
