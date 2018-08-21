using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccordionFair.ViewModels
{
    public class ContactViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        [MinLength(4)]
        public string Subject { get; set; }
        [Required]
        [MaxLength(250, ErrorMessage ="Tooo long")]
        public string Message { get; set; }
    }
}
