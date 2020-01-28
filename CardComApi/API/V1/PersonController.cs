using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoWrapper.Extensions;
using AutoWrapper.Wrappers;
using CardComApi.Contracts;
using CardComApi.Data.Context;
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
        public PersonController(IPersonManager personManager)
        {
            _personManager = personManager;
        }

        [HttpPost]
        public async Task<ApiResponse> Post([FromBody] Person person)
        {
            if (ModelState.IsValid)
            {
                return new ApiResponse("Record successfully created.", await _personManager.CreateAsync(person), Status201Created);
            }
            else
            {
                throw new ApiException(ModelState.AllErrors());
            }
        }
    }
}