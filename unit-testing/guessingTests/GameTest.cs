using System;
using Xunit;
using guessinggame.Controllers;
using guessinggame.Models;
using guessinggame;
using Moq;
using System.Data.Entity;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Text;


namespace guessingTests
{
    public class QuizTest
    {
        [Fact]
        public void Test1()
        {
        }
        private QuizContext GetContextWithData()
        {
            var options = new DbContextOptionsBuilder<QuizContext>().UseInMemoryDatabase(Guid.NewGuid().ToString()).Options;
            var context = new QuizContext(options);

            var cQuiz = new Quiz { ID = 1, Title = "COMP SCI" };
            var pQuiz = new Quiz { ID = 2, Title = "PHYSICS" };
            context.Quiz.Add(cQuiz);
            context.Quiz.Add(pQuiz);

            context.Questions.Add(new Question { ID = 1, CorrectAnswer = "DATA", QuizId = 1 });
            context.Questions.Add(new Question { ID = 2, CorrectAnswer = "ALGORITHMS", QuizId = 1 });
            context.Questions.Add(new Question { ID = 3, CorrectAnswer = "OS", QuizId = 1 });
            context.Questions.Add(new Question { ID = 4, CorrectAnswer = "GRAVITY", QuizId = 2 });
            context.Questions.Add(new Question { ID = 5, CorrectAnswer = "La Trappe Bock", QuizId = 2 });
            context.Questions.Add(new Question { ID = 6, CorrectAnswer = "St. Bernardus Tripel", QuizId = 2 });
            context.Questions.Add(new Question { ID = 7, CorrectAnswer = "Grottenbier Bruin", QuizId = 2 });
            context.Questions.Add(new Question { ID = 8, CorrectAnswer = "St. Bernardus Pater 6", QuizId = 1 });
            context.Questions.Add(new Question { ID = 9, CorrectAnswer = "La Trappe Quadrupel", QuizId = 1 });
            context.Questions.Add(new Question { ID = 10, CorrectAnswer = "Westvleteren 12", QuizId = 2 });
            context.SaveChanges();

            return context;
        }
        private IEnumerable<Quiz> GetTestQuiz()
        {
            return new List<Quiz>()
            {
                new Quiz()
                { ID = 1, Title = "COMP SCI" },
                new Quiz()
                { ID = 2, Title = "PHYSICS" }
            };
        }

        [Fact(DisplayName = "Index should return default view")]
        public void Index_should_return_default_view()
        {
            using (var controller = new QuizzesController(context))
            {
                var result = await controller.AddPost(post);

                Assert.NotNull(result);
                Assert.True(string.IsNullOrEmpty(result.ViewName) || result.ViewName == "Index");
            }
        }

        [Fact(DisplayName = "Index should return valid model")]
        public void Index_should_return_valid_model()
        {
            using (var context = GetContextWithData())
            using (QuizzesController controller = new QuizzesController(context))
            {
                var result = controller.Index() as ViewResult;
                var model = result.Model as FrontPageModel;

                Assert.NotNull(model);
                Assert.NotNull(model.Top5);
                Assert.NotNull(model.Items);
                Assert.Equal(5, model.Top5.Count());
                Assert.Equal(10, model.Items.Count());
            }
        }

        [Fact(DisplayName = "Category should return 404 for missing category")]
        public void Category_should_return_404_for_missing_category()
        {
            using (var context = GetContextWithData())
            using (var controller = new QuizzesController(GetContextWithData()))
            {
                var result = controller.Category(-1) as NotFoundResult;

                Assert.NotNull(result);
            }

        }
    }
