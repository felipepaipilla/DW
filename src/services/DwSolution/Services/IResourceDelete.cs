using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public interface IResourceDelete<I>
    {
        Task<bool> Delete(I id);
    }
}
