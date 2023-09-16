import "../css/cart.css";
import extract_ids from "../libs/extract_ids";
import get_current_version from "../libs/getCurrentVersion";
import update_cart from "../libs/updateCart";
import CartItem from "./cartItem";
import Path from "./path";
import { useEffect, useState } from "react";
import Space from "./space";

function Cart({
  data,
  setPage,
  removeFromCart,
  addFromCart,
  symbol,
  removeTotally,
  symbolTab,
  currencyTab,
  setcart,
  setCartno,
}) {
  let [trigger, setTrigger] = useState(false);
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

  return (
    <>
      <Path
        setPage={setPage}
        data={[
          { name: "Home", path: "home" },
          { name: "Cart", path: "cart" },
        ]}
      />

      <div className="cart">
        <div className="checkCta">
          <p className="topic">Cart</p>
          <div
            className="btn"
            onClick={() => {
              Object.keys(data).length !== 0 && setPage("checkout");
            }}>
            Proceed to Checkout
          </div>
        </div>
        <Space />
        <br />
        <br />
        {/* <br /> */}
        {data &&
          Object.keys(data)
            .map((x) => data[x])
            .map((d) => (
              <CartItem
                currencyTab={currencyTab}
                symbolTab={symbolTab}
                removeTotally={removeTotally}
                symbol={symbol}
                addFromCart={addFromCart}
                removeFromCart={removeFromCart}
                info={d}
              />
            ))}
        {Object.keys(data).length === 0 && (
          <div className="empty_space">
            <p>No Items In Cart!</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
