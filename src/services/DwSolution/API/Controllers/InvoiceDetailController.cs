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
    public class InvoiceDetailController : ControllerBase
    {
        private readonly IInvoiceDetailService invoiceDetailService;

        public InvoiceDetailController(IInvoiceDetailService invoiceDetailService)
        {
            this.invoiceDetailService = invoiceDetailService;
        }

        [HttpGet("invoice/{invoiceId}/")]
        public async Task<IActionResult> GetByInvoiceId(int invoiceId)
        {
            return Ok(await invoiceDetailService.GetByInvoiceId(invoiceId));
        }
    }
}
