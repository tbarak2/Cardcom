using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardComApi.Data.Dto.Responses
{
    public class GetPersonResponse
    {
        public int Id { get; set; }
        public string IdNumber { get; set; }
        public string Name { get; set; }
        public DateTime Birthdate { get; set; }
        public string Number { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }

    }
}
