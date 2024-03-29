import "../css/products.css";
import Product from "./prods_admin";

function Products({data , view}) {
  return (
    <div className="products" style={data.length?{display:view}:{gridTemplateColumns: '100%'}}>
      {
        data.length ? data.map(x=>
          <Product parent={x.parent_id}  data={x} />
          ): <div className="sorry">sorry no products available at this moment</div>
      }
      
    </div>
  );
}

export default Products;
