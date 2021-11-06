using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public interface IResourceGetById<T, I>
    {
        Task<T> GetById(I id);
    }
}
