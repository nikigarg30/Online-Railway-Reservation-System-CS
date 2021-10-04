import React from 'react';  
import { Card, Table } from 'react-bootstrap'
import axios from 'axios';  
    
export default class DeleteTrain extends React.Component {  
  state = {  
    posts: []  
  }  
    
  componentDidMount() {  
    axios.get(`http://localhost:8095/search/findAllTrains`)  
      .then(res => {  
        const posts = res.data;  
        this.setState({ posts });  
      })  
  }  
    
  deleteRow(trainid, e){  
    axios.delete(`http://localhost:8095/trains/delete/${trainid}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const posts = this.state.posts.filter(item => item.trainid !== trainid);  
        this.setState({ posts });  
      })  
    
  }  
    
  render() {  
    return (  
      <div >
        <Card className = "border bg-dark border-light text-light">  
        <h1> Delete Train </h1>  
    
        <Table striped bordered hover variant="dark">
            <thead>  
              <tr>  
                  <th>Train id</th>  
                  <th>Train Name</th>  
                  <th>Source</th>  
                  <th>Destination</th> 
                  <th>Departure Time</th>
                  <th>Date</th>
              </tr>  
            </thead>  
    
            <tbody>  
              {this.state.posts.map((post) => (  
                <tr>  
                  <td>{post.trainid}</td>  
                  <td>{post.trainName}</td>  
                  <td>{post.startStation}</td>  
                  <td>{post.endStation}</td>
                  <td>{post.departure}</td>
                  <td>{post.date}</td>

                  <td>  
                    <button className="btn btn-danger" onClick={(e) => this.deleteRow(post.trainid, e)}>Delete</button>  
                  </td>  
                </tr>  
              ))}  
            </tbody>  
    
        </Table> 
        </Card> 
      </div>  
    )  
  }  
}  