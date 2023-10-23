import {
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineWarning,
} from "react-icons/ai";
import "../css/dashboard.css";
import Tile from "./tile";
import { useEffect, useState } from "react";
import delete_user from "../libs/deleteUser";
import get_user_info from "../libs/get_user_info";

function Dash({ orders, setViewStatus, setViewData, loader, refresh }) {
  let [page, setPage] = useState(true);
  let [user_loadr, set_user_loader] = useState(true);
  let [refr, set_refr] = useState(false);
  let [data, setData] = useState({});

  useEffect(() => {
    get_user_info((err, res) => {
      console.log(err, res);
      set_user_loader(false)
      let result = JSON.parse(res);

      if(result.error){
        return set_refr(true)
      }
      setData(result.data);
    });
  }, []);

  return (
    <div
      class="split_me1"
      style={{
        display: "flex",
      }}>
      <div class="one_1 desktop">
        <div class="nav">
          <ul>
            <li onClick={() => setPage(true)}>
              <AiOutlineUser className="icony" />
            </li>
            <li onClick={() => setPage(false)}>
              <AiOutlineSetting className="icony" />
            </li>
            </ul>
        </div>
      </div>
      {page ? (
        <div class="one_2">
          <p class="header11">Dashboard</p>
          <div class="nav mobile">
          <ul>
            <li onClick={() => setPage(true)}>
              <AiOutlineShopping className="icony" />
            </li>
            <li onClick={() => setPage(false)}>
              <AiOutlineUser className="icony" />
            </li>
            </ul>
        </div>
        <br />
        <p class="sub_header11">Orders</p>
          {loader && (
            <div className="loadings">
              <div className="loader d"></div>
            </div>
          )}
          {loader === false && orders.length === 0 && !refresh && (
            <div className="loadings">
              <div className="nony">No orders yet</div>
            </div>
          )}
          {refresh && (
            <div className="loadings">
              <div className="nony h">
                Please refresh this page or check your internet connection
              </div>
            </div>
          )}
          {orders.map((x) => (
            <Tile
              setViewStatus={setViewStatus}
              setViewData={setViewData}
              data={x}
            />
          ))}
        </div>
      ) : (
        <div class="one_2">
        <p class="header11">Dashboard</p>
          <div class="nav mobile">
          <ul>
            <li onClick={() => setPage(true)}>
              <AiOutlineShopping className="icony" />
            </li>
            <li onClick={() => setPage(false)}>
              <AiOutlineUser className="icony" />
            </li>
            </ul>
        </div>
        <br />
        <p class="sub_header11">User Actions</p>
          {user_loadr && (
            <div className="loadings">
              <div className="loader d"></div>
            </div>
          )}
          {refr && (
            <div className="loadings">
              <div className="nony h">
                Please refresh this page or check your internet connection
              </div>
            </div>
          )}
          {(!user_loadr && !refr) && (
            <>
              {" "}
              <p
                className='dash_sub_topics'>
                Username :{" "}
                <span
                  style={{
                    // padding:'10px',
                    fontWeight: "400",
                  }}>
                  {data.username}
                </span>
              </p>
              <p
               className='dash_sub_topics'>
                Email address :{" "}
                <span
                  style={{
                    // padding:'10px',
                    fontWeight: "400",
                  }}>
                  {data.email_address}
                </span>
              </p>
              <br />
              <p
                style={{
                  padding: "10px",
                  color: " #004225",
                  border: "1px solid  #004225",
                  width: "fit-content",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
                className="dark_mode_color"
                onClick={() => {
                  let conf = window.confirm("Are you want to Log Out?");
                  if (conf) {
                    localStorage.removeItem("TokenID");
                    window.open("/home", "_self");
                  }
                }}>
                {" "}
                <AiOutlineLogout /> Log out
              </p>
              <p
                style={{
                  padding: "10px",
                  color: "red",
                  border: "1px solid red",
                  width: "fit-content",
                  borderRadius: "10px",
                }}
                onClick={() => {
                  window.confirm("Are you want to DEACTIVATE YOUR ACCOUNT?") &&
                    delete_user((err, res) => {
                      //setLoad1(false)
                      //if(err) return alert('Sorry an unexpected error occured!')
                      let dt = JSON.parse(res);

                      if (dt.authorized == "none") {
                        alert(
                          "Please sign up as admin to carry out this operation"
                        );
                        return window.open("/users/login", "_self");
                      }

                      if (!dt.success)
                        return alert("Sorry an unexpected error occured!");
                      localStorage.removeItem("TokenID");
                      alert(dt.message);
                      window.open("/home", "_self");
                    });
                }}>
                <AiOutlineWarning /> Deactivate your Account
              </p>
            </>
          )}
        </div>
      )}

      <div class="location">
        {/* <div className="center">
         <!-- <p class="topic_me">Click on an order to reveal its location</p> -->
        <p><span class="topic_me">Location: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sunt quasi, repellat nulla assumenda voluptatem, exercitationem temporibus magnam, modi iste qui rem nam dolorum ea animi aliquid minima
            adipisci explicabo.
        </p>
    </div> */}
      </div>
    </div>
  );
}

export default Dash;
