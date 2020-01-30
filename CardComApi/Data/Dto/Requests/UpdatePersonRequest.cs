using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CardComApi.Data.Dto.Requests
{
    public class UpdatePersonRequest
    {
        
        //[RegularExpression(@"^\((\d{10}?)\)$", ErrorMessage = "Id Number Must Have Only Numbers")]
        [Range(0, Int64.MaxValue, ErrorMessage = "Id number should not contain characters")]
        public string IdNumber { get; set; }

        public string Name { get; set; }

        public DateTime? Birthdate { get; set; }

        [Phone]
        [RegularExpression("[^0-9]", ErrorMessage = "Phone Number Must Have Only Numbers")]
        public string Number { get; set; }

        public string Gender { get; set; }

        [EmailAddress]
        public string Email { get; set; }
    }
}
