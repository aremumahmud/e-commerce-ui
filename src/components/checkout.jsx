import Path from "./path";
import "../css/checkout.css";
import Review from "./review";
import Delivery from "./delivery";
import Summary from "./summary";
import calculate from "../libs/calculate";
import send_locked_to_be_product from "../libs/send_locked_to_be";
import validate from "../libs/validate_deets";
import { useEffect, useState } from "react";
import { nameTab } from "../config/currency";
import fetch_shipment from "../libs/getShipment";
import getUserCountry from "../libs/country";



function Checkout({ setCurrency, setPage, cart, symbol ,symbolTab, currencyTab}) {
  let [discount_code, setDiscountCode] = useState([])
  let [user_data, set_user_data] = useState(null)
  let [busy, setBusy] = useState(false)
  let [URIState, setURI] = useState(localStorage.getItem('TokenID')?'upload_locked_product_uri':'upload_locked_product_uri_guest')
 console.log(currencyTab, symbolTab,'checky')
  let price = calculate(Object.keys(cart).map(x => cart[x]), symbol,currencyTab,symbolTab)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  let [deliv,setDeliv] = useState(0)
  let [deliv1,setDeliv1] = useState(0)
  let lockProduct = () => {
   // localStorage.getItem('TokenID') && setURI('upload_locked_product_uri')
    console.log(URIState)
    send_locked_to_be_product(URIState, cart, deliv1, user_data, nameTab[symbol], discount_code,user_data.country, (err, resp) => {
      setBusy(false)
      if (err) {
 console.log(err)
        return alert(err.msg||'sorry something unexpected happened')
      }

      let data = JSON.parse(resp)
      // console.log(resp,err)
      if (data.login == false) {
        return window.open('/users/signup', '_self')
      }
      if (!data.payment_uri) return alert('sorry something unexpected happened')
      window.open(data.payment_uri, '_self')
      // console.log(JSON.parse(resp))

    })
  }

  let getDoc = (x) => document.getElementById(x)
  let c = () => {
    let formData = new FormData(getDoc('form2134'))
    return Object.fromEntries(formData.entries())
  }
//let [deliv,setDeliv] = useState(0)
let [isNaij , setIsNaij] = useState(false)
let [pace, setPace] = useState(0)
let [ship , setShip] = useState({
    local:0,
    international:0
  })


  useEffect(()=>{
    let p = +((deliv1 * currencyTab[null|| 'NGN'].price_in_naira) / symbolTab[symbol]).toFixed(2)
    setDeliv(p)
  },[symbol])


  let valid = () => {
    let formData = new FormData(getDoc('form2134'))
    let data = Object.fromEntries(formData.entries())
    if(data.country == 'Nigeria'){
      setIsNaij(true)
    
    }else{
      setIsNaij(false)
      let p = +((ship.international * currencyTab[null|| 'NGN'].price_in_naira) / symbolTab[symbol]).toFixed(2)
      setDeliv(p) 
      setDeliv1(p)
     
    }

    if(data.state){
      setIsNaij(true)
      //alert('hey')
      let p = +(((ship[data.state]||0) * currencyTab[null|| 'NGN'].price_in_naira) / symbolTab[symbol]).toFixed(2)
      setDeliv(p)
      setDeliv1(p)
    }
    let f = Object.keys(data)
    return validate(f,isNaij).length === 0 ? set_user_data(data):set_user_data(null)
  }



 
  
  useEffect(()=>{
      fetch_shipment((err,res)=>{
        if(err) return
        if(!res.success) return
        let exchange = res.shipments
        console.log(exchange)
        setShip(exchange)
        //setSymbolTab(exchange.symbolTab)
      })
    },[])

   
  return (
    <>
      <Path
        setPage={setPage}
        data={[
          { name: "Home", path: "home" },
          { name: "Cart", path: "cart" },
          { name: "Checkout", path: "checkout" },
        ]}
      /> <br />
      <div className="split">
        <div className="one">
          <Review symbolTab={symbolTab} currencyTab={currencyTab} symbol={symbol} cart={cart} />
          <div className="checkbox">
            <input type="checkbox" name="" id="" />
            Returning Customer
          </div>
          <Delivery isNaij={isNaij} setIsNaij={setIsNaij} pace={pace} setPace={setPace} valid={valid} />

        </div>
        <div className="two" style={{
          display: pace === 0 ? "block" : 'none'
        }}>
          <Summary deliv={deliv} symbolTab={symbolTab} currencyTab={currencyTab} setDiscountCode={setDiscountCode} setURI={setURI} setPage={setPage} setCurrency={setCurrency} symbol={symbol} busy={busy} setBusy={setBusy} pace={pace} setPace={setPace} lockProduct={lockProduct} price={price} />
        </div>
      </div>
    </>
  );
}

export default Checkout;
