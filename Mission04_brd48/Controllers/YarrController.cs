using Microsoft.AspNetCore.Mvc;
using Mission04_brd48.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_brd48.Controllers
{
    public class YarrController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }


        [HttpPost]
        public IActionResult GradeCalculator(GradeCalcModel model) //imports the model
        {
            return View();
        }


    }

}
