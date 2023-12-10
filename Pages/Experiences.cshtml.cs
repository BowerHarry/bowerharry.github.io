using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace harry_bower_website.Pages;

public class ExperiencesModel : PageModel
{
    private readonly ILogger<ExperiencesModel> _logger;

    public ExperiencesModel(ILogger<ExperiencesModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }
}
