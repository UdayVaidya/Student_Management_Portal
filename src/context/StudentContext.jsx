import React, { createContext, useState, useEffect } from 'react';
import { fetchStudents } from '../utils/api';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents().then((data) => setStudents(data));
    }, []);

    const registerStudent = (studentData) => {
        setStudents([...students, { id: students.length + 1, ...studentData }]);
    };

    const updateStudent = (updatedStudent) => {
        setStudents(students.map(student => (student.id === updatedStudent.id ? updatedStudent : student)));
    };

    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <StudentContext.Provider value={{ students, registerStudent, updateStudent, deleteStudent }}>
            {children}
        </StudentContext.Provider>
    );
};
