import React, { Component } from 'react';
import axios from 'axios';
import {Form, Card, Table} from "react-bootstrap";

class SearchTrain extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      startStation: "",
      endStation: "",
      date: "",
      tickets:[]
    }
  }

  changeHandler1 = (e) =>{
    this.setState({
        startStation: e.target.value,
    });
}

changeHandler2 = (e) =>{
    this.setState({
        endStation: e.target.value
    });
}

dateHandler = (e) =>{
    this.setState({
        date: e.target.value
    });
}


submitHandler=(e) => {
  e.preventDefault()
  console.log("niki")
    axios.get("http://localhost:8095/search/"+this.state.startStation+"/"+this.state.endStation+"/"+this.state.date)
    .then(response => 
      {console.log(response.data)
      this.setState({tickets:response.data
      });
    })
    .catch(err=> console.log(err))
  }

  
  render() {
    return (
      <div>
        <form 
        onSubmit={this.submitHandler} 
        action="/${startStation}/${endStation}/${date}">

               <label> Source </label>
                      <Form.Select aria-label="Default select example"
                     name="startStation" 
                     value={this.state.startStation} 
                     onChange={this.changeHandler1}>
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
                      name="endStation" 
                      value={this.state.endStation} 
                      onChange={this.changeHandler2}>
                      <option value="Choose Option"> Choose Option </option>
                        <option value="Karachi City"> Karachi City </option>
                        <option value="Quetta"> Quetta </option>
                        <option value="Badin"> Badin </option>
                        <option value="Attock City"> Attock City </option>
                        <option value="Chaman"> Chaman </option>
                        <option value="Multan"> Multan </option>
                      </Form.Select>
                      <br />

          <label>Date of Departure : </label>
          <Form.Select aria-label="Default select example"  
              name="departureDate" 
              value={this.state.date} 
              onChange={this.dateHandler}>
                  <option value="Choose Option"> Choose Option </option>
                        <option value="02-02-2022"> 02-02-2022 </option>
                        <option value="04-02-2022"> 04-02-2022 </option>
                        <option value="06-02-2022"> 06-02-2022 </option>
                        <option value="08-02-2022"> 08-02-2022 </option>
                        <option value="03-03-2022"> 03-03-2022 </option>
                        <option value="07-03-2022"> 07-03-2022 </option>
                      </Form.Select>
                      <br />
            
                  <button type="submit"> Submit </button>
                   </form>
                   <br/>

                  <div className="trainsSearch">
                  <Card className = "border bg-dark border-light text-light">

                    <h4>Your Searched Trains</h4>
                    <Table striped bordered hover variant="dark"
                     style={{ marginTop: 20 }}>
                      <thead>
                        <tr>
                      <td>TrainID</td>
                      <td>Train Name</td>
                      <td>Source</td>
                      <td>Destination</td>
                      <td>Berths</td>
                      <td>Duration</td>
                      <td>Time of Departure</td>
                      <td>Date of Departure</td>
                      <td>Train Fare</td>
                        </tr>
                      </thead>

                      <tbody>
                        {
                          this.state.tickets.map(
                            ticket =>
                              <tr key = {ticket.trainid}>
                                <td>{ticket.trainid}</td>
                                <td>{ticket.trainName}</td>
                                <td>{ticket.startStation}</td>
                                <td>{ticket.endStation}</td>
                                <td>{ticket.no_of_seats}</td>
                                <td>{ticket.duration}</td>
                                <td>{ticket.departure}</td>
                                <td>{ticket.date}</td>                               
                                <td>{ticket.fare}</td>
                              </tr>                              
                          )
                        }
                      </tbody>
                    </Table>
                    </Card>
        </div>
        
      </div>
    )
  }
}
export default SearchTrain