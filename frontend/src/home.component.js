import React, { Component } from "react";
import 'react-slideshow-image/dist/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from '../services/user.service';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="image" >
        <header className="jumbotron">
          <div className="home">
            <div className="home_msg" ><br/> <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <h4>Pakistan Railways (Urdu: پاکستان ریلویز‎) is the national,<br/> state-owned railway company of Pakistan.
               Founded in 1861 <br /> (when Pakistan was part of British India ) and headquartered in Lahore,
                <br />it owns 7,791 kilometres (4,841 miles) of track across Pakistan <br /> from Torkham to Karachi, 
                <br />offering both freight and passenger services.</h4></div>
          </div>
        </header>
      </div>
    );
  }
}