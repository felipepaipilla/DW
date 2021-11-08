using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public interface ICustomerService : IResourceGetAll<Customer>, IResourceGetById<Customer, int>
    {

    }
}
