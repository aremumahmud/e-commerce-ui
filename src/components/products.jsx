import "../css/products.css";
import Product from "./product";

function Products({setMain,data,setCart , setPage,cart, setProduct, symbol, setViewStatus3, setCartData3, currencyTab,symbolTab}) {
  console.log(data)
  return (
    <div className="products">
      {
       
        data.length && data.filter(x=>{
          if(!x || x.mode === 'servant'){
            return false
          }
          return true
        }).map(x=>
          <Product currencyTab={currencyTab} symbolTab={symbolTab} setMain={setMain}  setViewStatus3={setViewStatus3} setCartData3={setCartData3} symbol={symbol} setProduct={setProduct} info={x} setPage={setPage} cart={cart} setCart={setCart} />
          )
      }
      
    </div>
  );
}

export default Products;
