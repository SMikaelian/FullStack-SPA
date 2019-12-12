using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public partial class Quiz
    {
        public Quiz()
        {
            Question = new HashSet<Question>();
        }

        [Column("ID")]
        public int Id { get; set; }
        [StringLength(256)]
        public string Title { get; set; }
        [StringLength(256)]
        public string OwnerId { get; set; }

        [InverseProperty("Quiz")]
        public ICollection<Question> Question { get; set; }
    }
}
