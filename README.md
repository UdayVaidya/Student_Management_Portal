# Student Management Portal

A fully functional Student Management Portal built with React, providing essential features to manage student information, such as viewing, registering, updating, and deleting student records. The portal offers a user-friendly interface, including a search bar for quick access to specific student details, making it ideal for educational institutions or administrative tasks.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [API & Data Management](#api--data-management)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Dashboard**: Overview of total students and recent records.
- **Student List**: Displays all students with details such as name, email, age, and class.
- **Student Registration**: Form for adding new students.
- **Student Details**: Detailed view for each student, including contact information.
- **Search Functionality**: Search by student name or ID for quick access.
- **Edit/Delete Student Records**: Update or delete records as needed.
- **Data Persistence**: Uses mock data with local storage simulation for persistence.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/UdayVaidya/CodeFlow-Nexus.git
    ```
2. Navigate to the project directory:
    ```bash
    cd student-management-portal
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open your browser and visit `http://localhost:3000` to view the portal.

## Usage
1. **Dashboard**: View the total number of students.
2. **Register a Student**: Go to the “Register” page, fill out the form, and submit to add a new student.
3. **View Students**: Access the "Student List" to view all registered students.
4. **Search Students**: Use the search bar on the "Student Info" page to filter students by name or ID.
5. **Edit/Delete**: Update or remove records directly from the student list.


## Components Overview

### Navigation
Provides navigation between pages like Home, Register, Student List, and Student Info.

### RegistrationForm
Contains the form fields for registering new students and handles form submission.

### StudentList
Displays all students in a table format and provides the delete button to remove student records.

### StudentDetails
Displays detailed information for a selected student, including name, age, class, address, and contact.

## API & Data Management

- **Data Source**: The project uses a `data.json` file as the mock data source.
- **API Utilities**: Functions like `fetchStudents`, `addStudentApi`, `updateStudentApi`, and `deleteStudentApi` simulate CRUD operations.
- **Context API**: `StudentContext` manages the global state for students, making it accessible across components.

## Technologies Used
- **React**: Frontend framework for building UI components.
- **Bootstrap**: Styling and layout.
- **React-Router**: For page navigation.
- **Context API**: State management across components.
- **Vite**: Development server and build tool for React projects.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.

## License
This project is open-source and available under the MIT License.
