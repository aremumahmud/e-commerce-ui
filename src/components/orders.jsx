import { useEffect, useState } from 'react'
import '../css/exchange.css'
import Tab from './tab'
import fetch_all_orders from '../libs/fetch_all_orders'
import { AiOutlineSearch } from 'react-icons/ai'

function Orders({setPage}){
    let [data , setData] = useState([])
    let [data1 , setData1] = useState([])
    let [load , setLoad] = useState(false)
    useEffect(()=>{
        fetch_all_orders( (err,res)=>{
            
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
            setData1(dt.orders.reverse())
           // alert('exchange updated successfully')
          })
      },[])

      let search = e=>{
        let word = e.target.value
        if(word.length !== 4){
         setData(data1)
           return
         
        }
        for(let order in data1){
         
            if(data1[order].orderId == word){
              setData([data1[order]])
              break
            }
        }
        
      }
    return (
        <div >
            <br /><br /><br /><br /><br /><br />
      <Tab style={{
        no:'6'
      }} setPage={setPage}/>
           <hr />
           <br />
           <h3>Orders</h3><hr />
           <div className="sortby">
      <input onChange={e=>search(e)} style={{width:"90%"}} type="text" name="" id="" placeholder="Search for an order"/>
      <div className="btn">
        <AiOutlineSearch size={20} />
      </div>
      </div>
           {
            data && data.reverse().map(x=><div className="card-order">
                   <p>{new Date(x.createdAt).toString().split(' ').filter((x,i)=> i<5).join(' ')}</p>
                    <p> Order no: #{x.orderId}</p>
                    <p><a href={"https://e-commerce-api.aremzy.repl.co/v1/api/fetch_order_view?id=" + x.orderId} >View Order</a> </p>
               </div>)
           }
               
        </div>
    )
}


export default Orders
