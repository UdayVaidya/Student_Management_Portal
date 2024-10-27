import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const StudentDetails = () => {
    const { students } = useContext(StudentContext);
    const { id } = useParams();
    const student = students.find(s => s.id === parseInt(id));

    return (
        <div className="container mt-4">
            <h2>Student Details</h2>
            {student ? (
                <Card>
                    <Card.Body>
                        <Card.Title>{student.name}</Card.Title>
                        <Card.Text>
                            <strong>Email:</strong> {student.email}<br />
                            <strong>Age:</strong> {student.age}<br />
                            <strong>Class:</strong> {student.className}<br />
                            <strong>Address:</strong> {student.address}<br />
                            <strong>Phone:</strong> {student.phoneNumber}<br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                <p>Student not found.</p>
            )}
        </div>
    );
};

export default StudentDetails;
