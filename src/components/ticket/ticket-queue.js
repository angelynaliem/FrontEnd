import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../app";

function TicketQueue() {
  const { axios } = useContext(AuthContext)();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get("/api/tickets/queue").then(({ data }) => {
      console.log(data);
      setTickets(data);
    });
  }, []);

  return (
    <>
      <h2>Ticket Queue</h2>
      <ol className="ticket-list">
        {tickets.map(t => (
          <li key={t.ticketsid}>
            <Link to={`/ticket/${t.ticketsid}`}>{t.title}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}

export default TicketQueue;
