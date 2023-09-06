import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userService";
import { User } from "../../users/User";
import { Link } from "react-router-dom";
import "./Customer.css";

export const CustomerList = () => {
  const [customers, setCustomer] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomer(customerArray);
      console.log(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj) => {
        return (
          <Link to={`/customers/${customerObj.id}`} key={customerObj.id}>
            <User user={customerObj}  />
          </Link>
        );
      })}
    </div>
  );
};
// key={}
