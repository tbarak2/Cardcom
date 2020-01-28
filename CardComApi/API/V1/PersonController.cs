using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using AutoWrapper.Extensions;
using AutoWrapper.Wrappers;
using CardComApi.Contracts;
using CardComApi.Data.Context;
using CardComApi.Data.Dto.Requests;
using CardComApi.Data.Dto.Responses;
using CardComApi.Data.Entity;
using CardComApi.Data.Managers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static Microsoft.AspNetCore.Http.StatusCodes;

namespace CardComApi.API.V1
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        //private PersonContext _context
        private IPersonManager _personManager;
        private IMapper _mapper;
        public PersonController(IPersonManager personManager,IMapper mapper)
        {
            _personManager = personManager;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<GetPersonResponse>> Get()
        {
            var persons = _personManager.GetAllAsync().Result;
            //var p = persons.ToList();
            var response = _mapper.Map<IEnumerable<GetPersonResponse>>(persons);
            return response;
        }


        [HttpPost]
        public async Task<ApiResponse> Post([FromBody] CreatePersonRequest request)
        {

            if (ModelState.IsValid)
            {
                var person = _mapper.Map<Person>(request);
                return new ApiResponse("Record successfully created.", await _personManager.CreateAsync(person), Status201Created);
            }
            else
            {
                throw new ApiException(ModelState.AllErrors());
            }
        }

    }
}