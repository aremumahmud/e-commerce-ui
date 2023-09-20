import { AiOutlineHeart } from "react-icons/ai";
import "../css/products.css";
import { useState } from "react";
//import currencyTab, { symbolTab } from "../config/currency";
import arrayToObject from "../libs/arraytoObj_sizebased";
import calculate_virtual_discount from "../libs/virtual_discount";
import { nameTab } from "../config/currency";
import convertCloudinaryURL from "../libs/convert_to_medium_quality";

function Product({
  setMain,
  setCart,
  cart,
  setPage,
  info,
  setProduct,
  symbol,
  currencyTab,
  symbolTab,
  setViewStatus3,
  setCartData3,
}) {
  //console.log(info)

  let [load, setLoad] = useState(false);
  let onclick = (n) => {
    setLoad(true);
    let timeout = setTimeout(() => {
      setLoad(false);
      let sizes = arrayToObject(n.sizes)[n.size].qty;
      setCart([n], 1, parseInt(sizes), info);
      //setCartData3(info)
      //setViewStatus3(true)
      clearTimeout(timeout);
    }, 200);
  };
  return (
    <>
      <div className="product">
        <div
          className={
            info.image ? "imageDisplay" : "imageDisplay height_preloader"
          }
          onClick={() => {
            //  window.scroll(0,0)
            setPage("product");
            setProduct(info);
            setMain &&
              setMain(convertCloudinaryURL(info.image || info.mainImage));
          }}>
          {info.virtual_discount ? (
            <div className="heart" style={{ padding: "2px 10px 0px 10px" }}>
              <p
                style={{ color: "#d01345", fontSize: "small", padding: "5px" }}>
                -{info.virtual_discount || 0}%
              </p>
              {/* <AiOutlineHeart /> */}
            </div>
          ):''}

          {!info.image && <div className="loader d"></div>}
          {info.image && (
            <img
              src={convertCloudinaryURL(info.image || info.mainImage)}
              alt=""
            />
          )}
        </div>
        <div className="productInfo">
          <div
            onClick={() => {
              //window.scroll(0,0)
              setPage("product");
              setProduct(info);
            }}
            className="name">
            <p>{info.name}</p>
            <div className="discount-way">
              {(!isNaN(info.price) && info.virtual_discount !== 0) && (
                <p
                  className="medium"
                  style={{ textDecoration: "line-through",marginRight:'10px' }}>
                  {symbol}
                  {
                    +info[
                      nameTab[symbol] === "NGN" ? "price" : nameTab[symbol]
                    ].toFixed(2)
                  }
                </p>
              )}

              {!isNaN(info.price) && (
                <p style={info.virtual_discount ? { color: "#d01345" } : {}}>
                  {symbol}
                  {calculate_virtual_discount(
                    info.virtual_discount || 0,
                    info[nameTab[symbol] === "NGN" ? "price" : nameTab[symbol]]
                  ).toFixed(2)}
                </p>
              )}
            </div>
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
