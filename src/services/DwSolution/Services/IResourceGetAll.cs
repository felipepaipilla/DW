using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public interface IResourceGetAll<T>
    {
        Task<IEnumerable<T>> GetAll();
    }
}
