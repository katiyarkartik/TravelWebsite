import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/Navbar.css";

import { CiTimer } from "react-icons/ci";
import Usernav from "./Usernav";
import { PiHeartFill } from "react-icons/pi";

function Navbarcomp({ onUpdateValue }) {
  return (
    <section className="navbar-container">
      <div className="container-fluid">
        <ul>
          <li className="logo">
            <CiTimer />
            Travel
          </li>

          <li className="nav-right">
            <div className="bucket-list"></div>

            <Usernav onUpdateValue={onUpdateValue} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbarcomp;
