# React + Vite
# Task Management Application

A simple Task Management Application built with Vite, React, and a RESTful API. This application allows users to create, read, update, and delete tasks. The project demonstrates proficiency in both front-end and back-end development skills.

## Features

- Landing page displaying a list of tasks.
- Ability to add new tasks with a title, description, and due date.
- View detailed information of each task.
- Edit existing tasks.
- Delete tasks.
- Responsive design for both desktop and mobile devices.

## Technologies Used

- **Front-end**: React, Vite, HTML, CSS, JavaScript
- **Back-end**: Node.js, Express
- **Database**: (Your chosen database, e.g., MongoDB, PostgreSQL)
- **Icons**: (Describe the source of your icons, e.g., custom icons or from a library)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
2. Install the dependencies:
npm install

3. Start the development server:
npm run dev

4. Open your browser and navigate to:
http://localhost:3000

#API Endpoints
Get All Tasks
URL: /api/tasks
Method: GET
Description: Retrieves all tasks.
Create a New Task
URL: /api/tasks
Method: POST
Description: Creates a new task.
Body Parameters:
task: String (required)
description: String (optional)
dueDate: Date (optional)
status: String (default: 'todo')
Get a Single Task
URL: /api/tasks/:id
Method: GET
Description: Retrieves a single task by its ID.
Update a Task
URL: /api/tasks/:id
Method: PUT
Description: Updates an existing task.
Body Parameters:
task: String (optional)
description: String (optional)
dueDate: Date (optional)
status: String (optional)
Delete a Task
URL: /api/tasks/:id
Method: DELETE
Description: Deletes a task by its ID.
Components
TaskForm
Description: Form for adding and editing tasks.
Props:
setTasks: Function to set the tasks state.
TaskColumn
Description: Column to display tasks based on their status.
Props:
title: Title of the column.
icon: Icon for the column.
tasks: List of tasks.
status: Status of the tasks.
handleDelete: Function to delete a task.
handleUpdate: Function to update a task.
TaskCard
Description: Card to display individual task details.
Props:
title: Title of the task.
description: Description of the task.
tags: Tags associated with the task.
handleDelete: Function to delete the task.
handleUpdate: Function to update the task.
index: Index of the task in the tasks array.
Styling
File: TaskCard.css
Classes:
.task_edit
.task_save
.task_delete
.delete_icon
.task_input
.task_description
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Icons from (describe your icon source, e.g., Freepik, FontAwesome, etc.)
(Any other acknowledgments)
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.
