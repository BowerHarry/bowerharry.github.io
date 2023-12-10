using Microsoft.AspNetCore.Mvc;
using RazorPages.Services;
using System.Threading.Tasks;

namespace RazorPages.ViewComponents
{
    public class IPodViewComponent : ViewComponent
    {

        public IPodViewComponent()
        {
        
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View();
        }
    }
}