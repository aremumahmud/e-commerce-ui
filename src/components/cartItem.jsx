import { AiOutlineDelete } from "react-icons/ai";
import "../css/cartItem.css";
import { nameTab } from "../config/currency";
import calculate_virtual_discount from "../libs/virtual_discount";
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
      <br />
     
      <div className="cartItem desktop">
        {/* <div className="checkBox little">
        <input type="checkbox" name="" id="" />
      </div> */}
        <div className="product1 max">
          <div className="productImage">
            <img src={info.image} alt="" />
          </div>
          <div className="productInfo">
            <p className="subTopic">{info.name}</p>
            <p>weight: {info.weight}kg</p>
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
              info[nameTab[symbol] === "NGN" ? "price" : nameTab[symbol]]
            ).toFixed(2)}
            {/* {
               +info[
                nameTab[symbol] === "NGN" ? "price" : nameTab[symbol]
              ].toFixed(2)
            } */}
          </p>
        </div>
      </div>
      <div className="cartItem mobile">
        {/* <div className="checkBox little">
        <input type="checkbox" name="" id="" />
      </div> */}
        <div className="product1 max">
          <div className="productImage">
            <img src={info.image} alt="" />
          </div>
          <div className="productInfo">
            <div className="product_price">
              <p style={{ fontWeight: "500" }}>
                {symbol}
                {calculate_virtual_discount(
                  info.virtual_discount,
                  info[nameTab[symbol] === "NGN" ? "price" : nameTab[symbol]]
                ).toFixed(2)}
                {/* {
               +info[
                nameTab[symbol] === "NGN" ? "price" : nameTab[symbol]
              ].toFixed(2)
            } */}
              </p>
            </div>
            <div>
              <p className="product_name">{info.name}</p>
            </div>
            <div>
              <p>
                weight {info.weight}kg <span>| size {info.size}</span>
              </p>
              <p style={{ fontWeight: "500" }}> Qty {info.quantity_for_cart}</p>
            </div>
          </div>
          <div onClick={() => {
                let conf = window.confirm(
                  "Do you want to remove this Item from your cart?"
                );
                conf &&
                  removeTotally(info._id, info.quantity_for_cart, info.size);
              }}>
          <AiOutlineDelete size={25} />
          </div>
        </div>
        {/* <div className="productQuantity">
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
        </div> */}
        {/* <div className="price">
          <p>
            {symbol}
            {calculate_virtual_discount(
                  info.virtual_discount,
                  info[
                    nameTab[symbol] === "NGN" ? "price" : nameTab[symbol]
                  ]
                ).toFixed(2)}
            
          </p>
        </div> */}
      </div>
      <br />
      <br />
    <hr />
    </>
  );
}

export default CartItem;
