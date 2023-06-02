import Path from "./path";
import ProductMain from "./productMain";

function AboutProduct({ setCart, setPage , product , productData }) {
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
      <ProductMain productData={productData} datar={product} setCart={setCart} setPage={setPage} />
    </div>
  );
}

export default AboutProduct;
