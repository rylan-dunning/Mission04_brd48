using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_brd48.Models
{
    public class GradeCalcModel
    {
        //Each line is required and must be from 0 to 100 or the div will list the errors below the form

        [Required]
        [Range(0, 100, ErrorMessage = "Value must be from 0 to 100")]
        public string Assignments { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Value must be from 0 to 100")]
        public string Quizzes { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Value must be from 0 to 100")]
        public string GroupProjects { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Value must be from 0 to 100")]
        public string Intex { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Value must be from 0 to 100")]
        public string Exams { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Value must be from 0 to 100")]
        public string ExtraCredit { get; set; }

    }
}
