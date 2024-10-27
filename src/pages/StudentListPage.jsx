import React from 'react';
import { Container } from 'react-bootstrap';
import StudentList from '../components/StudentList';

const StudentListPage = () => {
    return (
        <Container className="mt-4">
            <h2>Registered Students</h2>
            <StudentList />
        </Container>
    );
};

export default StudentListPage;
