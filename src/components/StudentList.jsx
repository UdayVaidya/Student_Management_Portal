import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { Table, Button } from 'react-bootstrap';

const StudentList = () => {
    const { students, deleteStudent } = useContext(StudentContext);

    return (
        <div className="container mt-4">
            <h2>Student List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Class</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.age}</td>
                            <td>{student.class}</td>
                            <td>{student.address}</td>
                            <td>{student.phone}</td>
                            <td>
                                <Button variant="danger" onClick={() => deleteStudent(student.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default StudentList;
