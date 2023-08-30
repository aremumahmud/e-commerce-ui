import { AiOutlineDelete } from "react-icons/ai";
import "../css/cartItem.css";
import { nameTab } from "../config/currency";
//import currencyTab, { symbolTab } from "../config/currency";

function CartItem({
  info,
  removeFromCart,
  addFromCart,
  symbol,
  removeTotally,
  symbolTab,
  currencyTab,
}) {
  return (
    <>
      {" "}
      <div className="cartItem">
        {/* <div className="checkBox little">
        <input type="checkbox" name="" id="" />
      </div> */}
        <div className="product1 max">
          <div className="productImage">
            <img src={info.image} alt="" />
          </div>
          <div className="productInfo">
            <p className="subTopic">{info.name}</p>
            <p>{"universal"}</p>
            <p>size: {info.size}</p>
          </div>
        </div>
        <div className="productQuantity">
          <div className="increment">
            <div className="incrementor">
              <p onClick={() => removeFromCart(info._id, info.size)}>-</p>
              <p>{info.quantity_for_cart}</p>
              <p
                onClick={() => addFromCart(info._id, info.quantity, info.size)}>
                +
              </p>
            </div>
            <div
              onClick={() => {
                let conf = window.confirm(
                  "Do you want to remove this Item from your cart?"
                );
                conf &&
                  removeTotally(info._id, info.quantity_for_cart, info.size);
              }}
              className="inventory">
              <AiOutlineDelete />
              <p>remove</p>
            </div>
          </div>
        </div>
        <div className="price">
          <p>
            {symbol}
            {calculate_virtual_discount(
                  info.virtual_discount,
                  info[
                    nameTab[symbol] === "NGN" ? "price" : nameTab[symbol]
                  ]
                ).toFixed(2)}
            {/* {
               +info[
                nameTab[symbol] === "NGN" ? "price" : nameTab[symbol]
              ].toFixed(2)
            } */}
          </p>
        </div>
      </div>
      <br />
      <br />
      {/* <hr /> */}
    </>
  );
}

export default CartItem;
