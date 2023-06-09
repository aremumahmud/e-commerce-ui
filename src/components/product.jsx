import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import "../css/products.css";
import { useState } from "react";
import currencyTab, { symbolTab } from "../config/currency";

function Product({setCart,cart,setPage,info,setProduct,symbol ,setViewStatus3, setCartData3}) {
 // console.log("/imgs/"+info+".png")
  let [load , setLoad] = useState(false)
  let onclick =(n)=>{
     setLoad(true)
     let timeout =  setTimeout(()=>{
        setLoad(false)
        
        setCart([n],1,info.quantity,info)
        //setCartData3(info)
        //setViewStatus3(true)
        clearTimeout(timeout)
     },200)

  }
  return (
    <>
                <div className="product" >
                <div className="imageDisplay" onClick={()=>{
                    setPage('product')
                    setProduct(info)
                  }}>
                  <div className="heart">
                    <AiOutlineHeart />
                  </div>{}
                  <img src={info.image} alt="" />
                </div>
                <div className="productInfo">
                  <div onClick={()=>{
                    setPage('product')
                    setProduct(info)
                  }} className="name">
                    <p>{info.name}</p>
                    <p>
                    {symbol}{+((info.price*currencyTab[info.currency||'NGN'].price_in_naira)/symbolTab[symbol]).toFixed(2)}
                      <sup></sup>
                    </p>
                  </div>
                  <p onClick={()=>setPage('product')} className="description">{info.description}</p>
                  <div className="rating" onClick={()=>{
                    //setPage('product')
                    setProduct(info)
                  }}>
                    <ul>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                    </ul>
                    <p>{Math.floor(Math.random()*200)+200}</p>
                  </div>
                  <div className="btn" onClick={()=>onclick({currency:info.currentCurrency,image:info.image,_id:info._id,name:info.name,price:info.price})}>
                  {/* {console.log(info.currentCurrency)} */}
                    {
                      load?
                    <div className="loader"></div>
                    :'Add to Cart'
                    }
                    
                    
                  </div>
                </div>
              </div>
    </>
      
  );
}

export default Product;
