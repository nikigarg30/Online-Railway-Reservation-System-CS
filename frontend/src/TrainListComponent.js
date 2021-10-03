import React, { Component } from "react";
import axios from "axios";
import { Card, Table } from "react-bootstrap";

const Train = props => (
  <tr>
    <td> {props.train.trainid} </td>
    <td> {props.train.trainName} </td>
    <td> {props.train.startStation} </td>
    <td> {props.train.endStation} </td>
    <td> {props.train.no_of_seats} </td>
    <td> {props.train.departure} </td>
    <td> {props.train.date} </td>
    <td> {props.train.fare}</td>
    </tr>
  
  
);
class TrainListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { traintickets: [] };
  }

  //Get the train details from the database
  componentDidMount() {
    axios
      .get("http://localhost:8095/search/findAllTrains")
      .then(response => {
        this.setState({ traintickets: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  trainList() {
    return this.state.traintickets.map(function(currentTrain, i) {
      return <Train train={currentTrain} key={i} />;
    });
  }



  render() {
    return (
      <div>
        <Card className = "border bg-dark border-light text-light">
        <h3>Available Trains </h3>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th> TrainID </th>
              <th> Train Name </th>
              <th> Startpoint </th>
              <th> Endpoint </th>
              <th> Seats </th>
              <th> Departure </th>
              <th> Date</th>
              <th> Fare</th>
            </tr>
          </thead>
          <tbody>{this.trainList()}
          </tbody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default TrainListComponent;