using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace M4DevonWolsleger.Models
{
    public class GradeCalcModel
    {
        //Validation that makese sure the number is within the range neccessary for grades
        [Range(0, 100)]
        public float Assignment { get; set; }
        [Range(0, 100)]
        public float GroupProj { get; set; }
        [Range(0, 100)]
        public float Quizzes { get; set; }
        [Range(0, 100)]
        public float MidtermEx { get; set; }
        [Range(0, 100)]
        public float FinalEx { get; set; }
        [Range(0, 100)]
        public float Intex { get; set; }

    }
}
