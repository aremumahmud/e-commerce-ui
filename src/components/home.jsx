import About from "./about";
import Display from "./display";
import Filter from "./filter";
import Pagination from "./pagination";
import Products from "./products";


function Home({setCart , setPage, cart, setProduct,data , symbol}) {


  return (
    <>
      <Display />
      <Filter /> 
      <p className="topic">Head Caps Recomended For You!</p>
      <Products symbol={symbol} setProduct={setProduct} cart={cart} setPage={setPage} setCart={setCart} data={data} />
      <Pagination />
      <p className="topic">Weekly Popular Products</p>
      <Products symbol={symbol} setProduct={setProduct}  cart={cart} setPage={setPage} setCart={setCart} data={[0, 1, 2, 3].map(i=>data[i])} />
      <br />
      <About setPage={setPage} />
      <br />
      <br />
    </>
  );
}


export default Home