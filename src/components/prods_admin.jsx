import { AiFillDatabase, AiOutlineHeart } from "react-icons/ai";
import "../css/products.css";
import { useState } from "react";
import modify_product from "../libs/modify_product";
import delete_product from "../libs/delete_product";
import convertCloudinaryURL from "../libs/convert_to_medium_quality";

function Product({ data, parent }) {
  let [load, setLoad] = useState(false);
  let [load1, setLoad1] = useState(false);
  let [prod_data, setData] = useState(data);
  return (
    <>
      <div className="product">
        <div className="imageDisplay">
          <div className="heart">
            <AiOutlineHeart />
          </div>
          {}
          <img src={convertCloudinaryURL(prod_data.image) } alt="" />
        </div>
        {
          prod_data.mode === 'ruler' && <p  style={{
                width: "90%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
              className="button">master</p>
        }
        {
         prod_data.sizes.length && <>
            <div className="productInfo">
              <small>title</small>
              <div className="name">
                <input
                  style={{
                    marginBottom: 0,
                  }}
                  className="simple_input partition"
                  value={prod_data.parentProduct}
                  type="text"
                  onChange={(e) => {
                    let dt = { ...prod_data };
                    dt.parentProduct = e.target.value;
                    dt.name = e.target.value
                    setData(dt);
                  }}
                />
                {/* <p>{prod_data.parentProduct}</p> */}
              </div>
              <small>description</small>
              <p className="description">
                <textarea
                  style={{
                    borderRadius: "10px",
                  }}
                  name=""
                  id=""
                  cols="40"
                  rows="5"
                  value={prod_data.description}
                  onChange={(e) => {
                    let dt = { ...prod_data };
                    dt.description = e.target.value;
                    setData(dt);
                  }}></textarea>
              </p>

              <small>Category</small>
              <p className="description">
                <input
                  className="simple_input partition"
                  style={{
                    borderRadius: "10px",
                  }}
                  name=""
                  value={prod_data.category}
                  onChange={(e) => {
                    let dt = { ...prod_data };
                    dt.category = e.target.value;
                    setData(dt);
                  }}></input>
              </p>

              <small>weight (kgs)</small>
              <p className="description">
                <input
                  className="simple_input partition"
                  style={{
                    borderRadius: "10px",
                  }}
                  name=""
                  value={prod_data.weight}
                  onChange={(e) => {
                    let dt = { ...prod_data };
                    dt.weight = e.target.value;
                    setData(dt);
                  }}></input>
              </p>
              <small>Virtual Discount (%)</small>
              <p className="description">
                <input
                  type="number"
                  className="simple_input partition"
                  style={{
                    borderRadius: "10px",
                  }}
                  name=""
                  value={prod_data.virtual_discount}
                  onChange={(e) => {
                    let dt = { ...prod_data };
                    dt.virtual_discount = e.target.value;
                    setData(dt);
                  }}></input>
              </p>
              <small>Upload Type</small>
              <p className="description">
                <select
                  type="number"
                  className="simple_input partition"
                  style={{
                    borderRadius: "10px",
                  }}
                  name=""
                  value={prod_data.uploadType}
                  onChange={(e) => {
                    let dt = { ...prod_data };
                    dt.uploadType = e.target.value;
                    setData(dt);
                  }}>
                  {prod_data.uploadType === "default" && (
                    <>
                      <option value="default">Default</option>
                      <option value="one_pager">One Pager</option>
                    </>
                  )}
                  {prod_data.uploadType !== "default" && (
                    <>
                      <option value="one_pager">One Pager</option>
                      <option value="default">Default</option>
                    </>
                  )}
                </select>
              </p>
              <h2>Pricing</h2>
              <p>
                <sup>NGN</sup>

                <input
                  style={{
                    marginBottom: 0,
                  }}
                  className="simple_input partition"
                  value={prod_data.price}
                  type="number"
                  onChange={(e) => {
                    let dt = { ...prod_data };
                    dt.price = parseInt(e.target.value);
                    setData(dt);
                  }}
                />
              </p>
              <p>
                <sup>USD</sup>

                <input
                  style={{
                    marginBottom: 0,
                  }}
                  className="simple_input partition"
                  value={prod_data.USD}
                  type="number"
                  onChange={(e) => {
                    let dt = { ...prod_data };
                    dt.USD = parseInt(e.target.value);
                    setData(dt);
                  }}
                />
              </p>
              <p>
                <sup>GBP</sup>

                <input
                  style={{
                    marginBottom: 0,
                  }}
                  className="simple_input partition"
                  value={prod_data.GBP}
                  type="number"
                  onChange={(e) => {
                    let dt = { ...prod_data };
                    dt.GBP = parseInt(e.target.value);
                    setData(dt);
                  }}
                />
              </p>
              {/* <p>
                <sup>EUR</sup>

                <input
                  style={{
                    marginBottom: 0,
                  }}
                  className="simple_input partition"
                  value={prod_data.EUR}
                  type="number"
                  onChange={(e) => {
                    let dt = { ...prod_data };
                    dt.EUR = parseInt(e.target.value);
                    setData(dt);
                  }}
                />
              </p> */}
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
                    <p>{"(121)"}</p>
                  </div> */}
              <div
                className="btn"
                style={{
                  alignItems: "center",
                  display: "flex",
                  
                }}>
                <AiFillDatabase />
                <input
                  style={{
                    marginBottom: 0,
                  }}
                  className="simple_input partition"
                  value={prod_data.quantity}
                  type="number"
                  onChange={(e) => {
                    let dt = { ...prod_data };
                    dt.quantity = parseInt(e.target.value);
                    setData(dt);
                  }}
                />
              </div>
            </div>
            {prod_data.sizes.map((x) => (
              <div className="divisions">
                <div className="ass_size">
                  <p>{x.size.toUpperCase()}</p>
                </div>
                <div className="ass_qty">
                  <input
                    className="simple_input partition"
                    type="number"
                    name=""
                    id=""
                    value={x.qty}
                    onChange={(e) => {
                      let dt = { ...prod_data };
                      dt.sizes[x.index].qty = parseInt(e.target.value);
                      setData(dt);
                    }}
                  />
                </div>
              </div>
            ))}
            <div
              style={{
                width: "100%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
              className="button"
              onClick={() => {
                setLoad(true);
                modify_product(prod_data, parent, (err, res) => {
                  setLoad(false);
                  //if(err) return alert('Sorry an unexpected error occured!')
                  let dt = JSON.parse(res);

                  if (dt.authorized === "none") {
                    alert(
                      "Please sign up as admin to carry out this operation"
                    );
                    return window.open("/users/login", "_self");
                  }

                  if (!dt.sucess)
                    return alert("Sorry an unexpected error occured!");
                  alert("Products updated successfully");
                });
              }}>
              {load ? <div className="loader"></div> : "save changes"}
            </div>
          </>
        }

        <div
          style={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            background: "white",
            color: "red",
            border: "2px solid red",
          }}
          className="button"
          onClick={() => {
            setLoad1(true);
            window.confirm("Are you sure you want to delete this product?") &&
              delete_product(prod_data._id,prod_data.parent_id,prod_data.mode, (err, res) => {
                setLoad1(false);
                //if(err) return alert('Sorry an unexpected error occured!')
                let dt = JSON.parse(res);

                if (dt.authorized === "none") {
                  alert("Please sign up as admin to carry out this operation");
                  return window.open("/users/login", "_self");
                }

                if (!dt.success)
                  return alert("Sorry an unexpected error occured!");
                alert(dt.message);
                window.open("/prod_admin", "_self");
              });
          }}>
          {load1 ? <div className="loader"></div> : "Delete variety"}
        </div>
      </div>
    </>
  );
}

export default Product;
