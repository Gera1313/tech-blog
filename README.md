# Tech Blog 

## The Project

The task is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The app will follow the Model-View-Controller (MVC) paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Usage

The following demonstrates the application's function:

![Signing into the app, clicking on buttons, and updating blog posts.](./Assets/home.png) 

![Signing into the app, clicking on buttons, and updating blog posts.](./Assets/newpost.png)

![Signing into the app, clicking on buttons, and updating blog posts.](./Assets/totalpost.png)

![Signing into the app, clicking on buttons, and updating blog posts.](./Assets/logout.png)

## Technologies Used

The application’s folder structure follows the Model-View-Controller paradigm. I used the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for the Views, used the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for the Models, and created an Express.js API for the Controllers.

I used the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

Node.js: Runtime environment for executing server-side JavaScript code.

Express: Web application framework for building RESTful APIs.

Express-Handlebars: Template engine for rendering HTML templates.

Express-Session: Middleware for managing user sessions.

MySQL2: MySQL database driver for Node.js.

Sequelize: Promise-based ORM for interacting with databases.

Bcrypt: Library for securely hashing passwords.

Dotenv: Utility for loading environment variables.

Heroku: A cloud platform that offers easy deployment and management of web applications. 

## Installations

This program has dependencies and requires their installation via ```npm install```. This project has a server component that can be invoked via Node at the command prompt using ```npm start```

## Notes

April 6, 2024: Revisiting this project to fix all of the things wrong with it. 

April 23, 2024: Finished all of the fixes. 

April 24, 2024: Deployed to Heroku successfully. 

## Links

[Repository](https://github.com/Gera1313/tech-blog)

[Deployed Link](https://radiant-harbor-32410-4d76770b0899.herokuapp.com/)

## License
  ### [MIT](https://choosealicense.com/licenses/mit/)
  ### [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)