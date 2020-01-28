using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardComApi.Contracts
{
    public interface IRepository<T>
    {
        Task<int> CreateAsync(T entity);
        Task<bool> UpdateAsync(T entity);
        Task<bool> DeleteAsync(object id);
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByIdAsync(object id);
    }
}
