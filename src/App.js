import "./app.css";
import { CustomerList } from "./components/customers/CustomersList";
import { TicketList } from "./components/tickets/TicketList";
import { EmployeeList } from "./employees/Employees";

export const App = () => {
  return (
    <>
      {/* <TicketList /> */}
      <CustomerList />
      <EmployeeList />
    </>
  );
};
