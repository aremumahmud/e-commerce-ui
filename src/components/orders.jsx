import { useEffect, useState } from 'react'
import '../css/exchange.css'
import Tab from './tab'
import fetch_exchange from '../libs/currencies'
import modify_exchange from '../libs/modify_exchange'
import fetch_all_orders from '../libs/fetch_all_orders'

function Orders({setPage}){
    let [data , setData] = useState([])
    let [load , setLoad] = useState(false)
    useEffect(()=>{
        fetch_all_orders( (err,res)=>{
            console.log(err)
            setLoad(false)
        if(err) return alert('Sorry an unexpected error occured!')
            let dt = JSON.parse(res)
          //  console.log(dt)
            if(dt.authorized == 'none') {
              alert('Please sign up as admin to carry out this operation')
              return window.open('/users/login','_self')
            }
            
            if(!dt.success) return alert('Sorry an unexpected error occured!')
            setData(dt.orders)
           // alert('exchange updated successfully')
          })
      },[])
    return (
        <div >
            <br /><br /><br /><br /><br /><br />
      <Tab style={{
        no:'6'
      }} setPage={setPage}/>
           <hr />
           <br />
           <h3>Orders</h3><hr />{
            data && data.reverse().map(x=><div className="card-order">
                    <p> Order no: #{x.orderId}</p>
                    <p><a href={"https://e-commerce-api.aremzy.repl.co/v1/api/fetch_order_view?id=" + x.orderId} >View Order</a> </p>
               </div>)
           }
               
        </div>
    )
}


export default Orders
