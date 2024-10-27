// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import Home from './pages/Home';
import RegisterStudent from './pages/RegisterStudent';
import StudentInfo from './pages/StudentInfo';
import StudentListPage from './pages/StudentListPage';
import Navigation from './components/Navigation'; // Assuming you have a Navbar component
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <StudentProvider> 
                <Navigation /> {/* Render Navigation component */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<RegisterStudent />} />
                    <Route path="/student-info/" element={<StudentInfo />} />
                    <Route path="/students" element={<StudentListPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
        </StudentProvider>
    );
};

export default App;
