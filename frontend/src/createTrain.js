import React, { Component } from "react";
import axios from "axios";
import { Redirect,  BrowserRouter } from "react-router-dom";
import { Form } from "react-bootstrap";

export default class CreateTrain extends Component {
  state = {
    trainid: "",
    trainName: "",
    startStation: "",
    endStation: "",
    no_of_seats: "",
    departure: "",
    date: "",
    fare: "",
    isTrainCreated: false
  };

  handleTrainid = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ trainid: value.toUpperCase() });
    }
  };

  handleTrainName = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ trainName: value });
    }
  };

  handlestartStation = event => {
    const { value } = event.target;
    this.setState({ startStation: value });
  };

  handleendStation = event => {
    const { value } = event.target;
    this.setState({ endStation: value });
  };

  handleno_of_seats = event => {
    const { value } = event.target;
    this.setState({ no_of_seats: value });
  };

  handledeparture = event => {
    const { value } = event.target;
    this.setState({ departure: value });
  };

  handledate = event => {
    const { value } = event.target;
    this.setState({ date: value});
  };

  handlefare = event => {
    const { value } = event.target;
    this.setState({ fare: value});
  };


  handleSubmit = event => {
    event.preventDefault();

    const newTrain = {
      trainid: this.state.trainid,
      trainName: this.state.trainName,
      startStation: this.state.startStation,
      endStation: this.state.endStation,
      no_of_seats: this.state.no_of_seats,
      departure: this.state.departure,
      date: this.state.date,
      fare: this.state.fare,
    
    };

    axios
      .post(
        "http://localhost:8095/trains/addTrain",
        newTrain
      )
      .then(response => response)
      .catch(error => error.message);

    window.alert("Train created successfully");
    this.setState({
        trainid: "",
        trainName: "",
        startStation: "",
        endStation: "",
        no_of_seats: "",
        departure: "",
        date: "",
        fare: "",
        isTrainCreated: true
    });
  };
  render() {
    if (this.state.isTrainCreated) {
      <BrowserRouter>
      return <Redirect to="/trainList" />;
      </BrowserRouter>
    }
    
    return (
      <div >
        <div className="d-flex justify-content-center" >
          <div className="card bg-light mb-3" >
            <div className="card-header" style={{ width: 400 }}>
            <h5
                    className="card-header info-color white-text text-center py-3"
                    style={{ backgroundColor: " green " }}
                  >
                    <strong style={{ color: "whitesmoke" }}>
                      {" "}
                      Add Train{" "}
                    </strong>
                  </h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="trainName">Train Name</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handleTrainName}
                        value={this.state.trainName}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                      <div className="col">
                      <label htmlFor="inputState"> Start Station </label>
                      <Form.Select aria-label="Default select example"
                       id="from"
                       className="form-control"
                       onChange={this.handlestartStation}
                       required>
                      <option value="Choose Option"> Choose Option </option>
                      <option value="Lahore"> Lahore </option>
                        <option value="Multan"> Multan </option>
                        <option value="Hyderabad"> Hyderabad </option>
                        <option value="Karachi City"> Karachi City </option>
                        <option value="Mari Indus"> Mari Indus </option>
                        <option value="Quetta"> Quetta </option>
                      </Form.Select>
                      <br />
                      </div>

                    <div className="col">
                      <label htmlFor="inputState"> End Station </label>
                      <Form.Select aria-label="Default select example"
                      id= "to"
                      className= "form-control"
                      onChange={this.handleendStation} 
                      required>
                      <option value="Choose Option"> Choose Option </option>
                        <option value="Karachi City"> Karachi City </option>
                        <option value="Quetta"> Quetta </option>
                        <option value="Badin"> Badin </option>
                        <option value="Attock City"> Attock City </option>
                        <option value="Chaman"> Chaman </option>
                        <option value="Multan"> Multan </option>
                      </Form.Select>
                      <br />
                      </div>

                    <div className="col">
                      <label htmlFor="seats">seats</label>
                      <input
                        id="seats"
                        className="form-control"
                        onChange={this.handleno_of_seats}
                        value={this.state.no_of_seats}
                        required
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="departure">departure</label>
                      <input
                        id="departure"
                        className="form-control"
                        onChange={this.handledeparture}
                        value={this.state.departure}
                        required
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="date">date</label>
                      <input
                        id="date"
                        className="form-control"
                        onChange={this.handledate}
                        value={this.state.date}
                        required
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="fare">Fare</label>
                      <input
                        id="fare"
                        className="form-control"
                        onChange={this.handlefare}
                        value={this.state.fare}
                        required
                      />
                    </div>
                  </div>
                  <br />   
                  <div>
                    <button
                      type="submit"
                      value="createTicket"
                      className="btn btn-dark btn-long btn-block"
                      >
                      Add Train
                    </button>
                    <br />
     
                  </div>
                </form>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}