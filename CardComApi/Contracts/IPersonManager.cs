using CardComApi.Data;
using CardComApi.Data.Entity;
using CardComApi.Data.General;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardComApi.Contracts
{
    public interface IPersonManager:IRepository<Person>
    {
        Task<(IEnumerable<Person> Persons, Pagination Pagination)> GetPersonsAsync(UrlQueryParameters urlQueryParameters);
    }
}
