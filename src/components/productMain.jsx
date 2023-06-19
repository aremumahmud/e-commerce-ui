import "../css/productMain.css";
import {
  AiFillStar,
  AiOutlineCar,
  AiOutlineDeliveredProcedure,
} from "react-icons/ai";
import Specs from "./specs";
import Products from "./products";
import { useEffect, useState } from "react";
import currencyTab, { symbolTab } from "../config/currency";
import Sizes from "./sizes";
import arrayToObject from "../libs/arraytoObj_sizebased";

function ProductMain({
  setCart,
  setPage,
  datar,
  productData,
  symbol,
  setViewStatus3,
  setCartData3,
  setProduct,
  cart,
}) {
  //console.log(data,'rr')
  //console.log(datar)
  (!datar || Object.keys(datar).length === 0) && window.open("/home", "_self");
  //  if(false){
  //   return (!datar || Object.keys(datar).length === 0 )&& setPage('home')
  //  }
  // window.scrollTo(0,0)
  let [data, setData] = useState(datar);
  let [size, setSize] = useState(data.sizes[0].size);
  let [currMain, setMain] = useState(data.image || data.mainImage);
  let inventory = data.quantity;
  let [qty, setQuantity] = useState(1);
  let [outOfStock , setOutOfStock] = useState(false)
  let increase = () => {
    if (qty >= inventory) return;
    setQuantity(qty + 1);
    //setCart({})
  };
  let decrease = () => {
    if (qty === 1) return;
    setQuantity(qty - 1);
    //setCart({},true)
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mainDescription">
        <div className="stockImages">
          <div className="mainDisplay">
            <img src={currMain} alt="" />
          </div>
          <div className="varietyDisplay">
            <div
              className="variety"
              onClick={() => {
                setMain(data.varieties[0].image);
                setData({
                  ...data,
                  varieties: data.varieties,
                  _id: data.varieties[0].id,
                  image: data.varieties[0].image,
                });
              }}>
              {" "}
              <img src={data.varieties[0].image} alt="" />
            </div>
            <div
              className="variety"
              onClick={() => {
                setMain(data.varieties[1].image);
                setData({
                  ...data,
                  varieties: data.varieties,
                  _id: data.varieties[1]
                    ? data.varieties[1].id
                    : data.varieties[0].id,
                  image: data.varieties[1]
                    ? data.varieties[1].image
                    : data.varieties[0].image,
                });
              }}>
              {" "}
              <img
                src={
                  data.varieties[1]
                    ? data.varieties[1].image
                    : data.varieties[0].image
                }
                alt=""
              />
            </div>
            <div
              className="variety"
              onClick={() => {
                setMain(data.varieties[2].image);
                setData({
                  ...data,
                  varieties: data.varieties,
                  _id: data.varieties[2]
                    ? data.varieties[2].id
                    : data.varieties[0].id,
                  image: data.varieties[2]
                    ? data.varieties[2].image
                    : data.varieties[0].image,
                });
              }}>
              {" "}
              <img
                src={
                  data.varieties[2]
                    ? data.varieties[2].image
                    : data.varieties[0].image
                }
                alt=""
              />
            </div>
            <div
              className="variety"
              onClick={() => {
                setMain(data.varieties[3].image);
                setData({
                  ...data,
                  varieties: data.varieties,
                  _id: data.varieties[3]
                    ? data.varieties[3].id
                    : data.varieties[0].id,
                  image: data.varieties[3]
                    ? data.varieties[3].image
                    : data.varieties[0].image,
                });
              }}>
              {" "}
              <img
                src={
                  data.varieties[3]
                    ? data.varieties[3].image
                    : data.varieties[0].image
                }
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="stockInfo">
          <div className="top">
            <p className="title">{data.name}</p>
            <p className="description">{data.description}</p>
            <div className="rating">
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
              {/* <p>{"(121)"}</p> */}
            </div>
          </div>

          <div className="prices">
            <p className="subTitle">
              {symbol}
              {
                +(
                  (data.price *
                    currencyTab[data.currency || "NGN"].price_in_naira) /
                  symbolTab[symbol]
                ).toFixed(2)
              }
              .00{" "}
            </p>
            <p className="descrpTitle">
              Buy and adore with unlimited guarantee
            </p>
          </div>

          <div className="chooseColor">
            <p className="subTitle">Choose Color </p>
            <div className="colorWrap">
              <div className="color r1"></div>
              <div className="color r2"></div>
              <div className="color r3"></div>
              <div className="color r4"></div>
              <div className="color r5"></div>
            </div>
          </div>

          <div className="increment">
            <div className="incrementor">
              <p onClick={() => decrease()}>-</p>
              <p>{qty}</p>
              <p onClick={() => increase()}>+</p>
            </div>
            {/* <div className="inventory">
              <p>
                {" "}
                Only <span className="orange">{data.quantity} items left!</span>
              </p>
              <p>Dont miss it</p> */}
            {/* </div> */}
          </div>
          <Sizes setOutOfStock={setOutOfStock} setSize={setSize} sized={data.sizes} />
          {
            outOfStock ? <div class='out_of_stock'>out of stock</div> :<div className="ctas">
            <div
              className="btn active"
              onClick={() => {
                setCart(
                  [
                    {
                      currency: data.currentCurrency,
                      image: data.image,
                      _id: data._id,
                      name: data.name,
                      price: data.price,
                      size,
                    },
                  ],
                  qty,
                  parseInt(arrayToObject(data.sizes)[size].qty),
                  data.quantity,
                  {
                    image: data.image,
                    price: data.price,
                    name: data.name,
                    size,
                  }
                );
                setPage("checkout");
              }}>
              Buy now
            </div>
            <div
              className="btn"
              onClick={() => {
                setCart(
                  [
                    {
                      currency: data.currentCurrency,
                      image: data.image,
                      _id: data._id,
                      name: data.name,
                      price: data.price,
                      size,
                    },
                  ],
                  qty,
                  parseInt(arrayToObject(data.sizes)[size].qty),
                  {
                    image: data.image,
                    price: data.price,
                    name: data.name,
                    size,
                  }
                );
              }}>
              Add to Cart
            </div>
          </div>
          }
          
          <div className="otherInfo">
            <div className="info">
              <p className="topic">
                <AiOutlineCar
                  className="orange"
                  style={{ marginRight: "5px" }}
                />
                Fast Delivery
              </p>
              <p>Enter your postal Code for Delivery Automatically</p>
            </div>
            <div className="info">
              <p className="topic">
                <AiOutlineDeliveredProcedure
                  className="orange"
                  style={{ marginRight: "5px" }}
                />
                Return Delivery
              </p>
              <p>Free 30days Delivery return Policy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="item_specs">
        {/* <p className="topic">Apple Airpods Max Wireless HeadPhones Full Specifications</p>
        <div className="twin">
            <Specs />
        </div> */}
        {/* <br /><br /> */}
        <p style={{ marginTop: "0px" }} className="topic">
          Similar Items You Might Like
        </p>
        <Products
          setMain={setMain}
          setProduct={setData}
          cart={cart}
          setPage={setPage}
          setCart={setCart}
          setViewStatus3={setViewStatus3}
          setCartData3={setCartData3}
          symbol={symbol}
          data={
            productData.length <= 4
              ? productData
              : [0, 1, 2, 3].map(
                  (x) =>
                    productData[Math.floor(Math.random() * productData.length)]
                )
          }
        />
        <br />
        <br />
      </div>
    </>
  );
}

export default ProductMain;
