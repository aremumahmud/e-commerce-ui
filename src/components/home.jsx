import { useEffect, useState } from "react";
import About from "./about";
//import Display from "./display";
import Filter from "./filter";
import Pagination from "./pagination";
import Products from "./products";
import fetch_categories from "../libs/get_category";

function Home({
  setCart,
  setPage,
  cart,
  setProduct,
  data,
  symbol,
  setFilter,
  setLoad,
  setViewStatus3,
  setCartData3,
  search,
  currencyTab,
  symbolTab,
  setCurrency,
}) {
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch_categories((err, res) => {
      if (err) return;
      setCategories(res.data.data);
    });
  }, []);
  return (
    <>
      <br />
      {/* <Display /> */}
      <br />
      <br />{" "}
      <Filter
        symbol={symbol}
        setCurrency={setCurrency}
        search={search}
        categories={categories}
        setLoad={setLoad}
        setFilter={setFilter}
      />
      {/* <p className="topic">Top Fashion For You!</p> */}
      <Products
        currencyTab={currencyTab}
        symbolTab={symbolTab}
        setViewStatus3={setViewStatus3}
        setCartData3={setCartData3}
        symbol={symbol}
        setProduct={setProduct}
        cart={cart}
        setPage={setPage}
        setCart={setCart}
        data={data}
      />
      <Pagination />
      {/* <p className="topic">Weekly Popular Products</p>
      <Products  setViewStatus3={setViewStatus3} setCartData3={setCartData3} symbol={symbol} setProduct={setProduct}  cart={cart} setPage={setPage} setCart={setCart} data={[0, 1, 2, 3].map(i=>data[i])} />
      <br /> */}
      <About data={data[0] ? data[0].varieties : []} setPage={setPage} />
      <br />
      <br />
    </>
  );
}

export default Home;
