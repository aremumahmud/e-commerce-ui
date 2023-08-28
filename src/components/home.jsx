import { useEffect, useState } from "react";
import About from "./about";
//import Display from "./display";
import Filter from "./filter";
import Pagination from "./pagination";
import Products from "./products";
import fetch_categories from "../libs/get_category";
import extract_ids from "../libs/extract_ids";
import get_current_version from "../libs/getCurrentVersion";
import update_cart from "../libs/updateCart";
import paginate_products from "../libs/paginate_products";


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
  setcart
}) {
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch_categories((err, res) => {
      if (err) return;
      setCategories(res.data.data);
    });
    
  }, []);
 
  let [trigger , setTrigger] = useState(false)
  useEffect(()=>{
    let cart = JSON.parse(localStorage.getItem('cart'))
    if(Object.keys(cart).length === 0 ) return
    let ids = extract_ids(cart)
    console.log(ids,":ids",cart)
    get_current_version(ids,(err,res)=>{
      if(err){
        //do sth
        console.log(err)
        return setTrigger(!trigger)
      }
  
      let data = JSON.parse(res).data
      let updatedCart = update_cart(data,cart)
      setcart(updatedCart)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
  // console.log(err,res, 'this is ,the thing i want to see')
  })
  },[])

let pages = paginate_products(data,6)
//console.log(pages,'hnbnjmn nknh ')
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
      <Pagination pages={pages} />
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
