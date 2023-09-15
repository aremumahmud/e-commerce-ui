import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import "../css/topnav.css";
import { useState } from "react";

function TopNav({ cart, setPage, search, searchLoader, setSearchLoader }) {
  let [inputSearch, setSearchInput]= useState('')
  return (
    <div className="wrap">
      <div className="topNav">
        <a href="/home" class="logo">
          {/* <p>Glitz<span>abellelabel</span></p> */}
          <img src="\imgs\3.png" alt="" />
        </a>
        <div className="navigations">
          {/* <ul>
                    <li>
                        <select name="" id="">
                            <option value="">Categories</option>
                        </select>
                    </li>
                    <li>Deals</li>
                    <li>What's More</li>
                    <li>Delivery</li>
                </ul> */}
        </div>
        <div className="search">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search product"
          />
          <div className="icon">
            {searchLoader ? (
              <div className="loader"></div>
            ) : (
              <AiOutlineSearch onClick={()=>{
                search(inputSearch)
                setSearchLoader(true)
              }} />
            )}
          </div>
        </div>
        <div className="usersection">
          <p
            onClick={() => {
              if (localStorage.getItem("TokenID")) {
                return setPage("dash");
              }
              let a = window.confirm(
                "Sorry, you need to sign in to access the dashboard. \nSign you up?"
              );
              return a ? setPage("users/signup") : "";
            }}>
            <AiOutlineUser size={25} style={{ fontWeight: "bold" }} />
            {/* User */}
          </p>
          <p onClick={() => setPage("cart")}>
            <span className="qty">{cart}</span>
            <AiOutlineShopping size={25} style={{ fontWeight: "bold" }} />
            {/* Cart */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
