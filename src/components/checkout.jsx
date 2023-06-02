import Path from "./path";
import "../css/checkout.css";
import Review from "./review";
import Delivery from "./delivery";
import Summary from "./summary";
import calculate from "../libs/calculate";
import send_locked_to_be_product from "../libs/send_locked_to_be";
import validate from "../libs/validate_deets";
import { useState } from "react";



function Checkout({ setPage , cart }) {
  let [user_data, set_user_data] = useState(null)
  let price = calculate( Object.keys(cart).map(x=>cart[x]))

  let lockProduct = ()=>{
    send_locked_to_be_product(cart , price, user_data , (err,resp)=>{
      if(err){
         return
      }
      let data  = JSON.parse(resp)
      console.log(resp,err)
      if(data.login == false){
        return window.open('/users/signup')
      }
      window.open(data.payment_uri)
    // console.log(JSON.parse(resp))
      
    })
  }

  let getDoc = (x) => document.getElementById(x)
  let c = ()=>{
    let formData = new FormData(getDoc('form2134'))
    return Object.fromEntries(formData.entries())
  }

  let valid = ()=>{
    let formData = new FormData(getDoc('form2134'))
    let data = Object.fromEntries(formData.entries())
    let f = Object.keys(data)
   return validate(f).length === 0 && set_user_data(data)
  }
  
 let [pace , setPace] = useState(0)
  return (
    <>
      <Path
        setPage={setPage}
        data={[
          { name: "Home", path: "home" },
          { name: "Cart", path: "cart" },
          { name: "Checkout", path: "checkout" },
        ]}
      />
      <div className="split">
        <div className="one">
          <Review cart={cart}/>
          <div className="checkbox">
            <input type="checkbox" name="" id="" />
            Returning Customer
          </div>
          <Delivery pace={pace} setPace={setPace} valid={valid} />
          
        </div>
        <div className="two" style={{
          display : pace === 0? "block" : 'none'
        }}>
          <Summary  pace={pace} setPace={setPace}  lockProduct={lockProduct} price={price}/>
        </div>
      </div>
    </>
  );
}

export default Checkout;
