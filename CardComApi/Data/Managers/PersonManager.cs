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
            _context = context;
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

        public async Task<IEnumerable<Person>> GetAllAsync()
        {
            // return new Task<IEnumerable<Person>>(obj => { return _context.Person; }, 300);
            return _context.Person;
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
