using CardComApi.Contracts;
using CardComApi.Data.Context;
using CardComApi.Data.Entity;
using CardComApi.Data.General;
using Microsoft.EntityFrameworkCore;
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

        public async Task<bool> DeleteAsync(object id)
        {
            var isDeleted = false;
            //var person = _context.Person.FirstOrDefault(p => p.IdNumber == id);
            var person = await _context.Person.FindAsync(id);
            if (person != null)
            {
                var bl = _context.Person.Remove(person);
                if(await _context.SaveChangesAsync().ConfigureAwait(false) > 0)
                {
                    isDeleted = true;
                }

            }

            return isDeleted;

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

        public async Task<bool> UpdateAsync(Person entity)
        {
            var isUpdated = false;
            //ar person = await _context.Person.FirstOrDefaultAsync(p=>p.IdNumber == entity.IdNumber);//FirstOrDefault(p => p.Id == entity.Id);
            var person = await _context.Person.FindAsync(entity.Id);//FirstOrDefault(p => p.Id == entity.Id);
            if (person != null)
            {
                entity.Id = person.Id;
                _context.Entry(person).State = EntityState.Detached;
                _context.Person.Update(entity);
                if (await _context.SaveChangesAsync() > 0)
                {
                    isUpdated = true;
                }
            }
            //_context.Attach(entity);
            //if (person != null)
            //{
            //    if(entity.IdNumber != null && entity.IdNumber  != person.IdNumber)
            //    {
            //        _context.Entry(person).Property("IdNumber").IsModified = true;
            //    }
            //   // person = entity;
            //    //_context.Entry<Person>(person).State = EntityState.Detached;
            //    _context.Person.Update(entity);
            //    if (await _context.SaveChangesAsync() > 0)
            //    {
            //        isUpdated = true;
            //    }
            //}
            return isUpdated;
            //if(person != null)
            //{
            //    //if(entity.IdNumber == null)
            //    //{
            //    //    entity.IdNumber = 
            //    //}
            //}
            //throw new NotImplementedException();
        }
    }
}
