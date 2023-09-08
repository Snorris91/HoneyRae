import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService";
import "./Ticket.css";
import { Ticket } from "./Ticket";
import { TicketFilterBar } from "./TicketFilterBar";

export const TicketList = ({currentUser}) => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

 const getAndSetTickets = () => {
  getAllTickets().then((ticketsArray) => {
    setAllTickets(ticketsArray);
    console.log(ticketsArray);
  });
 }

  useEffect(() => {
    getAndSetTickets()
  }, []);

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      );
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergencyOnly, allTickets]);

  useEffect(() => {
    const foundTickets = allTickets.filter(ticket => ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])

  return (
    <div className="tickets-containers">
      <h2>Tickets</h2>
      <TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm} />
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return <Ticket ticket={ticketObj} getAndSetTickets={getAndSetTickets} currentUser={currentUser} key={ticketObj.id} />;
        })}
      </article>
    </div>
  );
};
