import "../css/products.css";
import Product from "./product";

function Products({data,setCart , setPage,cart, setProduct, symbol}) {
  return (
    <div className="products">
      {
        data.length && data.map(x=>
          <Product symbol={symbol} setProduct={setProduct} info={x} setPage={setPage} cart={cart} setCart={setCart} />
          )
      }
      
    </div>
  );
}

export default Products;
