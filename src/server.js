import data from './data.json';

export const getEmployees = async (filter) => new Promise((resolve) => setTimeout(() => {
  resolve(filter && typeof filter === 'function' ? filter(data) : data);
}, 1000));

export const getActiveEmployees = async () => {
  const filterActiveEmployees = (allEmployees) => allEmployees.filter((employee) => employee.isActive === 'Y');
  return getEmployees(filterActiveEmployees);
};
