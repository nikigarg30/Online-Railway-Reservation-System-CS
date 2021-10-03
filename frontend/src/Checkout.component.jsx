import React from "react";
import StripeButton from "./stripebutton.component";
import { Table} from "react-bootstrap"

const Checkout = () => {
  return (
    <div className="checkout">
      <Table className = "border bg-light border-light text-dark">
      <div className="header">
        <div className="header-block">
          <span><u>Click to proceed to payment.</u></span>
        </div>
        
      </div>
      <br />
      <StripeButton price="200/-" />
      </Table>
    </div>
  );
};

export default Checkout;