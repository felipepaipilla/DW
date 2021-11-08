using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly IInvoiceService invoiceService;

        public InvoiceController(IInvoiceService invoiceService)
        {
            this.invoiceService = invoiceService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await invoiceService.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await invoiceService.GetById(id));
        }

        [HttpPost()]
        public async Task<IActionResult> Post(Invoice invoice)
        {
            return Ok(await invoiceService.Save(invoice));
        }

        [HttpPut()]
        public async Task<IActionResult> Put(Invoice invoice)
        {
            return Ok(await invoiceService.Save(invoice));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await invoiceService.Delete(id));
        }
    }
}
