import { useEffect, useState } from 'react';
import EmployeeList from './EmployeeList';
import Loading from '../common/Loading';
import PrintButton from '../common/PrintButton';
import Search from '../common/Search';
import { getActiveEmployees } from '../../server';

export default function EmployeeListContainer() {
  const [employees, setEmployees] = useState([]);
  const [employeeFilter, setEmployeeFilter] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getActiveEmployees();
      return { success: true, data };
    } catch (error) {
      // better logging should be used
      // eslint-disable-next-line
      console.log(error);
      return { success: false };
    }
  };

  useEffect(() => {
    (async () => {
      setDataLoaded(false);
      const res = await fetchData();
      if (res.success) {
        setEmployees(res.data);
        setDataLoaded(true);
      }
    })();
  }, []);

  const onSearchChange = (filter) => setEmployeeFilter(filter.toLowerCase());

  const filteredEmployees = employees.filter((employee) => {
    // could be searching by any employee data
    // const dataStr = Object.values(employee).join(' ').toLowerCase();
    const dataStr = `${employee.firstName} ${employee.lastName}`.toLowerCase();
    return employeeFilter ? dataStr.includes(employeeFilter) : true;
  });

  const consolePrint = (employee) => {
    // as per requirements, could be changed in future
    // eslint-disable-next-line
    console.log(employee);
  };

  return dataLoaded ? (
    <>
      <Search onChange={onSearchChange} />
      <EmployeeList employees={filteredEmployees} />
      <PrintButton data={filteredEmployees} onClick={consolePrint} />
    </>
  ) : (
    <Loading />
  );
}
