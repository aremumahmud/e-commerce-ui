import { useEffect, useState } from "react";
import About from "./about";
import Display from "./display";
import Filter from "./filter";
import Pagination from "./pagination";
import Products from "./products";
import fetch_categories from "../libs/get_category";


function Home({setCart , setPage, cart, setProduct,data , symbol,setFilter ,setLoad, setViewStatus3,setCartData3,search }) {

  let [categories, setCategories]= useState([])
  useEffect(()=>{
   fetch_categories((err,res)=>{
    if(err) return
    setCategories(res.data.data)
   })
  },[])
  return (
    <>
    <br />
      <Display />
      <br /><br /> 
      <Filter search={search} categories={categories} setLoad={setLoad} setFilter={setFilter} /> 
      <p className="topic">Head Caps Recomended For You!</p>
      <Products  setViewStatus3={setViewStatus3} setCartData3={setCartData3} symbol={symbol} setProduct={setProduct} cart={cart} setPage={setPage} setCart={setCart} data={data} />
      <Pagination />
      <p className="topic">Weekly Popular Products</p>
      <Products  setViewStatus3={setViewStatus3} setCartData3={setCartData3} symbol={symbol} setProduct={setProduct}  cart={cart} setPage={setPage} setCart={setCart} data={[0, 1, 2, 3].map(i=>data[i])} />
      <br />
      <About setPage={setPage} />
      <br />
      <br />
    </>
  );
}


export default Home