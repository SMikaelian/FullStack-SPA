using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace guessinggame.Models
{
    //public class Game
    //{
    //    public int ID { get; set; }
    //    public string Title { get; set; }

    //    public string OwnerId { get; set; }
    //}
    public class Quiz
    {
        public Quiz()
        {
            Question = new HashSet<Question>();
        }

        [Column("ID")]
        public int ID { get; set; }
        [StringLength(256)]
        public string Title { get; set; }
        [StringLength(256)]
        public string OwnerId { get; set; }

        [InverseProperty("Quiz")]
        public ICollection<Question> Question { get; set; }
    }
}
