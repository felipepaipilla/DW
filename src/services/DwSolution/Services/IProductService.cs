using Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services
{
    public interface IProductService : IResourceGetAll<Product>, IResourceGetById<Product, int>
    {
        
    }
}
