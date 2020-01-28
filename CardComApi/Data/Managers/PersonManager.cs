using CardComApi.Contracts;
using CardComApi.Data.Context;
using CardComApi.Data.Entity;
using CardComApi.Data.General;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardComApi.Data.Managers
{
    public class PersonManager : IPersonManager
    {
        private PersonContext _context;
        public PersonManager(PersonContext context)
        {
            context = _context;
        }
        public async Task<int> CreateAsync(Person entity)
        {
            _context.Person.Add(entity);
            var response =  await _context.SaveChangesAsync();
            return response;
        }

        public Task<bool> DeleteAsync(object id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Person>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Person> GetByIdAsync(object id)
        {
            throw new NotImplementedException();
        }

        public Task<(IEnumerable<Person> Persons, Pagination Pagination)> GetPersonsAsync(UrlQueryParameters urlQueryParameters)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateAsync(Person entity)
        {
            throw new NotImplementedException();
        }
    }
}
