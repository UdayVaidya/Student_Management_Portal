import React, { useContext, useState } from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import { StudentContext } from '../context/StudentContext';

const StudentInfo = () => {
    const { students } = useContext(StudentContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredStudents, setFilteredStudents] = useState([]);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const results = students.filter(student =>
            student.name.toLowerCase().includes(term.toLowerCase()) ||
            student.id.toString().includes(term)
        );
        setFilteredStudents(results);
    };

    return (
        <Container className="mt-4">
            <h2>Student Information</h2>
            <Form.Control
                type="text"
                placeholder="Search by name or ID"
                value={searchTerm}
                onChange={handleSearch}
            />
            {filteredStudents.map(student => (
                <Card key={student.id} className="mt-3">
                    <Card.Body>
                        <Card.Title>{student.name}</Card.Title>
                        <Card.Text>
                            <strong>Email:</strong> {student.email}<br />
                            <strong>Age:</strong> {student.age}<br />
                            <strong>Class:</strong> {student.class}<br />
                            <strong>Address:</strong> {student.address}<br />
                            <strong>Phone:</strong> {student.phone}<br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};

export default StudentInfo;
