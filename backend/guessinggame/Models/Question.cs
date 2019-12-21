using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace guessinggame.Models
{
    public class Question
    {
        [Column("ID")]
        public int ID { get; set; }
        [StringLength(256)]
        public string Text { get; set; }
        [StringLength(256)]
        public string CorrectAnswer { get; set; }
        [StringLength(256)]
        public string Answer1 { get; set; }
        [StringLength(256)]
        public string Answer2 { get; set; }
        [StringLength(256)]
        public string Answer3 { get; set; }
        public int QuizId { get; set; }

        [ForeignKey("QuizId")]
        [InverseProperty("Question")]
        public Quiz Quiz { get; set; }
    }

    //public class Question
    //{
    //    public int ID { get; set; }
    //    public string Text { get; set; }
    //    public string CorrectAnswer { get; set; }
    //    public string Answer1 { get; set; }
    //    public string Answer2 { get; set; }
    //    public string Answer3 { get; set; }

    //    public int QuizId { get; set; }
    //}
}
