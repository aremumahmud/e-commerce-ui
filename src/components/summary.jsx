import { useEffect, useState } from "react";
import "../css/summary.css";
import Calculation from "./calculations";
import manageChecked from '../libs/manageChecked'
import currencyTab, { nameTab } from "../config/currency";

function Summary({price , lockProduct,pace,setPace , busy , setBusy,symbol , setCurrency ,setPage}) {
 let change= (e)=>{
  manageChecked(['USD','EUR','GBP','NGN'],e.target.id)
  setCurrency(currencyTab[e.target.id].symbol)
 }
 useEffect(()=>{
  document.getElementById(nameTab[symbol]).checked = true
  manageChecked(['USD','EUR','GBP','NGN'],nameTab[symbol])
 
 },[symbol])
  return (
    <>
      <p className="topic">Order Summary</p>
      <div className="coupon">
        <input type="email" placeholder="Enter Coupon Code" />
        <div className="btn">Apply Coupon</div>
      </div>
      <p className="topic">Payment Currency</p>
      <div className="radios">
        <div className="radio">
          <input type="radio" name="" id="USD" onChange={change} />
          <p>USD <b>($)</b></p>
        </div>
        <div className="radio">
          <input type="radio" name="" id="EUR" onChange={change} />
          <p>EUR <b>(€)</b></p>
        </div>
        <div className="radio">
          <input type="radio" name="" id="GBP" onChange={change} />
          <p>GBP <b>(£)</b></p>
        </div>
        <div className="radio">
          <input type="radio" name="" id="NGN" onChange={change} />
          <p>NGN <b>(₦)</b></p>
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
      <Calculation symbol={symbol} price={price} />
      <div className="btn"  onClick={()=>{
            if(!localStorage.getItem('TokenID')){
              setBusy(true);lockProduct()
              //Object.keys(data).length !== 0 && setPage('checkout')
              return
            }

            setPage('users/login',false)
         
          }}>
        {
          busy ? <div className="loader"></div>:`Pay ${symbol + +price.toFixed(2)}`
        }
       
      </div><br />
      {/* {
        pace === 1 &&
        <div  onClick={()=>setPace(0)}> <p className="prev"> &lt;- Prev</p></div>
      } */}
    </>
  );
}

export default Summary;
