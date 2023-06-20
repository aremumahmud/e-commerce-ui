import { useEffect, useState } from "react";
import "../css/summary.css";
import Calculation from "./calculations";
import manageChecked from "../libs/manageChecked";
import currencyTab, { nameTab } from "../config/currency";
import verify_discount from "../libs/verify_discount";

function Summary({
  price,
  lockProduct,
  pace,
  setPace,
  busy,
  setBusy,
  symbol,
  setCurrency,
  setPage,
  setURI,
}) {
  let [discount, setDiscount] = useState("");
  let [load , setLoad ] = useState(false)
  let [error , setError] = useState('')
  let [discounts , setDiscounts] = useState({})

  let getDiscount = () => {
    if(discounts[discount]) return setError('discount has already been added')
    if (!discount) return setError("please enter a discount code!");
    setLoad(true)
    verify_discount(discount , (err,res)=>{
      setLoad(false)
      if(err || res.error) return setError('invalid discount code')
      let disc = {...discounts}
      disc[discount] = res.value 
      setDiscounts(disc)
      setError('')
     setDiscount('')
    })
  };

  let change = (e) => {
    manageChecked(["USD", "EUR", "GBP", "NGN"], e.target.id);
    setCurrency(currencyTab[e.target.id].symbol);
  };

  let change2 = (e) => {
    let state = e.target.checked;
    if (state) {
      return setURI("upload_locked_product_uri");
    }
    setURI("upload_locked_product_uri_guest");
  };

  useEffect(() => {
    document.getElementById(nameTab[symbol]).checked = true;
    manageChecked(["USD", "EUR", "GBP", "NGN"], nameTab[symbol]);
  }, [symbol]);
  return (
    <>
      <p className="topic">Order Summary</p>
      <small style={{color:'red'}}>{error}</small>
      <div className="coupon">
        <input
          onChange={(e) =>e.target.value.split(" ").join("").length < 9 && setDiscount(e.target.value.split(" ").join("").toUpperCase())}
          type="email"
          placeholder="Enter Coupon Code"
          value={discount}
          id="in"
        />
        <div onClick={getDiscount} className="btn">
          {
            load ? <div className="loader"></div>: ' Apply Coupon'
          }
         
          </div>
      </div>
      {
        Object.keys(discounts).map(x=>{
          return {
            discount:x,
            value : discounts[x]
          }
        }).map(x=><div className="showDiscount">
        <p className="name_ting">KUGYGVCE -50%</p>
        <p className="close" onClick={()=>{
          let disc = {...discounts}
          delete disc[x.discount]
          setDiscounts(disc)
        }}>x</p>
      </div>)
      }
      
      <p className="topic">Payment Currency</p>
      <div className="radios">
        <div className="radio">
          <input type="radio" name="" id="USD" onChange={change} />
          <p>
            USD <b>($)</b>
          </p>
        </div>
        <div className="radio">
          <input type="radio" name="" id="EUR" onChange={change} />
          <p>
            EUR <b>(€)</b>
          </p>
        </div>
        <div className="radio">
          <input type="radio" name="" id="GBP" onChange={change} />
          <p>
            GBP <b>(£)</b>
          </p>
        </div>
        <div className="radio">
          <input type="radio" name="" id="NGN" onChange={change} />
          <p>
            NGN <b>(₦)</b>
          </p>
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
      <br />
      <br />
      <p className="topic">Total Debit Amount</p>
      <Calculation symbol={symbol} price={price} />
      <br />
      <div className="as_a_guest">
        <input type="checkbox" name="" id="" onChange={change2} />
        Create an account?
      </div>
      <div
        className="btn"
        onClick={() => {
          // if(!localStorage.getItem('TokenID')){
          setBusy(true);
          lockProduct();
          //Object.keys(data).length !== 0 && setPage('checkout')
          //   return
          // }

          // setPage('users/login',false)
        }}>
        {busy ? (
          <div className="loader"></div>
        ) : (
          `Pay ${symbol + +price.toFixed(2)}`
        )}
      </div>
      <br />
      {/* {
        pace === 1 &&
        <div  onClick={()=>setPace(0)}> <p className="prev"> &lt;- Prev</p></div>
      } */}
    </>
  );
}

export default Summary;
