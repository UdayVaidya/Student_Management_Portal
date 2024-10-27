import mockData from '../data.json';

// Mock API functions
export const fetchStudents = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 500);
  });
};

export const addStudentApi = (student) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...student, id: Date.now().toString() }), 500);
  });
};

export const updateStudentApi = (updatedStudent) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(updatedStudent), 500);
  });
};

export const deleteStudentApi = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(id), 500);
  });
};
