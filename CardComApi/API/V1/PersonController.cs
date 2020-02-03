using AutoMapper;
using AutoWrapper.Extensions;
using AutoWrapper.Wrappers;
using CardComApi.Contracts;
using CardComApi.Data.Dto.Requests;
using CardComApi.Data.Dto.Responses;
using CardComApi.Data.Entity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
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
        public PersonController(IPersonManager personManager, IMapper mapper)
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

        [Route("{id:long}")]
        [HttpDelete]
        public async Task<ApiResponse> Delete(int id)
        {
            if (await _personManager.DeleteAsync(id))
                return new ApiResponse($"Record with Id: {id} sucessfully deleted.", true);
            else
                throw new ApiException($"Record with id: {id} does not exist.", Status404NotFound);
        }

        [Route("{id:long}")]
        [HttpPut]
        public async Task<ApiResponse> Put(int id, [FromBody] UpdatePersonRequest dto)
        {
            if (ModelState.IsValid)
            {
                var person = _mapper.Map<Person>(dto);
                person.Id = id;
                if (await _personManager.UpdateAsync(person))
                    return new ApiResponse($"Record with Id: {id} sucessfully updated.", true);
                else
                    throw new ApiException($"Record with Id: {id} does not exist.", Status404NotFound);
            }
            else
                throw new ApiException(ModelState.AllErrors());
        }

        //todo:Adding get wuth pageing.
        //Todo:Fix the update!!

    }
}