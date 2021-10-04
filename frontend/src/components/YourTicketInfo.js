import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Table} from "react-bootstrap";

const Train = props => (
  <tr>
    <td> {props.train.name} </td>
    <td> {props.train.age} </td>
    <td> {props.train.gender} </td>
    <td> {props.train.compartment} </td>
    <td> {props.train.source} </td>
    <td> {props.train.destination} </td>
    <td> {props.train.pnrNo} </td>
    <td> {props.train.date} </td>

  </tr>


);
class YourTicketInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { details: [] };
  }

//get ticket details from db
  componentDidMount() {
    axios
      .get("http://localhost:8081/orders/all")
      .then(response => {
        this.setState({ details: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  reservationInfo() {
    return this.state.details.map(function (currentTicket, i) {
      return <Train train={currentTicket} key={i} />;
    });
  }


  render() {
    return (
      <div>
        <Card className = "border bg-dark border-light text-light">
        <h3> Your Information </h3>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th> Name </th>
              <th> Age </th>
              <th> Gender </th>
              <th> Compartment </th>
              <th> From </th>
              <th> To </th>
              <th> PNR </th>
              <th> Date of journey </th>
              
            </tr>
          </thead>
          <tbody>{this.reservationInfo()}
          </tbody>
        </Table>
        <br></br>
        <h5>Cancel Reservation? </h5>
        <Link to="/delTicket" >
          <button className="button button3">
            Cancel
            </button><br />
         </Link>
         <br />
            </Card>
          </div>
          );
  }
}

          export default YourTicketInfo;