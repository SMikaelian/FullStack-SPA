using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Okta.AspNetCore;

namespace backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = OktaDefaults.ApiAuthenticationScheme;
                options.DefaultChallengeScheme = OktaDefaults.ApiAuthenticationScheme;
                options.DefaultSignInScheme = OktaDefaults.ApiAuthenticationScheme;
            })
            .AddOktaWebApi(new OktaWebApiOptions()
            {
                OktaDomain = "https://dev-504074.okta.com"
            });

            services.AddCors(options => options.AddPolicy("Cors", builder =>
            {
                builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            }));

            //services.AddDbContext<QuizContext>(opt => opt.UseInMemoryDatabase("quiz"));
            //services.AddDbContext<UserDbContext>(opt => opt.UseInMemoryDatabase("user"));
            //services.AddIdentity<IdentityUser, IdentityRole>().AddEntityFrameworkStores<UserDbContext>();

            //var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is the secret phrase"));
            //JWT authentication - token capture and validation by back end
            //services.AddAuthentication(options =>
            //{
            //    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            //    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            //}).AddJwtBearer(cfg =>
            //{
            //    cfg.RequireHttpsMetadata = false;
            //    cfg.SaveToken = true;
            //    cfg.TokenValidationParameters = new TokenValidationParameters()
            //    {
            //        IssuerSigningKey = signingKey,
            //        ValidateAudience = false,
            //        ValidateIssuer = false,
            //        ValidateLifetime = false,
            //        ValidateIssuerSigningKey = true
            //    };
            //});

            //services.AddDbContext<UniversityDBContext>(options =>
            //{
            //    options.UseSqlServer(Configuration.GetConnectionString("UniversityDBConnection"));
            //
            //});

            services.AddMvc();
            //.SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddDbContext<QuizContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("Development")));
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseAuthentication();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseCors("Cors");
            //app.UseMvc();
    }
    }
}
