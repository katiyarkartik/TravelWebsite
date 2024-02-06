import Accordion from "react-bootstrap/Accordion";
import { FaUserCircle } from "react-icons/fa";
import { CiLogout, CiSettings, CiHeart } from "react-icons/ci";

import "./Usernav.css";
const Usernav = ({ onUpdateValue })=> {
  const handleLogout = () => {
    onUpdateValue(false);
  };
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header className="user">
          <div>
            <FaUserCircle />
          </div>
          <div className="name">John Doe</div>
        </Accordion.Header>
        <Accordion.Body>
          <ul className="user-expanded">
            <li>Profile</li>
            <li>My Tours</li>
            <li>
              Wishlist
            </li>
            <li>Account</li>
            <li>
              Settings
            </li>
            <li onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Usernav;
