import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../app";

function Header(props) {
  const app = useContext(AppContext);
  const { user } = app.state;

  return (
    <header className="top">
      <nav>
        <h1 className="title">
          <Link to="/">DevDesk</Link>
        </h1>
        <div>
          {user ? (
            <Link to="/logout">Logout</Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
