import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();
  return (
    <header className="top">
      <nav>
        <h1 className="title">
          <Link to="/">DevDesk</Link>
        </h1>
        <NavLink to="/saved">Saved Tickets</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/user/username">User</NavLink>
        <NavLink to="/ticket/1">Ticket</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        {/* <SearchBar /> */}
      </nav>
    </header>
  );
}

export default Header;
