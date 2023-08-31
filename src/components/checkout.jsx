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
import countries from "../config/continent";
import calculateTotal from "../libs/calculateAddShip";
import calculateWeight from "../libs/calculateWeight";
import extract_ids from "../libs/extract_ids";
import get_current_version from "../libs/getCurrentVersion";
import update_cart from "../libs/updateCart";

function Checkout({
  setCurrency,
  setPage,
  cart,
  symbol,
  symbolTab,
  currencyTab,
  cart_no,
  setcart,
  setCartno
}) {


  (!cart || Object.keys(cart).length === 0) && window.open("/home", "_self");

  let [trigger , setTrigger] = useState(false)
  useEffect(() => {
    try{
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (Object.keys(cart).length === 0) {
      setCartno(0);
      localStorage.setItem("no", 0);
      return;
    }
    let ids = extract_ids(cart);
    // console.log(ids,":ids",cart)
    get_current_version(ids, (err, res) => {
      if (err) {
        //do sth
        // console.log(err)
        return setTrigger(!trigger);
      }

     // let datan = JSON.parse(res).data;
      // console.log(datan,'jnk,m ,',JSON.parse(res))
       let updatedCart = update_cart( JSON.parse(res), cart);
      let no = localStorage.getItem("no");
      setcart(updatedCart);
      setCartno(no);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      // console.log(err,res, 'this is ,the thing i want to see')
    });
  }catch(e){
    //alert(e)
    
  }
  }, []);



  let [discount_code, setDiscountCode] = useState([]);
  let [user_data, set_user_data] = useState(null);
  let [busy, setBusy] = useState(false);
  let [isLagos, setIsLagos] = useState(false);
  let [URIState, setURI] = useState(
    localStorage.getItem("TokenID")
      ? "upload_locked_product_uri"
      : "upload_locked_product_uri_guest"
  );

  let price = calculate(
    Object.keys(cart).map((x) => cart[x]),
    symbol,
    currencyTab,
    symbolTab
  );
  let weight = calculateWeight(Object.keys(cart).map((x) => cart[x]));
  console.log("weight:", weight);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let [deliv, setDeliv] = useState(0);
  let [deliv1, setDeliv1] = useState(0);
  let lockProduct = () => {
    // localStorage.getItem('TokenID') && setURI('upload_locked_product_uri')

    send_locked_to_be_product(
      URIState,
      cart,
      deliv1,
      user_data,
      nameTab[symbol],
      discount_code,
      user_data.country + "," + user_data.state,
      (err, resp) => {
        setBusy(false);
        if (err) {
          return alert(err.msg || "sorry something unexpected happened");
        }

        let data = JSON.parse(resp);
        // console.log(resp,err)
        if (data.login == false) {
          return window.open("/users/signup", "_self");
        }
        if (!data.payment_uri)
          return alert("sorry something unexpected happened");
        window.open(data.payment_uri, "_self");
        // console.log(JSON.parse(resp))
      }
    );
  };

  let getDoc = (x) => document.getElementById(x);

  let c = () => {
    let formData = new FormData(getDoc("form2134"));
    return Object.fromEntries(formData.entries());
  };
  //let [deliv,setDeliv] = useState(0)
  let [isNaij, setIsNaij] = useState(false);
  let [pace, setPace] = useState(0);
  let [ship, setShip] = useState({
    local: 0,
    international: 0,
  });

  //let [base , setBase] = useState('')
  //the base, what this ,means is that we are capturing the first capture of currency in the hompage that
  //induced a bug, so what the base variable is doing is simply just making it constant for more consistent use
  useEffect(() => {
    //alert(nameTab[symbol])
    // if(!base) setBase(nameTab[symbol])
    // alert(base)
    //console.log(deliv1,symbol)
    let p = +(
      (deliv1 * currencyTab[null || "NGN"].price_in_naira) /
      symbolTab[symbol]
    ).toFixed(2);
    setDeliv(p);
  }, [symbol]);

  let valid = () => {
    let formData = new FormData(getDoc("form2134"));
    let data = Object.fromEntries(formData.entries());
    if (data.country == "Nigeria") {
      setIsNaij(true);
    } else {
      setIsNaij(false);
      setIsLagos(false);
      // alert('data'+data.country)
      //console.log('shipOnCountry,weight')
      let shipOnCountry = calculateTotal(
        ship[data.country.split(" ").join("_")],
        weight
      );
      let shipOnRegion = calculateTotal(ship[countries[data.country]], weight);
      let fallback = calculateTotal(ship.international, weight);

      let p = +(
        ((shipOnCountry || shipOnRegion || fallback) *
          currencyTab[null || "NGN"].price_in_naira) /
        symbolTab[symbol]
      ).toFixed(2);
      setDeliv(p);
      // console.log(p,'in any case 1',)
      setDeliv1(shipOnCountry || shipOnRegion || fallback);
    }

    if (data.state) {
      // console.log(data.state)
      // setIsNaij(true)
      //alert('hey')
      // alert(data.state)
      if (data.state === "Lagos State") {
        setIsLagos(true);
      } else {
        setIsLagos(false);
        if (data.country !== "Nigeria") return;
        let p = +(
          ((ship[data.state.split(" ").join("_")] || ship.local) *
            currencyTab[null || "NGN"].price_in_naira) /
          symbolTab[symbol]
        ).toFixed(2);
        setDeliv(p);
        // console.log(p,'in any case 1')
        setDeliv1(ship[data.state.split(" ").join("_")] || ship.local);
      }
    }

    //onsole.log(data.city)

    if (data.city && data.state === "Lagos State") {
      //alert('hello')
      // console.log(data.state)
      // setIsNaij(true)
      //alert('hey')
      // alert(data.state)

      // if(data.country !== 'Nigeria') return
      let p = +(
        ((ship[data.city] || ship.local) *
          currencyTab[null || "NGN"].price_in_naira) /
        symbolTab[symbol]
      ).toFixed(2);
      setDeliv(p);
      // console.log(p,'in any case 1')
      setDeliv1(ship[data.city] || ship.local);
    }
    let f = Object.keys(data);
    // alert(validate(f,isNaij).length === 0)
    //console.log(f ,'hello famzt')
    return validate(f, isNaij).length === 0
      ? set_user_data(data)
      : set_user_data(null);
  };

  useEffect(() => {
    fetch_shipment((err, res) => {
      if (err) return;
      if (!res.success) return;
      let exchange = res.shipments;

      setShip(exchange);
      //setSymbolTab(exchange.symbolTab)
    });
  }, []);

  return (
    <>
      <Path
        setPage={setPage}
        data={[
          { name: "Home", path: "home" },
          { name: "Cart", path: "cart" },
          { name: "Checkout", path: "checkout" },
        ]}
      />{" "}
      <br />
      <div className="split">
        <div className="one">
          <Review
            symbolTab={symbolTab}
            currencyTab={currencyTab}
            symbol={symbol}
            cart={cart}
          />
          <div className="checkbox">
            <input type="checkbox" name="" id="" />
            Returning Customer
          </div>
          <Delivery
            isLagos={isLagos}
            isNaij={isNaij}
            setIsNaij={setIsNaij}
            pace={pace}
            setPace={setPace}
            valid={valid}
          />
        </div>
        <div
          className="two"
          style={{
            display: pace === 0 ? "block" : "none",
          }}>
          <Summary
            deliv={deliv}
            symbolTab={symbolTab}
            currencyTab={currencyTab}
            setDiscountCode={setDiscountCode}
            setURI={setURI}
            setPage={setPage}
            setCurrency={setCurrency}
            symbol={symbol}
            busy={busy}
            setBusy={setBusy}
            pace={pace}
            setPace={setPace}
            lockProduct={lockProduct}
            price={price}
          />
        </div>
      </div>
    </>
  );
}

export default Checkout;
