using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.ViewModels
{
    public class QuestionViewModel
    {
        public IEnumerable<Question> Question { get; set; }
    }
}
