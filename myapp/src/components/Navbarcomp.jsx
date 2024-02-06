import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { CiTimer } from "react-icons/ci";
import Usernav from "./Usernav";
function Navbarcomp({ onUpdateValue }) {

  return (
    <section className="navbar-container">
      <div className="container-fluid">
        <ul>
          <li className="logo">
            <CiTimer />
            IndoTravel
          </li>

          <li>
            <Usernav onUpdateValue={onUpdateValue} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbarcomp;
