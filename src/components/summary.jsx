import "../css/summary.css";
import Calculation from "./calculations";

function Summary({price , lockProduct,pace,setPace}) {
  return (
    <>
      <p className="topic">Order Summary</p>
      <div className="coupon">
        <input type="email" placeholder="Enter Coupon Code" />
        <div className="btn">Apply Coupon</div>
      </div>
      <p className="topic">Payment Details</p>
      <div className="radios">
        <div className="radio">
          <input type="radio" name="" id="" />
          <p>Cash on delivery</p>
        </div>
        <div className="radio">
          <input type="radio" name="" id="" />
          <p>Shopcart Card</p>
        </div>
        <div className="radio">
          <input type="radio" name="" id="" />
          <p>Paypal</p>
        </div>
        <div className="radio">
          <input type="radio" name="" id="" />
          <p>Credit or Debit Card</p>
        </div>
      </div>
      {/* <form action="" className="payment_form">
        <div className="wrapInput long">
          <p>
            {" "}
            Email<sup>*</sup>
          </p>
          <input type="text" name="" id="" placeholder="Type Here ..." />
        </div>
        <div className="wrapInput long">
          <p>
            {" "}
            Card Holder Name<sup>*</sup>
          </p>
          <input type="text" name="" id="" placeholder="Type Here ..." />
        </div>
        <div className="wrapInput long">
          <p>
            {" "}
           Card Number<sup>*</sup>
          </p>
          <input type="card" name="" id="" placeholder="0000******12345" />
        </div>
        <div className="wrapInput ">
          <p>
            {" "}
            Expiry<sup>*</sup>
          </p>
          <input type="text" name="" id="" placeholder="MM/YY" />
        </div>
        <div className="wrapInput">
          <p>
            {" "}
            CVC<sup>*</sup>
          </p>
          <input type="text" name="" id="" placeholder="00/00" />
        </div>
      </form> */}
      <br /><br />
      <p className="topic">Total Debit Amount</p>
      <Calculation price={price} />
      <div className="btn" onClick={()=>lockProduct()}>
        Pay N{price}.10
      </div><br />
      {
        pace === 1 &&
        <div  onClick={()=>setPace(0)}> <p className="prev"> &lt;- Prev</p></div>
      }
    </>
  );
}

export default Summary;
