using AutoMapper;
using CardComApi.Data.Dto.Requests;
using CardComApi.Data.Dto.Responses;
using CardComApi.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardComApi.Profiles
{
    public class MappingProfileConfiguration : Profile
    {
        public MappingProfileConfiguration()
        {
            CreateMap<Person, CreatePersonRequest>();
            CreateMap<CreatePersonRequest, Person>();
            CreateMap<Person, GetPersonResponse>();
        }
    }
}
