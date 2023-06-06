import "../css/cart.css";
import CartItem from "./cartItem";
import Path from "./path";

function Cart({ data, setPage, removeFromCart,addFromCart,symbol,removeTotally }) {
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
          <div className="btn" onClick={()=>{
           
              Object.keys(data).length !== 0 && setPage('checkout')
         
          }}>Proceed to Checkout</div>
        </div>

        {data && Object.keys(data).map(x=>data[x]).map((d) => <CartItem removeTotally={removeTotally} symbol={symbol} addFromCart={addFromCart} removeFromCart={removeFromCart} info={d}/>)}
        {
          Object.keys(data).length === 0 && <div className="empty_space">
            <p>No Items In Cart!</p>
          </div>
        }
      </div>
    </>
  );
}

export default Cart;
