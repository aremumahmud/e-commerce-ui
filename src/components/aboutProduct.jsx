import Path from "./path";
import ProductMain from "./productMain";

function AboutProduct({ setCart, setPage , product , productData,symbol,setViewStatus3,setViewStatus2, setCartData3 ,setProduct,cart ,symbolTab , currencyTab}) {
  return (
    <div className="aboutProduct">
      <Path
        setPage={setPage}
        data={[
          { name: "Home", path: "home" },
          { name: "About Product", path: "product" },{name:product.category}
        
        ]}
      />
      <ProductMain symbolTab={symbolTab} currencyTab={currencyTab} cart={cart} setProduct={setProduct}  setViewStatus3={setViewStatus3} setViewStatus2={setViewStatus2} setCartData3={setCartData3} symbol={symbol} productData={productData} datar={product} setCart={setCart} setPage={setPage} />
    </div>
  );
}

export default AboutProduct;
