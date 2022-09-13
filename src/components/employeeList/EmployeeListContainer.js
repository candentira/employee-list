import { useEffect, useState } from 'react';
import EmployeeList from './EmployeeList';
import Loading from '../common/Loading';
import PrintButton from '../common/PrintButton';
import { getActiveEmployees } from '../../server';

export default function EmployeeListContainer() {
  const [employees, setEmployees] = useState([]);
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

  const consolePrint = (employee) => {
    // as per requirements, could be changed in future
    // eslint-disable-next-line
    console.log(employee);
  };

  return dataLoaded ? (
    <>
      <EmployeeList employees={employees} />
      <PrintButton data={employees} onClick={consolePrint} />
    </>
  ) : (
    <Loading />
  );
}
