using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using guessinggame;
using guessinggame.Models;
using Microsoft.AspNetCore.Authorization;

namespace guessinggame.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizzesController : ControllerBase
    {
        readonly QuizContext _context;

        public QuizzesController(QuizContext context)
        {
            _context = context;
        }

        // GET: api/Games
        //[Authorize]
        [HttpGet]
        public IEnumerable<Quiz> GetQuiz()
        {
            //var userId = HttpContext.User.Claims.First().Value;
            return _context.Quiz;
            //.Where(q => q.OwnerId == userId);
        }

        [HttpGet("all")]
        public IEnumerable<Quiz> GetAllQuizzes()
        {
            return _context.Quiz;
        }


        // GET: api/Games/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetQuiz([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var quiz = await _context.Quiz.SingleOrDefaultAsync(m => m.ID == id);

            if (quiz == null)
            {
                return NotFound();
            }

            return Ok(quiz);
        }

        // PUT: api/Quizzes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuiz([FromRoute] int id, [FromBody] Quiz quiz)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != quiz.ID)
            {
                return BadRequest();
            }

            _context.Entry(quiz).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuizExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Quizzes
        //[Authorize]
        [HttpPost]
        public async Task<IActionResult> PostQuiz([FromBody] Quiz quiz)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //var userId = HttpContext.User.Claims.First().Value;

            //quiz.OwnerId = userId;
            _context.Quiz.Add(quiz);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (QuizExists(quiz.ID))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetQuiz", new { id = quiz.ID }, quiz);
        }

        // DELETE: api/Quizzes/5
        [HttpDelete]
        public async Task<IActionResult> DeleteQuiz([FromRoute] Quiz quiz)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //var quiz = await _context.Quiz.FindAsync(id);
            _context.Quiz.Remove(quiz);
            await _context.SaveChangesAsync();

            return Ok(quiz);
            //return NoContent();
        }

        private bool QuizExists(int id)
        {
            return _context.Quiz.Any(e => e.ID == id);
        }

        // DELETE: api/Quizzes/5
        //[HttpDelete("{quizId}")]
        //public async Task<IActionResult> DeleteQuiz([FromRoute] int id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    //var quiz = await _context.Quiz.FindAsync(id);
        //    var quiz = await _context.Quiz.SingleOrDefaultAsync(m => m.ID == id);
        //    if (quiz == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Quiz.Remove(quiz);
        //    await _context.SaveChangesAsync();

        //    //return Ok(quiz);
        //    return NoContent();
        //}
    }
}