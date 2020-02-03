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
            CreateMap<CreatePersonRequest, Person>()
                .ForMember(dest => dest.PhoneNumber, opt =>
                {
                    opt.MapFrom(src => src.Number);
                }).ReverseMap();
            CreateMap<Person, GetPersonResponse>()
                 .ForMember(dest => dest.Number, opt =>
                 {
                     opt.MapFrom(src => src.PhoneNumber);
                 }).ReverseMap();
            CreateMap<UpdatePersonRequest, Person>()
                .ForMember(dest => dest.PhoneNumber, opt =>
                {
                    opt.MapFrom(src => src.Number);
                }).ReverseMap(); ;
            //.ForMember(dest => dest.IdNumber, opt =>
            //{
            //    opt.Condition((src, dest) => src.IdNumber != null && src.IdNumber != "");
            //    opt.MapFrom(src => src.IdNumber);
            //})
            //.ForMember(dest => dest.Name, opt =>
            //   {
            //       opt.Condition((src, dest) => src.Name != null && src.Name != "");
            //       opt.MapFrom(src => src.IdNumber);
            //   })
            //.ForMember(dest => dest.PhoneNumber, opt =>
            //{
            //    opt.Condition((src, dest) => src.Number != null);
            //    opt.MapFrom(src => src.Number);
            //})
            //.ForMember(dest => dest.BirthDate, opt =>
            //{
            //    opt.Condition((src, dest) => src.Birthdate != null);
            //    opt.MapFrom(src => src.Birthdate);
            //});
        }
    }
}
