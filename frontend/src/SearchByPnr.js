import React, { Component } from 'react'
import axios from 'axios';

class SearchByPnr extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pnrNo: "",

            tickets: []
        }
    }

    changeHandler1 = e => {
        this.setState({
            pnrNo: e.target.value,
        });
    }

    viewDetails() {
        this.props.history.push("/yourticketinfo")
    }



    submitHandler = e => {
        e.preventDefault();
        console.log("Nikita")
        axios.get(`http://localhost:8081/orders/${this.state.pnrNo}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    tickets: response.data
                });
            
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div><br/><marquee><h3>PAKISTAN RAILWAYS PASSENGER RESERVATION ENQUIRY</h3></marquee>
                <div className="searchForm">
                    <div className="center">
                        <h1>Enter PNR No.</h1>
                        <form onSubmit={this.submitHandler} action="/">
                            <div class="inputbox">
                                <input 
                                type="text" 
                                name="pnr"
                                 value={this.state.pnrNo} 
                                 onChange={this.changeHandler1} 
                                 required/>
                                {/* <span>PNR </span> */}
                            </div>
                            <div class="inputbox">
                                {/* <input type="submit" value="Search" /> */}
                                
                                <button
                                 className="btn btn-outline-primary btn-light btn-block "
                                 onClick= {() => this.viewDetails()}
                                type="submit"
                                value="search"
                                >
                               Search
                            </button>                               
                            </div>
                        </form>
                    </div> 
                 </div>

            </div>
        )
    }
}
export default SearchByPnr