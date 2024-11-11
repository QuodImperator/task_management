# Task Management System

A full-stack task management application built with Spring Boot and Angular.

## Technologies

- Backend: Spring Boot 3
- Frontend: Angular
- Database: MySQL
- Authentication: Spring Security

## Prerequisites

- Java 17+
- Node.js and npm
- MySQL (XAMPP)
- Maven

## Setup & Running

### Database
1. Start MySQL in XAMPP
2. Create database: `task_management`

### Backend
1. Navigate to `task-management-backend`
2. Update `application.properties` with your MySQL credentials
3. Run: `mvn spring-boot:run`
4. Backend will start on `http://localhost:8081`

### Frontend
1. Navigate to `task-management-frontend`
2. Install dependencies: `npm install`
3. Run: `ng serve`
4. Frontend will start on `http://localhost:4200`

## Features

- Task CRUD operations
- User authentication
- Task status tracking
- Priority management
- Due date management

## Project Structure

```
task-management/
├── task-management-backend/    # Spring Boot API
├── task-management-frontend/   # Angular frontend
└── README.md
```