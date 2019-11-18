using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        readonly QuizContext context;
        public QuestionsController(QuizContext context)
        {
            this.context = context; //reference to quiz context
        }
        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {
            return context.Questions;
            //return new Models.Question[]
            //{
            //    new Models.Question() {Text = "hello"},
            //    new Models.Question() {Text = "hi"}

            //};
        }
        [HttpGet("{quizId}")]
        public IEnumerable<Models.Question> Get([FromRoute] int quizId)
        {
            return context.Questions.Where(q => q.QuizId == quizId);
        }

        [HttpPost]   
        public async Task<IActionResult> Post([FromBody]Models.Question question)  //IActionResult Index() is same as HttpGet public void Post
        {
            var quiz = context.Quiz.SingleOrDefault(q => q.ID == question.QuizId);
            if (quiz == null)
                return NotFound();

            context.Questions.Add(question);
            //context.Questions.Add(new Models.Question() { Text = "test" });
            await context.SaveChangesAsync();
            return Ok(question);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Models.Question question)
        {
            if (id != question.ID)
                return BadRequest();
            //var question = await context.Questions.SingleOrDefaultAsync(q => q.ID == id);
            context.Entry(question).State = EntityState.Modified; //Telling the context that the question we get inside out question parameter once found set its state to modified and save changes
            await context.SaveChangesAsync();
            return Ok(question);
        }

    }
}