import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/OwnerInfo.css";
import { PiSealCheckFill } from "react-icons/pi";
import { FaMedal } from "react-icons/fa6";

function OwnerInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="owner-info-card">
      <div className="owner" onClick={handleShow}>
        <div className="owner-img">
          <img
            src="https://media.istockphoto.com/id/1329936184/photo/head-shot-portrait-of-smiling-businesswoman-intern-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=MCbv5iIu9hUd3tFVP-UP_gx4BrvXqfUD5lzNpBL9P7g="
            alt=""
          />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="owner-info-box">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="owner-profile-info">
            <div className="owner-status">
              <div className="owner-photo">
                <img
                  src="https://media.istockphoto.com/id/1329936184/photo/head-shot-portrait-of-smiling-businesswoman-intern-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=MCbv5iIu9hUd3tFVP-UP_gx4BrvXqfUD5lzNpBL9P7g="
                  alt=""
                />
                <div className="verify-tag">
                  <PiSealCheckFill />
                </div>
              </div>
              <div className="owner-name">John Doe</div>
              <div className="owner-level">
                <FaMedal /> Superhost
              </div>
            </div>
            <div className="owner-stats">
              <div className="owner-host-count"></div>
              <div className="owner-rating"></div>
              <div className="owner-reviews"></div>
            </div>
          </div>
          <div className="about-owner">
            <ul>
              <li>lore hae rbuab utg lojwb</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Have a Chat
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default OwnerInfo;
