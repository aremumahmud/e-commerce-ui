import { AiOutlineHeart } from "react-icons/ai";
import "../css/products.css";
import { useState } from "react";
//import currencyTab, { symbolTab } from "../config/currency";
import arrayToObject from "../libs/arraytoObj_sizebased";

function Product({ setMain, setCart, cart, setPage, info, setProduct, symbol, currencyTab,symbolTab,setViewStatus3, setCartData3 }) {
  //console.log(info)

  let [load, setLoad] = useState(false)
  let onclick = (n) => {
    setLoad(true)
    let timeout = setTimeout(() => {
      setLoad(false)
      let sizes = arrayToObject(n.sizes)[n.size].qty
      setCart([n], 1, parseInt(sizes), info)
      //setCartData3(info)
      //setViewStatus3(true)
      clearTimeout(timeout)
    }, 200)

  }
  return (
    <>
      <div className="product" >
        <div className="imageDisplay" onClick={() => {
        //  window.scroll(0,0)
          setPage('product')
          setProduct(info)
          setMain && setMain(info.image || info.mainImage)
        }}>
          <div className="heart">
            <AiOutlineHeart />
          </div>{ }
          <img src={info.image || info.mainImage} alt="" />
        </div>
        <div className="productInfo">
          <div onClick={() => {
            //window.scroll(0,0)
            setPage('product')
            setProduct(info)
          }} className="name">
            <p>{info.name}</p>
           
            {
              !isNaN(info.price) && <p>
              {symbol}{+((info.price * currencyTab[info.currency || 'NGN'].price_in_naira) / symbolTab[symbol]).toFixed(2)}
              <sup></sup>
            </p>
            }
           
          </div>
          {/* <p onClick={() => {
            setPage('product')
            setProduct(info)
            setMain && setMain(info.image || info.mainImage)

          }} className="description">{info.description}</p> */}
          {/* <div className="rating" onClick={() => {
            setPage('product')
            setProduct(info)
            setMain && setMain(info.image || info.mainImage)
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
            <p className="nonee">{Math.floor(Math.random() * 200) + 200}</p>
          </div> */}
          {/* <div className="btn" onClick={() => {
            setPage('product')
            setProduct(info)
            setMain && setMain(info.image || info.mainImage)
          }}>
            {/* {console.log(info.currentCurrency)} *
            {
              load ?
                <div className="loader"></div>
                : 'Explore -->'
            }


          </div> */}
        </div>
      </div>
      {/* <br /> */}
    </>

  );
}

export default Product;
