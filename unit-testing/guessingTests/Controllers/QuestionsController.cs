using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using guessinggame;
using guessinggame.Models;

namespace guessinggame.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        readonly QuizContext _context;

        public QuestionsController(QuizContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public IEnumerable<guessinggame.Models.Question> GetQuestions()
        {
            return _context.Questions;
        }

        // GET: api/Questions
        [HttpGet("{quizId}")]
        public IEnumerable<guessinggame.Models.Question> GetQuestions([FromRoute] int quizId)
        {
            return _context.Questions.Where(q => q.QuizId == quizId);
        }

        // GET: api/Questions/5
        //[HttpGet("{id}")]
        //public async Task<IActionResult> GetQuestion([FromRoute] int id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var question = await _context.Questions.FindAsync(id);

        //    if (question == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(question);
        //}

        // PUT: api/Questions/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuestion(int id, [FromBody] guessinggame.Models.Question question)
        //public async Task<IActionResult> PutQuestion([FromRoute] int id, [FromBody] guessinggame.Models.Question question)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != question.ID)
            {
                return BadRequest();
            }

            _context.Entry(question).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuestionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(question);
        }

        // POST: api/Questions
        [HttpPost]
        public async Task<IActionResult> PostQuestion([FromBody] guessinggame.Models.Question question)
        {
            var quiz = _context.Quiz.SingleOrDefault(q => q.ID == question.QuizId);

            if (quiz == null)
                return NotFound();

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Questions.Add(question);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (QuestionExists(question.ID))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }
            return Ok(question);
            //return CreatedAtAction("GetQuestion", new { id = question.ID }, question);
        }

        // DELETE: api/Questions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestion([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var question = await _context.Questions.FindAsync(id);
            if (question == null)
            {
                return NotFound();
            }

            _context.Questions.Remove(question);
            await _context.SaveChangesAsync();

            return Ok(question);
        }

        private bool QuestionExists(int id)
        {
            return _context.Questions.Any(e => e.ID == id);
        }
    }
}