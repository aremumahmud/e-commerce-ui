import "../css/products.css";
import Product from "./prods_admin";

function Products({data}) {
  return (
    <div className="products">
      {
        data && data.map(x=>
          <Product  data={x} />
          )
      }
      
    </div>
  );
}

export default Products;
