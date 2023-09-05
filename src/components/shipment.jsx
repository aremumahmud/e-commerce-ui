import { useEffect, useState } from "react";
import "../css/exchange.css";
import Tab from "./tab";
import fetch_shipment from "../libs/getShipment";
import modify_shipment from "../libs/modify_shipment";

function Shipment({ setPage }) {
  let [data, setData] = useState({});
  let [load, setLoad] = useState(false);
  useEffect(() => {
    fetch_shipment((err, res) => {
      if (err) return;
      if (!res.success) return;
      let exchange = res.shipments;
      setData(exchange);
      //setSymbolTab(exchange.symbolTab)
    });
  }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Tab
        style={{
          no: "5",
        }}
        setPage={setPage}
      />
      <hr />
      <br />
      {Object.keys(data)
        .filter((x) => {
          if (
            x === "id" ||
            x === "_id" ||
            x === "updatedAt" ||
            x === "createdAt" ||
            x === "__v"||
            x === "international"||
            x === "local"
          ) {
            return false;
          }
          return true;
        })
        .map((x) => {
          return (
            <div className="size_choose">
              <input
                style={{
                  width: "69%",
                }}
                className="simple_input partition"
                onChange={(e) => {
                  let temp = { ...data };
                  temp[x] = parseInt(e.target.value);
                  setData(temp);
                  // setValue(e.target.value)
                }}
                type="number"
                value={data[x]}
                name=""
                id=""
                placeholder="enter a value"
              />{" "}
              <button
                style={{
                  width: "30%",
                }}
                className="button">
                {x}
              </button>
            </div>
          );
        })}

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
          modify_shipment(data, (err, res) => {
            setLoad(false);
            if (err) return alert("Sorry an unexpected error occured!");
            let dt = JSON.parse(res);

            if (dt.authorized == "none") {
              alert("Please sign up as admin to carry out this operation");
              return window.open("/users/login", "_self");
            }

            if (!dt.success) return alert("Sorry an unexpected error occured!");
            alert("exchange updated successfully");
          });
        }}>
        {" "}
        {load ? <div className="loader"></div> : "save changes"}
      </div>
    </div>
  );
}

export default Shipment;
