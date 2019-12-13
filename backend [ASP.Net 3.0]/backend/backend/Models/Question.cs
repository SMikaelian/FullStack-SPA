using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public partial class Question
    {
        [Column("ID")]
        public int Id { get; set; }
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
}
