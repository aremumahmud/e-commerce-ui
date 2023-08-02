import { useEffect, useState } from "react";
import Dash from "./dash";
import Path from "./path";
import fetch_orders from "../libs/fetch_orders";
import arrayToObject from "../libs/arrayToObject";


function Dashboard({setPage , setViewData , setViewStatus}){
    let [orders , setOrder] = useState([])
    let [load , setLoad] = useState(true)
    let [order2 , setOrder2] = useState({})
    let [loader , setLoader] = useState(true)
    let [refresh , setRefresh] = useState(false)
    useEffect(()=>{
        load &&
        fetch_orders((err,res)=>{
           
            setLoader(false)
             if(err) return setRefresh(true)
            let data = JSON.parse(res)
            if(data.success){
                setOrder(data.data.orders)
                setOrder2(arrayToObject(data.data.orders))
            }
           
            //console.log(data)
           setLoad(false)
        })
    })
    return (
        <>
      
         <Path
        setPage={setPage}
        data={[
          { name: "Home", path: "home" },
          { name: "User Dashboard", path: "dash" },
        ]}
      /><br /><br />
         <Dash refresh={refresh} loader={loader} setViewData={setViewData} setViewStatus={setViewStatus} orders={orders}/>
         <br /><br /><br />
        </>
    )
}

export default Dashboard