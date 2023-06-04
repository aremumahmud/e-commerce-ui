import { useEffect } from "react";
import Path from "./path";
import Payment from "./payment";

function PaymentSucesss({setPage , cleanCart}){
    useEffect(()=>{
      localStorage.removeItem('cart')
      cleanCart()
    },[])
    return (
        <>
         <Path
        setPage={setPage}
        data={[
          { name: "Home", path: "home" },
          { name: "Payment Sucess", path: "success" },
        ]}
      />
         <Payment setPage={setPage}/>
        </>
    )
}

export default PaymentSucesss