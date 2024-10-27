import React, { useState } from 'react';
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';

const RegistrationForm = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        className: '',
        address: '',
        phoneNumber: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email))
            errors.email = 'A valid email is required';
        if (!formData.age || isNaN(formData.age)) errors.age = 'Age must be a number';
        if (!formData.className) errors.className = 'Class is required';
        if (!formData.address) errors.address = 'Address is required';
        if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber))
            errors.phoneNumber = 'Phone number must be 10 digits';

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onRegister(formData);
            setSuccessMessage('Student registered successfully!');
            setFormData({ name: '', email: '', age: '', className: '', address: '', phoneNumber: '' });
            setErrors({});
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="container mt-4">
            {successMessage && <Alert variant="success">{successMessage}</Alert>}

            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="formName">
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="formAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            isInvalid={!!errors.age}
                        />
                        <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formClass">
                        <Form.Label>Class</Form.Label>
                        <Form.Control
                            type="text"
                            name="className"
                            value={formData.className}
                            onChange={handleChange}
                            isInvalid={!!errors.className}
                        />
                        <Form.Control.Feedback type="invalid">{errors.className}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    isInvalid={!!errors.phoneNumber}
                />
                <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
                Register Student
            </Button>
        </Form>
    );
};

export default RegistrationForm;
