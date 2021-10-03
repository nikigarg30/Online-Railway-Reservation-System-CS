import React, { Component } from "react";
import axios from "axios";
import { Redirect, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {Form} from "react-bootstrap";


class BookTicket extends Component {
  state = {
    id: "",
    name: "",
    age: "",
    gender: "",
    compartment: "",
    source: "",
    destination: "",
    nooftickets: "",
    pnr: "",
    date: "",
    isTicketBooked: false,
  };

  handleid = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ id: value.toUpperCase() });
    }
  };
  handlename = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ name: value.toUpperCase() });
    }
  };
  handleage = event => {
    const { value } = event.target;
    this.setState({ age: value.toUpperCase() });
  };
  handlegender = event => {
    const { value } = event.target;
    this.setState({ gender: value.toUpperCase() });
  };
  handlecompartment = event => {
    const { value } = event.target;
    this.setState({ compartment: value.toUpperCase() });
  };
  handlesource = event => {
    const { value } = event.target;
    this.setState({ source: value.toUpperCase() });
  };
  handledestination = event => {
    const { value } = event.target;
    this.setState({ destination: value.toUpperCase() });
  };
  handlenooftickets = event => {
    const { value } = event.target;
    this.setState({ nooftickets: value.toUpperCase() });
  };
  handlepnr = event => {
    const { value } = event.target;
    this.setState({ pnr: value });
  };
  handledate = event => {
    const { value } = event.target;
    this.setState({ date: value });
  };

//   viewDetails() {
//     this.props.history.push("/reservation")
// }

  handleSubmit = event => {
    event.preventDefault();

    const newTicket = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
      compartment: this.state.compartment,
      source: this.state.source,
      destination: this.state.destination,
      ticket: this.state.nooftickets,
      pnr: this.state.pnr,
      date: this.state.date,

    };

    axios
      .post(
        "http://localhost:8081/orders/addOrder", newTicket
      )
      .then(response => response)
      .catch(error => error.message);

    window.alert("Ticket booked successfully");
    this.setState({
      id: "",
      name: "",
      age: "",
      gender: "",
      compartment: "",
      source: "",
      destination: "",
      nooftickets: "",
      pnr: "",
      date: "",
      isTicketBooked: true,
    });
    this.props.history.push("/reservation")

  };
  
  render() {
    if (this.state.isTicketBooked) {
        <BrowserRouter>
      return <Redirect to="/reservationInfo" />;
      </BrowserRouter>
    }

    return (
        <Router>
          <div >
            <div className="container" style={{ marginTop: 0 }}>
              <center>
                <div className="card" style={{ width: 400 }}>
                  <h5
                    className="card-header info-color white-text text-center py-3"
                    style={{ backgroundColor: " green " }}
                  >
                    <strong style={{ color: "whitesmoke" }}>
                      {" "}
                      Book Train Tickets Online{" "}
                    </strong>
                  </h5>
  
                  <div className="card-body px-lg-5">
                    <form
                      className="text-center"
                      style={{ color: "black" }}
                      
                      onSubmit={this.handleSubmit}
                      
                    >
                      
                      <label> Name </label>
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="form-control mb-4"
                        id="nameList"
                        onChange={this.handlename}
                        value={this.state.name}
                        required
                      />
  
                      <label> Age </label>
                      <input
                        type="age"
                        placeholder="Enter Age"
                        className="form-control mb-4"
                        id="ageList"
                        onChange={this.handleage}
                        value={this.state.age}
                        required
                      />

                      <label> Gender </label>
                      <Form.Select aria-label="Default select example"
                      class="browser-default custom-select mb-4"
                      id="genderList"
                      onChange={this.handlegender}>
                      <option value="Choose Option"> Choose Option </option>
                      <option value="Male"> Male </option>
                        <option value="Female"> Female </option>
                        <option value="Others"> Others </option>
                      </Form.Select>
                      <br />
  
                      <label> Compartment </label>
                      <Form.Select aria-label="Default select example"
                      class="browser-default custom-select mb-4"
                      id="comptList"
                      onChange={this.handlecompartment}>
                      <option value="Choose Option"> Choose Option </option>
                      <option value="General"> General </option>
                      <option value="Ladies"> Ladies </option>
                      </Form.Select>
                      <br />
  
                      <label> From </label>
                      <Form.Select aria-label="Default select example"
                      class="browser-default custom-select mb-4"
                      id="sourceList"
                      onChange={this.handlesource}>
                      <option value="Choose Option"> Choose Option </option>
                      <option value="Lahore"> Lahore </option>
                        <option value="Multan"> Multan </option>
                        <option value="Hyderabad"> Hyderabad </option>
                        <option value="Karachi City"> Karachi City </option>
                        <option value="Mari Indus"> Mari Indus </option>
                        <option value="Quetta"> Quetta </option>
                      </Form.Select>
                      <br />

                      <label> Destination </label>
                      <Form.Select aria-label="Default select example"
                      class="browser-default custom-select mb-4"
                      id="destnList"
                      onChange={this.handledestination}>
                      <option value="Choose Option"> Choose Option </option>
                        <option value="Karachi City"> Karachi City </option>
                        <option value="Quetta"> Quetta </option>
                        <option value="Badin"> Badin </option>
                        <option value="Attock City"> Attock City </option>
                        <option value="Chaman"> Chaman </option>
                        <option value="Multan"> Multan </option>
                      </Form.Select>
                      <br />

                      {/* <label> No of passenger </label>
                      <Form.Select aria-label="Default select example">
                      <option value="Choose Option"> Choose Option </option>
                      <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                        <option value="6"> 6 </option>
                      </Form.Select>
                      <br /> */}
  
                      <label> Date of journey </label>
                      <input
                        type="date"
                        placeholder="Enter Date"
                        className="form-control mb-4"
                        id="dateList"
                        onChange={this.handledate}
                        value={this.state.date}
                        required
                      />
                      <br />
                     
                      <button
                        className="btn btn-outline-primary btn-light btn-block "
                        // onClick= {() => this.viewDetails()}
                        type="submit"
                        value="createTicket"
                      >
                        BOOK TICKET
                      </button>
                      
                    </form>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </Router>
      );
    }
  }
  
  export default BookTicket;