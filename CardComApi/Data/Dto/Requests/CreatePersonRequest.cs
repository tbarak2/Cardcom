using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CardComApi.Data.Dto.Requests
{
    public class CreatePersonRequest
    {
        [Required]
        //[RegularExpression(@"^\((\d{10}?)\)$", ErrorMessage = "Id Number Must Have Only Numbers")]
        [Range(0, Int64.MaxValue, ErrorMessage = "Id number should not contain characters")]
        public string IdNumber { get; set; }
        
        [Required]
        public string Name { get; set; }

        [Required]
        public DateTime? Birthdate { get; set; }

        [Phone]
        //[RegularExpression("[^0-9]", ErrorMessage = "Phone Number Must Have Only Numbers")]
        [Range(0, Int64.MaxValue, ErrorMessage = "Id number should not contain characters")]
        public string Number { get; set; }

        public string Gender { get; set; }

        [EmailAddress]
        public string Email { get; set; }
    }
}
