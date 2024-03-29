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
  setcart,
  setCartno
}) {
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch_categories((err, res) => {
      if (err) return;
      setCategories(res.data.data);
    });
    
  }, []);
 
  
  let [trigger, setTrigger] = useState(false);
  useEffect(() => {
    try{
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (Object.keys(cart).length === 0) {
      setCartno(0);
      localStorage.setItem("no", 0);
      return;
    }
    let ids = extract_ids(cart);
    // console.log(ids,":ids",cart)
    get_current_version(ids, (err, res) => {
      if (err) {
        //do sth
        // console.log(err)
        return setTrigger(!trigger);
      }

      //let datan = JSON.parse(res).data;
     // console.log(datan,'jnk,m ,',JSON.parse(res))
     let updatedCart = update_cart( JSON.parse(res), cart);
      let no = localStorage.getItem("no");
      setcart(updatedCart);
      setCartno(no);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      // console.log(err,res, 'this is ,the thing i want to see')
    });
  }catch(e){
    //alert(e)
  }
  }, []);

let pages = paginate_products([...data],50)

let [product_data , setProductData] = useState(pages[0]||[])
let [active_index, setActiveIndex] = useState(0) 

let set_data_for_pagination = (index)=>{
  window.scroll(0,0)
    if(index > (pages.length-1)){
      setActiveIndex(0)
      return setProductData(pages[0]||[])
    }
    setActiveIndex(index)
    setProductData(pages[index]||[])
  } 
  useEffect(()=>{
  
    let pages = paginate_products([...data],50)
    setProductData(pages[0]||[])
   // console.log(data,'jhjk,n')
  },[data])
  
//console.log('hnbnjmn nknh ',product_data)
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
<br /><br />
    <p class="sub_header11">Dahlia Collection</p>
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
        data={product_data}
      />
      <Pagination pages={pages} setPage={set_data_for_pagination} activeIndex={active_index} />
      {/* <p className="topic">Weekly Popular Products</p>
      <Products  setViewStatus3={setViewStatus3} setCartData3={setCartData3} symbol={symbol} setProduct={setProduct}  cart={cart} setPage={setPage} setCart={setCart} data={[0, 1, 2, 3].map(i=>data[i])} />
      <br /> */}
      <About data={data[0] ? data[0].varieties : []} setPage={setPage} />
      {
        !localStorage.getItem("TokenID") && <>
        <br />
      <br />
        </>
        
      }
    </>
  );
}

export default Home;
