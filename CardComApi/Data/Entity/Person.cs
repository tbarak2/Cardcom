using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CardComApi.Data.Entity
{
    public class Person
    {
        [Key]
        public int Id { get; set; }

        public string  IdNumber { get; set; }
        public string Name { get; set; }

        public string Email { get; set; }

        public DateTime BirthDate { get; set; }
        public string Gender { get; set; }

        public string PhoneNumber { get; set; }
    }
}
