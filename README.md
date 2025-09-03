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


## Task Routes:

              POST /projects/:projectId/tasks → create task
              
              GET /projects/:projectId/tasks → get tasks
              
              PUT /tasks/:id → update task
              
              DELETE /tasks/:id → delete task
              
## How it works:


## User Registration & Login:

              User sends email/password to /register → password is hashed → user saved → JWT returned
              
              Login at /login → password verified → JWT returned
              
## Protected Routes

              JWT sent in Authorization header
              
              Middleware validates token → sets req.user
              
              Routes check ownership (e.g., project owner) before granting access

## Project & Task Management

            Users can create projects
            
            Tasks are tied to projects
            
            Only project owner can update/delete project
            
            Only authorized users can access their tasks


     




              
