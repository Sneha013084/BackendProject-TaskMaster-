## TaskMaster API:

A RESTful API for managing  users ,projects and tasks. It includes user authentication with jwt and role based access to ensure security.

## Technologies used:

Node.js, Express.js

MongoDB & Mongoose

JWT for authentication

bcrypt for password hashing

Postman or Insomnia for testing

## API endpoints:

## User Routes: 

              POST /users/register → create user

              POST /users/login → login, get token

## Project Routes:

              POST /projects → create project
              
              GET /projects → get my projects
              
              GET /projects/:id → get project by ID (owner only)
              
              PUT /projects/:id → update project (owner only)
              
              DELETE /projects/:id → delete project (owner only)

              
