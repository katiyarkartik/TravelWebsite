import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Otpcomp({ email }) {
  const [show, setShow] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [isOtpValid, setOtpValid] = useState(false);
  const [otpStatus, setOtpStatus] = useState("");
  const otpSent = "505050";
  const handleRegister = () => {
    if (otpValue === otpSent) {
      setOtpValid(true);
    }
    console.log(isOtpValid)
    if (isOtpValid) {
      setOtpStatus("");
      setShow(false);
    } else {
      setOtpStatus("Incorrect OTP please try again");
      console.log("Incorrect OTP, Please Try again");
      setShow(true);
    }
    console.log(otpValue);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="login-btn">
        Signup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Verify your Email Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h3 style={{ textAlign: "center" }}>
              We have sent you an OTP at {email}
            </h3>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter OTP</Form.Label>
              <Form.Control
                as="input"
                rows={3}
                style={{
                  textAlign: "center",
                  color: "#000",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  fontSize: "24px",
                }}
                onChange={(e) => {
                  setOtpValue(e.target.value);
                }}
              />
            </Form.Group>
            <h4>{otpStatus}</h4>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleRegister}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Otpcomp;
