import { useEffect, useState } from "react";
import { getStaffUsers } from "../services/userService";
import "./Employees.css";
import { User } from "../users/User";

export const EmployeeList = () => {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeeArray) => {
      setEmployee(employeeArray);
      console.log(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return <User user={employeeObj} key={employeeObj.id} />;
      })}
    </div>
  );
};
