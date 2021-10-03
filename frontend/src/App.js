import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";


import TrainListComponent from './components/TrainListComponent';
import CreateTrain from './components/createTrain';
import BookTicket from './components/BookTicket';
import DeleteTrain from './components/DeleteTrain';
import SearchByPnr from "./components/SearchByPnr";
import ReservationInfo from "./components/ReservationInfo";
import SearchTrain from "./components/SearchTrain";
import YourTicketInfo from "./components/YourTicketInfo";
import StripeButton from "./components/stripebutton.component";
import Checkout from "./components/Checkout.component";

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      showUserBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        showUserBoard: user.roles.includes("ROLE_USER")
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showAdminBoard: false,
      showUserBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showAdminBoard, showUserBoard } = this.state;

    return (
      <div className = "background">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Pakistan Railways
          </Link>
          <div className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link to={"/searchTrain"} className="nav-link">
                Search Train
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to={"/trainlist"} className="nav-link">
                Available Trains
              </Link>
            </li>

                {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/addTrain"} className="nav-link">
                  Add Train
                </Link>
              </li>
            )}

                 {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/delete"} className="nav-link">
                  Delete Train
                </Link>
              </li>
            )}

                {showUserBoard && (
            <li className="nav-item">
              <Link to={"/searchTrain"} className="nav-link">
                Search Train
              </Link>
            </li>
            )}
          
                 {showUserBoard && (
             <li className="nav-item">
                <Link to={"/booking"} className="nav-link">
                  Book Ticket
                </Link>
              </li>
            )}
           {showUserBoard && (
              <li className="nav-item">
                <Link to={"/SearchByPnr"} className="nav-link">
                  Your Ticket
                </Link>
              </li>
            )}
            
          </div>
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/booking" exact component={BookTicket} />
            <Route path="/trainlist" exact component={TrainListComponent} />
            <Route path="/addTrain" exact component={CreateTrain} />
            <Route path="/delete" exact component={DeleteTrain} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/SearchByPnr" exact component={SearchByPnr} />
            <Route path="/reservation" exact component={ReservationInfo} />
            <Route path="/searchTrain" exact component={SearchTrain} />
            <Route path="/yourticketinfo" exact component={YourTicketInfo} />
            <Route path="/stripebutton" exact component={StripeButton} />
            <Route path="/checkout" exact component={Checkout} />

          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;