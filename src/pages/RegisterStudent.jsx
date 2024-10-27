// RegisterStudent.jsx
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import RegistrationForm from '../components/RegistrationForm';
import { StudentContext } from '../context/StudentContext'; // Ensure this is where your StudentContext is defined

const RegisterStudent = () => {
    const { registerStudent } = useContext(StudentContext); // Get addStudent function from context

    // Define the handleRegister function to call addStudent with the form data
    const handleRegister = (studentData) => {
        registerStudent(studentData); // Invoke addStudent with the new student data
        console.log(studentData);
    };

    return (
        <Container className="mt-4">
            <h2>Register New Student</h2>
            {/* Pass handleRegister to RegistrationForm as onRegister */}
            <RegistrationForm onRegister={handleRegister} />
        </Container>
    );
};

export default RegisterStudent;
