import React, { useState, useEffect } from "react";
import './Signup.css';
import apps from "../../firebase/Index";
import welcome from "../../Photos/undraw_welcome_cats_thqn__1_-removebg-preview.png";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import Link from "@mui/material/Link";
import { db } from "../../firebase/Index";
import { useUserAuth } from "../../context/UserAuthContext";
import "firebase/compat/firestore";

import Swal from "sweetalert2";

const Signup = () => {  

const [FirstName, setFirstName] = useState("");
const [LastName, setLastName] = useState("");
const [Mobile, setMobile] = useState(null);
const [Email, setEmail] = useState("");
const [Avail, setAvail] = useState("");
const [Need, setNeed] = useState("");
const [Salary, setSalary] = useState("");
const [Region, setRegion] = useState("");
const [PaySlip, setPaySlip] = useState(null);
const [Government, setGovernment] = useState(null);
const [Selfie, setSelfie] = useState(null);
const [UtilityBill, setRUtilityBill] = useState(null);

  const [lists, setLists] = useState([]);
  const [single, setSingleDoc] = useState({});
  
  const [show, setShow] = useState(false);

  const handleClose3 = () => setShow(false);
  const handleShow3 = () => setShow(true);
  const [inputText, setInputText] = useState("");


const [show3, setShow3] = useState(false);
const [show2, setShow2] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleClose2 = () => setShow2(false);
const handleShow2 = () => setShow2(true);



  const handleSubmit = async (e) => {
    e.preventDefault();


    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      showConfirmButton: false,
      timer: 1000,
    });
    //createUserWithEmailAndPassword(auth, data.email, data.password);

    const username = e.target.EmailName.value;

    await db
      .collection("Signup")
      .doc(username)
      .set({
        firstName: FirstName,
        lastName: LastName,
        EmailAddress: Email,
        MobileNumber: Mobile,
        avail: Avail,
        NeedMoney: Need,
        RangeSalary: Salary,
        Region: Region,
        PaySlip: PaySlip,
        GovernmentID: Government,
        SelfieID: Selfie,
        UtilityBill: UtilityBill,
      });
    setShow(true);

    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile(null);
    setAvail("");
    setNeed("");
    setSalary("");
    setRegion("");
    setPaySlip(null);
    setGovernment(null);
    setSelfie(null);
    setRUtilityBill(null);
  };

 useEffect(() => {
      const q = query(collection(db, "Signup"), orderBy("timestamp", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setLists(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
      return () => unsubscribe();

 }, []);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = apps.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setPaySlip(await fileRef.getDownloadURL());
  };

  const onFileChange2 = async (e) => {
    const file = e.target.files[0];
    const storageRef = apps.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setGovernment(await fileRef.getDownloadURL());
  };

  const onFileChange3 = async (e) => {
    const file = e.target.files[0];
    const storageRef = apps.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setSelfie(await fileRef.getDownloadURL());
  };

  const onFileChange4 = async (e) => {
    const file = e.target.files[0];
    const storageRef = apps.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setRUtilityBill(await fileRef.getDownloadURL());
  };

  return (
    <>
      <div className="bg">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              <h2 className="but">
                <strong>AdvanceCare</strong>
              </h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Congratulations!</h2> 
            <p>
              We will now conduct a credit history check. If the credit check is
              successful, an Account Manager will call you based on the timeline
              you provided for your needs.
            </p>{" "}
            Please make sure your mobile is open for a call. Thank you!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={show2}
          onHide={handleClose2}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>AdvanceCare</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose2}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

        <div id="B" className="p-3 box col-md-5 card">
          <div className="text-center mb-1 mt-1">
            <img alt="AdvanceCare" className="img-circle" src={welcome} />
          </div>
          <h2 className="but">
            <strong>AdvanceCare</strong>
          </h2>
          <h6 className="mb-3 but2">
            <strong>Health Now </strong>
            <strong> Pay Later</strong>
          </h6>
          <h6 className="mb-3 but2">Signup to start your session</h6>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                value={FirstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputGroup.Text id="basic-addon1">
                <span
                  className="fas fa-user"
                  style={{ color: "#03989e" }}
                  aria-hidden="true"
                ></span>
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
                aria-describedby="basic-addon1"
                //autocomplete="off"
                required
                onChange={(e) => setLastName(e.target.value)}
              />{" "}
              <InputGroup.Text id="basic-addon1">
                <span
                  className="fas fa-user"
                  style={{ color: "#03989e" }}
                  aria-hidden="true"
                ></span>
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                type="email"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                //autocomplete="off"
                required
                name="EmailName"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGroup.Text id="basic-addon1">
                <span
                  className="fa-solid fa-envelope"
                  aria-hidden="true"
                  style={{ color: "#03989e" }}
                ></span>
              </InputGroup.Text>
            </InputGroup>
            <InputGroup>
              <FormControl
                type="number"
                placeholder="Mobile Number"
                aria-label="Mobile Number"
                aria-describedby="basic-addon1"
                //autocomplete="off"
                required
                onChange={(e) => setMobile(e.target.value)}
              />{" "}
              <InputGroup.Text id="basic-addon1">
                <span
                  className="fa-solid fa-mobile-screen"
                  aria-hidden="true"
                  style={{ color: "#03989e" }}
                ></span>
              </InputGroup.Text>
            </InputGroup>
            <strong className="terms">
              By filling up this form, you are agreeing to AdvanceCare's{" "}
              <span style={{ color: "#800" }}>Terms of Service</span> and
              <span style={{ color: "#800" }}> Privacy Policy</span>
            </strong>
            <br />
            <br />
            <strong>
              <span>
                How much do you need to avail of Health Now, Pay Later?
              </span>
            </strong>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <span
                  className="fa-solid fa-hand-holding-dollar"
                  aria-hidden="true"
                  style={{ color: "#03989e" }}
                ></span>
              </InputGroup.Text>
              <Form.Select
                aria-label="Default select example"
                name="Avail"
                className="form-control select2 text-xs"
                id="Avail"
                required
                onChange={(e) => setAvail(e.target.value)}
              >
                <option value="0">Select</option>
                <option value="P10,000 or less">P10,000 or less</option>
                <option value="P10,001 - P20,000">P10,001 - P20,000</option>
                <option value="P20,001 - P40,000">P20,001 - P40,000</option>
                <option value="P40,001 - P60,000">P40,001 - P60,000</option>
                <option value="P60,001 - P80,000">P60,001 - P80,000</option>
                <option value="P80,001 - P100,001">P80,001 - P100,001</option>
                <option value="P100,001 - P300,000">P100,001 - P300,000</option>
                <option value="300,001 - P500,000">300,001 - P500,000</option>
                <option value="P500,001 - P800,000">P500,001 - P800,000</option>
                <option value="P800,001 - P1,000,000">
                  P800,001 - P1,000,000
                </option>
              </Form.Select>
            </InputGroup>

            <strong>
              <span>When do you need the money?</span>
            </strong>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <span
                  className="fa-solid fa-comment-dollar"
                  aria-hidden="true"
                  style={{ color: "#03989e" }}
                ></span>
              </InputGroup.Text>
              <Form.Select
                aria-label="Default select example"
                name="NeedMoney"
                className="form-control select2 text-xs"
                id="NeedMoney"
                required
                onChange={(e) => setNeed(e.target.value)}
              >
                <option value="0">Select</option>
                <option value="Immediately">Immediately</option>
                <option value="2 days from now">2 days from now</option>
                <option value="5 days from now">5 days from now</option>
                <option value="10 days from now">10 days from now</option>
                <option value="In 1 month (preparing for medical expenses)">
                  In 1 month (preparing for medical expenses)
                </option>
              </Form.Select>
            </InputGroup>

            <strong>
              <span>How much is the range of your salary?</span>
            </strong>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <span
                  className="fa-solid fa-filter-circle-dollar"
                  aria-hidden="true"
                  style={{ color: "#03989e" }}
                ></span>
              </InputGroup.Text>
              <Form.Select
                aria-label="Default select example"
                name="RangeSalary"
                className="form-control select2 text-xs"
                id="RangeSalary"
                required
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="0">Select</option>
                <option value="P12,000 or less per month">
                  P12,000 or less per month
                </option>
                <option value="P12,001 - P20,000 per month">
                  P12,001 - P20,000 per month
                </option>
                <option value="P20,001 - P40,000 per month">
                  P20,001 - P40,000 per month
                </option>
                <option value="P40,001 - P80,000 per month">
                  P40,001 - P80,000 per month
                </option>
                <option value="P80,001 - 140,000 per month">
                  P80,001 - 140,000 per month
                </option>
                <option value="P140,001 - P240,000 per month">
                  P140,001 - P240,000 per month
                </option>
                <option value="P240,001 or more per month">
                  P240,001 or more per month
                </option>
              </Form.Select>
            </InputGroup>

            <strong>
              <span>What is your Region?</span>
            </strong>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <span
                  className="fa-solid fa-earth-asia"
                  aria-hidden="true"
                  style={{ color: "#03989e" }}
                ></span>
              </InputGroup.Text>
              <Form.Select
                aria-label="Default select example"
                name="Region"
                className="form-control select2 text-xs"
                id="Region"
                required
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="0">Select</option>
                <option value="National Capital Region (NCR)">
                  National Capital Region (NCR)
                </option>
                <option value="Cordillera Administrative Region (CAR)">
                  Cordillera Administrative Region (CAR)
                </option>
                <option value="Region 1 (Ilocos Region)">
                  Region 1 (Ilocos Region)
                </option>
                <option value="Region 2 (Cagayan Valley)">
                  Region 2 (Cagayan Valley)
                </option>
                <option value="Region 3 (Central Luzon)">
                  Region 3 (Central Luzon)
                </option>
                <option value="Region 4A (CALABARZON)">
                  Region 4A (CALABARZON)
                </option>
                <option value="Region 4B (MIMAROPA)">
                  Region 4B (MIMAROPA)
                </option>
                <option value="Region 5 (Bicol Region)">
                  Region 5 (Bicol Region)
                </option>
                <option value="Region 6 (Western Visayas)">
                  Region 6 (Western Visayas)
                </option>
                <option value="Region 7 (Central Visayas)">
                  Region 7 (Central Visayas)
                </option>
                <option value="Region 8 (Eastern Visayas)">
                  Region 8 (Eastern Visayas)
                </option>
                <option value="Region 9 (Zamboanga Peninsula)">
                  Region 9 (Zamboanga Peninsula)
                </option>
                <option value="Region 10 (Northern Mindanao)">
                  Region 10 (Northern Mindanao)
                </option>
                <option value="Region 11 (Davao Region)">
                  Region 11 (Davao Region)
                </option>
                <option value="Region 12 (SOCCSKSARGEN)">
                  Region 12 (SOCCSKSARGEN)
                </option>
                <option value="Region 13 (Caraga Region)">
                  Region 13 (Caraga Region)
                </option>
                <option value="ARMM (Autonomous Region in Muslim Mindanao)">
                  ARMM (Autonomous Region in Muslim Mindanao)
                </option>
              </Form.Select>
            </InputGroup>

            <strong>
              <span>Upload Payslip</span>
            </strong>
            <InputGroup>
              <FormControl
                type="file"
                accept="image/*"
                aria-label="file"
                aria-describedby="basic-addon1"
                //autocomplete="off"
                required
                onChange={onFileChange}
              />
              <InputGroup.Text id="basic-addon1">
                <span
                  className="fa-solid fa-upload"
                  style={{ color: "#03989e" }}
                  aria-hidden="true"
                ></span>
              </InputGroup.Text>
            </InputGroup>
            <strong className="terms" style={{ color: "#800" }}>
              Note!(Make sure the photos uploaded are clear)
            </strong>
            <br />
            <br />

            <strong>
              <span>Upload 1 Government Valid ID</span>
            </strong>
            <InputGroup>
              <FormControl
                type="file"
                accept="image/*"
                aria-label="file"
                aria-describedby="basic-addon1"
                //autocomplete="off"
                required
                onChange={onFileChange2}
              />
              <InputGroup.Text id="basic-addon1">
                <span
                  className="fa-solid fa-id-card-clip"
                  aria-hidden="true"
                  style={{ color: "#03989e" }}
                ></span>
              </InputGroup.Text>
            </InputGroup>
            <strong className="terms" style={{ color: "#800" }}>
              Note!(Make sure the photos uploaded are clear)
            </strong>
            <br />
            <br />

            <strong>
              <span>Upload a Selfie holding the Valid ID</span>
            </strong>
            <InputGroup>
              <FormControl
                type="file"
                accept="image/*"
                aria-label="file"
                aria-describedby="basic-addon1"
                //autocomplete="off"
                required
                onChange={onFileChange3}
              />
              <InputGroup.Text id="basic-addon1">
                <span
                  className="fa-solid fa-id-badge"
                  aria-hidden="true"
                  style={{ color: "#03989e" }}
                ></span>
              </InputGroup.Text>
            </InputGroup>
            <strong className="terms" style={{ color: "#800" }}>
              Note!(Make sure the photos uploaded are clear)
            </strong>
            <br />
            <br />

            <strong>
              <span>
                Upload 1 Recent Utility Bill (Meralco, Water, Bank Statement,
                Credit Card SOA)
              </span>
            </strong>
            <InputGroup>
              <FormControl
                type="file"
                accept="image/*"
                aria-label="file"
                aria-describedby="basic-addon1"
                //autocomplete="off"
                required
                onChange={onFileChange4}
              />
              <InputGroup.Text id="basic-addon1">
                <span
                  style={{ color: "#03989e" }}
                  className="fa-solid fa-upload"
                  aria-hidden="true"
                ></span>
              </InputGroup.Text>
            </InputGroup>
            <strong className="terms" style={{ color: "#800" }}>
              Note!(Make sure the photos uploaded are clear)
            </strong>
            <br />
            <br />

            <div className="d-grid gap-2">
              <Button variant="outline-primary" type="Submit">
                Signup
              </Button>
            </div>
          </Form>
          <br />
          <strong style={{ fontSize: "12px" }}>
            Join our growing community! Enter your email below to get exclusive
            promotions and newsletters!{" "}
            <Link style={{ cursor: "pointer" }} onClick={handleShow2}>
              Click
            </Link>
          </strong>
          <br />
        </div>
      </div>
    </>
  );
}
export default Signup;