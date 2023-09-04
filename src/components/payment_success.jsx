import { useEffect, useState } from "react";
import Path from "./path";
import Payment from "./payment";

function PaymentSucesss({setPage , cleanCart}){
    
      localStorage.setItem('cart','{}')
      localStorage.setItem('no',0)
      cleanCart()
   
    return (
        <>
         <Path
        setPage={setPage}
        data={[
          { name: "Home", path: "home" },
          { name: "Payment Success", path: "success" },
        ]}
      />
         <Payment setPage={setPage}/>
        </>
    )
}

export default PaymentSucesss