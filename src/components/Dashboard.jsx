import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { Card, Row, Col, Spinner } from 'react-bootstrap';

const Dashboard = () => {
  const { students } = useContext(StudentContext);

  // Function to calculate the average age
  const calculateAverageAge = (students) => {
    if (students.length === 0) return 0;
    const totalAge = students.reduce((sum, student) => sum + (student.age || 0), 0);
    return (totalAge / students.length).toFixed(2); // Returns average age with 2 decimal points
  };

  // Handle loading state
  if (!students) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Row>
        <Col md={4}>
          <Card className="text-center p-3 shadow-sm">
            <Card.Body>
              <Card.Title>Total Students</Card.Title>
              <Card.Text>{students.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center p-3 shadow-sm">
            <Card.Body>
              <Card.Title>Average Age</Card.Title>
              <Card.Text>{calculateAverageAge(students)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Additional stats can be added here */}
      </Row>
    </div>
  );
};

export default Dashboard;
