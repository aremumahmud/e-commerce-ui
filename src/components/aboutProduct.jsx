import Path from "./path";
import ProductMain from "./productMain";

function AboutProduct({ setCart, setPage , product , productData,symbol,setViewStatus3, setCartData3 ,setProduct,cart }) {
  return (
    <div className="aboutProduct">
      <Path
        setPage={setPage}
        data={[
          { name: "Home", path: "home" },
          { name: "About Product", path: "product" },
          { name: "caps" },
        ]}
      />
      <ProductMain cart={cart} setProduct={setProduct}  setViewStatus3={setViewStatus3} setCartData3={setCartData3} symbol={symbol} productData={productData} datar={product} setCart={setCart} setPage={setPage} />
    </div>
  );
}

export default AboutProduct;
