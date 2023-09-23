import "../css/productMain.css";
import { AiOutlineCar, AiOutlineDeliveredProcedure } from "react-icons/ai";

import Products from "./products";
import { useEffect, useState } from "react";

import Sizes from "./sizes";
import arrayToObject from "../libs/arraytoObj_sizebased";
import calculate_virtual_discount from "../libs/virtual_discount";
import { nameTab } from "../config/currency";
import convertCloudinaryURL from "../libs/convert_to_medium_quality";
import removeDuplicates from "../libs/remove_duplicates";
import Space from "./space";
import getSizeQuantity from "../libs/getSizeQuantity";

function ProductMain({
  setCart,
  setPage,
  datar,
  productData,
  symbol,
  setViewStatus3,
  setViewStatus2,
  setCartData3,
  cart,
  currencyTab,
  symbolTab,
  setCategory
}) {
  //console.log(data,'rr')
  //console.log(datar)
  if (!datar || Object.keys(datar).length === 0) {
    let data_from_localstorage = JSON.parse(
      localStorage.getItem("product_data")
    );
    if (
      data_from_localstorage ||
      Object.keys(data_from_localstorage).length !== 0
    ) {
      datar = data_from_localstorage;
      setCategory(datar.category)
    } else {
      datar = {};
    }
  }

  (!datar || Object.keys(datar).length === 0) && window.open("/home", "_self");
  (datar || Object.keys(datar).length !== 0) &&
    localStorage.setItem("product_data", JSON.stringify(datar));
  //  if(false){
  //   return (!datar || Object.keys(datar).length === 0 )&& setPage('home')
  //  }
  // window.scrollTo(0,0)
  let [data, setData] = useState(datar);
  let [size, setSize] = useState(data.sizes[0] ? data.sizes[0].size : "");
  let [currMain, setMain] = useState(data.image || data.mainImage);
  let inventory = data.quantity;
  let [qty, setQuantity] = useState(1);
  let [outOfStock, setOutOfStock] = useState(false);
  let increase = () => {
   // = size[]
    let inv_sizes = getSizeQuantity(data.sizes , size)
    if (qty >= inv_sizes) return;
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

  let [active , setAcive] = useState(0)
  // useEffect(() => {
  //   console.log(data, "this friuc");
  // }, [data]);
  return (
    <>
      <div className="mainDescription">
        <div className="stockImages">
        <div className="image_wrapper_stock" >
          <div className="mainDisplay">
            <img src={convertCloudinaryURL(currMain)} alt="" />
            {
            !currMain && <div className="loader d"></div>
          }
          </div>
          {/* <div className="mobile">
            <p className="padding10px">Product Views</p>
          </div> */}
          {/* <div className="tab_resp">
            <p className="padding20px">Product Views</p>
          </div> */}
          <div
            className="varietyDisplay"
            style={
              data.varieties.length !== 4
                ? {
                    justifyContent:
                      data.varieties.length === 4 ? "space-between" : "flex-start",
                  }
                : {}
            }>
            {data.varieties.length > 1 && (
              <div
                className={active === 0?"variety green":'variety'}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setAcive(0)
                  setMain(data.varieties[0].image);
                  setData({
                    ...data,
                    varieties: data.varieties,
                    sizes: data.varieties[0].sizes,
                    _id: data.varieties[0].id,
                    image: data.varieties[0].image,
                  });
                }}>
                {" "}
                <img src={convertCloudinaryURL(data.varieties[0].image)} alt="" />
              </div>
            )}

            {data.varieties[1] && (
              <div
              className={active === 1?"variety green":'variety'}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setAcive(1)
                  if (data.uploadType !== "default") {
                    return setMain(
                      data.varieties[1]
                        ? data.varieties[1].image
                        : data.varieties[0].image
                    );
                  }

                  setMain(
                    data.varieties[1]
                      ? data.varieties[1].image
                      : data.varieties[0].image
                  );
                  setData({
                    ...data,
                    sizes: data.varieties[1]
                      ? data.varieties[1].sizes
                      : data.varieties[0].sizes,
                    varieties: data.varieties,
                    _id: data.varieties[1]
                      ? data.varieties[1].id
                      : data.varieties[0].id,
                    image: data.varieties[1]
                      ? data.varieties[1].image
                      : data.varieties[0].image,
                  });
                }}>
                <img
                  src={
                    convertCloudinaryURL(
                    data.varieties[1]
                      ? data.varieties[1].image
                      : data.varieties[0].image)
                  }
                  alt=""
                />
              </div>
            )}
            {data.varieties[2] && (
              <div
              className={active === 2?"variety green":'variety'}
                onClick={() => {
                  setAcive(2)
                  window.scrollTo(0, 0);

                  if (data.uploadType !== "default") {
                    return setMain(
                      data.varieties[2]
                        ? data.varieties[2].image
                        : data.varieties[0].image
                    );
                  }
                  setMain(
                    data.varieties[2]
                      ? data.varieties[2].image
                      : data.varieties[0].image
                  );
                  setData({
                    ...data,
                    varieties: data.varieties,
                    sizes: data.varieties[2]
                      ? data.varieties[2].sizes
                      : data.varieties[0].sizes,
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
                    convertCloudinaryURL(
                    data.varieties[2]
                      ? data.varieties[2].image
                      : data.varieties[0].image)
                  }
                  alt=""
                />
              </div>
            )}
            {data.varieties[3] && (
              <div
              className={active === 3?"variety green":'variety'}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setAcive(3)
                  if (data.uploadType !== "default") {
                    return setMain(
                      data.varieties[3]
                        ? data.varieties[3].image
                        : data.varieties[0].image
                    );
                  }
                  setMain(
                    data.varieties[3]
                      ? data.varieties[3].image
                      : data.varieties[0].image
                  );
                  setData({
                    ...data,
                    sizes: data.varieties[3]
                      ? data.varieties[3].sizes
                      : data.varieties[0].sizes,
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
                    convertCloudinaryURL(
                    data.varieties[3]
                      ? data.varieties[3].image
                      : data.varieties[0].image)
                  }
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
        </div>
        <div className="stockInfo">
          <div className="top">
            <p className="title">{data.name}</p>
            <br />
            <div className="prices" style={{ display: "flex", gap: "5px" }}>
              {/* <p className="subTitle">Buy and adore with unlimited guarantee</p> */}
              {data.virtual_discount !== 0 && <p
                className="descrpTitle medium"
                style={{ textDecoration: "line-through" }}>
                {symbol}
                {
                  +data[
                    nameTab[symbol] === "NGN" ? "price" : nameTab[symbol]
                  ].toFixed(2)
                }
              </p>}
              {/* <sup>-30%</sup> */}
              <p className="descrpTitle" style={data.virtual_discount?{ color: "#d01345" }:{}}>
                {symbol}
                {calculate_virtual_discount(
                  data.virtual_discount,
                  data[nameTab[symbol] === "NGN" ? "price" : nameTab[symbol]]
                ).toFixed(2)}
              </p>
            </div>
            <br />
            <div className="description">
              {data.description.split("\n").map((x) => {
                let isList = x.search("•") > -1;
                // console.log(isList)
                return (
                  x && (
                    <>
                      {isList ? (
                        <>
                          {x}
                          <br />
                        </>
                      ) : (
                        <p className="instructions">{x}</p>
                      )}
                    </>
                  )
                );
              })}
              {/* <p >{data.description}</p> */}
            </div>

            {/* <div className="rating">
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
              // 
            </div> */}
          </div>

          {/* <div className="chooseColor">
            <p className="subTitle">Choose Color </p>
            <div className="colorWrap">
              <div className="color r1"></div>
              <div className="color r2"></div>
              <div className="color r3"></div>
              <div className="color r4"></div>
              <div className="color r5"></div>
            </div>
          </div> */}

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
          <br />
          <div>
            <p className="reeky"> Weight</p>{" "}
            <p className="descrpTitle">{data.weight.toFixed(1)}kg</p>
          </div>

          <Sizes
            setViewStatus={setViewStatus2}
            setOutOfStock={setOutOfStock}
            setSize={setSize}
            data={data}
            setQuantity={setQuantity}
          />
          {outOfStock ? (
            <div class="out_of_stock">out of stock</div>
          ) : (
            <div className="ctas">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContents: "center",
                }}
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
                        weight: data.weight,
                        USD: data.USD,
                        GBP: data.GBP,
                        EUR: data.EUR,
                        parent_id: data.parent_id,
                        virtual_discount: data.virtual_discount
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
                      weight: data.weight,
                      USD: data.USD,
                      GBP: data.GBP,
                      EUR: data.EUR,
                      parent_id: data.parent_id,
                      virtual_discount: data.virtual_discount
                      
                    }
                  );
                  setPage("checkout");
                }}>
                Buy now
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContents: "center",
                }}
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
                        weight: data.weight,
                        USD: data.USD,
                        GBP: data.GBP,
                        EUR: data.EUR,
                        parent_id: data.parent_id,
                        virtual_discount: data.virtual_discount

                      },
                    ],
                    qty,
                    parseInt(arrayToObject(data.sizes)[size].qty),
                    {
                      image: data.image,
                      price: data.price,
                      name: data.name,
                      size,
                      weight: data.weight,
                      USD: data.USD,
                      GBP: data.GBP,
                      EUR: data.EUR,
                      parent_id: data.parent_id,
                      virtual_discount: data.virtual_discount
                    }
                  );
                }}>
                Add to Bag
              </div>
            </div>
          )}

          <div className="otherInfo">
            <div className="info">
              <p className="topic">
                <AiOutlineCar
                  style={{ marginRight: "5px" }}
                />
                Delivery and Shipping
              </p>
              <p
                style={{
                  fontSize: "small",
                }}>
                Check out our{" "}
                <a
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    fontSize: "small !important",
                  }}
                  onClick={() => setPage("shipping_policy")}>
                  shipping policy
                </a>{" "}
              </p>
            </div>
            <div className="info">
              <p
                style={{
                  marginBottom: "10px",
                }}
                className="topic">
                <AiOutlineDeliveredProcedure
                 
                  style={{ marginRight: "5px" }}
                />
                Return Policy
              </p>
              <p
                style={{
                  fontSize: "small ",
                }}>
                Check out our{" "}
                <a
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    fontSize: "small !important",
                  }}
                  onClick={() => setPage("return_policy")}>
                  return policy
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Space />
      <div className="item_specs">
        {/* <p className="topic">Apple Airpods Max Wireless HeadPhones Full Specifications</p>
        <div className="twin">
            <Specs />
        </div> */}
        {/* <br /><br /> */}
        <p className="topic">Similar Items You Might Like</p>
        <Products
          setMain={setMain}
          setProduct={setData}
          cart={cart}
          setPage={setPage}
          setCart={setCart}
          setViewStatus3={setViewStatus3}
          setCartData3={setCartData3}
          symbol={symbol}
          currencyTab={currencyTab}
          symbolTab={symbolTab}
          data={
            productData.length <= 4
              ? removeDuplicates(productData,'_id')
              : removeDuplicates([0, 1, 2, 3].map(
                  (x) =>
                    productData[Math.floor(Math.random() * productData.length)]
                ).filter(xn => xn._id != data._id),'_id')
          }
        />
        <br />
        <br />
      </div>
    </>
  );
}

export default ProductMain;
