import "../css/productMain.css";
import {
  AiFillStar,
  AiOutlineCar,
  AiOutlineDeliveredProcedure,
} from "react-icons/ai";
import Specs from "./specs";
import Products from './products'
import { useState } from "react";

function ProductMain({setCart , setPage,datar, productData,symbol}) {
 //console.log(data,'rr') 
 console.log(datar)
 let [data , setData] = useState(datar)
 let [currMain, setMain] = useState(data.image)
  let inventory = data.quantity
  let [qty , setQuantity] = useState(1)
  let increase = ()=>{
    if(qty >= inventory) return
    setQuantity(qty+1)
    //setCart({})
  }
  let decrease = ()=>{
    if(qty === 1) return 
    setQuantity(qty-1)
    //setCart({},true)
  }

  return (
    <>
      <div className="mainDescription">
        <div className="stockImages">
          <div className="mainDisplay">
            <img
              src={currMain}
              alt=""
            />
          </div>
          <div className="varietyDisplay">
            <div className="variety" onClick={()=>{setMain(data.varieties[0].image);setData({
                 ...data,varieties:data.varieties,
                 _id:data.varieties[0].id,
                 image:data.varieties[0].image})}}>
              {" "}
              <img
                src={data.varieties[0].image}
                alt=""
              />
            </div>
            <div className="variety" onClick={()=>{setMain(data.varieties[1].image);setData({
                ...data,
                varieties:data.varieties,
                _id:data.varieties[1].id,
                image:data.varieties[1].image})
                }}>
              {" "}
              <img
                src={data.varieties[1].image}
                alt=""
              />
            </div>
            <div className="variety" onClick={()=>{setMain(data.varieties[2].image);setData({
                ...data,
                varieties:data.varieties,
                _id:data.varieties[2].id,
                image:data.varieties[2].image})}}>
              {" "}
              <img
                src={data.varieties[2].image}
                alt=""
              />
            </div>
            <div className="variety" onClick={()=>{setMain(data.varieties[3].image);setData({
                ...data,varieties:data.varieties,
                _id:data.varieties[3].id,
                image:data.varieties[3].image})}}>
              {" "}
              <img
                src={data.varieties[3].image}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="stockInfo">
          <div className="top">
            <p className="title">{data.name}</p>
            <p className="description">
              {data.description}
            </p>
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
              <p>{"(121)"}</p>
            </div>
          </div>

          <div className="prices">
            <p className="subTitle">{symbol}{data.price}.00 or {symbol}{Math.floor(data.price/6)+33}.99/month </p>
            <p className="descrpTitle">
              Buy and listen or pay for it for 6 months
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
              <p onClick={()=>decrease()}>-</p>
              <p>{qty}</p>
              <p onClick={()=>increase()}>+</p>
            </div>
            <div className="inventory">
              <p>
                {" "}
                Only <span className="orange">{data.quantity} items left!</span>
              </p>
              <p>Dont miss it</p>
            </div>
          </div>
          <div className="ctas">
            <div className="btn active" onClick={()=>{setCart([{image:data.image,_id:data._id,name:data.name,price:data.price}],qty,data.quantity);setPage('checkout')}}>Buy now</div>
            <div className="btn" onClick={()=>{setCart([{image:data.image,_id:data._id,name:data.name,price:data.price}],qty,data.quantity)}}>Add to Cart</div>
          </div>
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
        <p className="topic">Apple Airpods Max Wireless HeadPhones Full Specifications</p>
        <div className="twin">
            <Specs />
        </div>
        <br /><br />
        <p className="topic">Similar Items You Might Like</p>
        <Products symbol={symbol} data={[0,1,2,3].map(x=>productData[Math.floor(Math.random()*productData.length)])} />
        <br /><br />
      </div>
    </>
  );
}

export default ProductMain;
