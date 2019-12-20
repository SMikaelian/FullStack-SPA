# FullStack-SPA:
- Creating a Single Page Web Application that uses Angular as front-end and .NET Core as back-end.
- The project's back-end architecture is ASP.NET Core MVC.
- The project uses an Azure cloud SQL Database.
- The intention of this project is to practice Object Oriented Design by creating a clean full stack architecture, using dependency injection (Entity Framework), creating REST API's, and implementing Authentication. 
-  I will be performing Unit Testing and eventually host the project on Azure.

# Guessing Game:
GuessingGame is a Single Page Application that lets you create games, and quizzes within each game, add/edit the questions for each quiz and post them.


# How to use:
- Sign in to Okta with the dummy account:
Username: testing@myguessinggame.com
Password: G123456789g
OR Register using okta by pressing the login and signing up with Okta.

- Start Playing existing games by going to the Play tab and selecting your guesses. The application will display the user's score after they hit the Finish button.

- Users can make their own games by Filling out a game title in the main page under New Game, Post the game, picking it from the "My Games:" List and select edit questions and hitting post after they are done. Once Posted, users can go onto the Play tab and experience the game.

- Users can select any game from the My Games list and edit the name, and questions.

# This project satisfied the following requirements:
## SPA
Angular is utilized for the view portion of the MVC.

## MVC
The project is done in Visual Studio 2019 and ASP.NET Core is utilized to create an MVC Application with Models, and Controllers.

## ORM 
The project is utilizing Entity Framework for Object Relational Mapping, I used a SQL database (Azure DB) ran migrations. It can be found in the GameContext.cs where there is a section indicating the foreign and primary key relationships for the Model's elements.

## Dependency Injections
Dependency Injections is being done by default in Angular and ASP.NET Core, it can be found throughout the code.

## Authentication, Authorization, and Single Sign On
The third party Identity Provider Okta is used to authenticate users and to only allow authenticated users to create new games and edit the questions and guessing options of the games.

## Continous Deployment & Continous Integration
Microsoft Azure DevOps is being utilized to continuously deploy the backend.
Netlify is being utilized to host the Angular Application which has a built in function to allow continous deployment everytime a merge happens to production branch on GitHub. 
I have exported the YAML scripts and placed it under CD-CI folder in the repository.

## Deployment
The backend is being hosted on Azure Web (https://guessinggame20191216110748.azurewebsites.net/)
The frontend is being hosted on Netlify (https://myguessing-game.netlify.com/)

## Unit Testing
I attempted Unit Testing and I have generated some code for it. It can be found in the repository under Unit Testing.


### Objectives of the project:
Creating and configuring the Angular project.
Creating get and post routes in an ASP.NET Core controller - CRUD operations.
Updating Angular service to post to API.
Persistence with Entity Framework.
Displaying and editing data in Angular with ASP.NET Core.
Creating forms and navigating to different views in Angular.
Associations between entities with Angular and Entity Framework.
Setting up Identity Framework and 3rd Party Authentication.
