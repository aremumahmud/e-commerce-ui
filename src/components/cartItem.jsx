import { AiOutlineDelete } from "react-icons/ai";
import "../css/cartItem.css";

function CartItem({info, removeFromCart,addFromCart}) {
  return (
    <>    <div className="cartItem">
      <div className="checkBox little">
        <input type="checkbox" name="" id="" />
      </div>
      <div className="product1 max">
        <div className="productImage">
        <img src={info.image} alt="" />
        </div>
        <div className="productInfo">
            <p className="subTopic">
                {info.name}
            </p>
            <p>{'universal'}</p>
        </div>
      </div>
      <div className="productQuantity">
      <div className="increment">
            <div className="incrementor">
              <p onClick={()=>removeFromCart(info._id)}>-</p>
              <p>{info.quantity_for_cart}</p>
              <p onClick={()=>addFromCart(info._id, info.quantity)}>+</p>
            </div>
            <div className="inventory">
                <AiOutlineDelete />
                <p>remove</p>
            </div>
          </div>
      </div>
      <div className="price">
        <p>N{info.price}.99</p>
      </div>
    </div>
    <br /><br />
    {/* <hr /> */}
    </>

  );
}

export default CartItem;
