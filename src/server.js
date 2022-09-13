import data from './data.json';

export const getAllEmployees = async () => new Promise((resolve) => setTimeout(() => {
  resolve(data);
}, 1000));

export const getActiveEmployees = async () => new Promise((resolve) => {
  const filterActiveEmployees = (allEmployees) => allEmployees.filter((employee) => employee.isActive === 'Y');

  setTimeout(() => {
    const activeEmployees = filterActiveEmployees(data);
    resolve(activeEmployees);
  }, 1000);
});
