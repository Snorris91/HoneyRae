import { useEffect, useState } from "react";
import { getNonStaffUsers} from "../../services/userService";
import "./Customer.css";
import { User } from "../../users/User";

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
        return <User user={customerObj} key={customerObj.id}/>;
      })}
    </div>
  );
};
