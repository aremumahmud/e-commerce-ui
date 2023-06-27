import { useEffect, useState } from 'react'
import '../css/exchange.css'
import Tab from './tab'
import fetch_exchange from '../libs/currencies'
import modify_exchange from '../libs/modify_exchange'

function Exchange({setPage}){
    let [data , setData] = useState({})
    let [load , setLoad] = useState(false)
    useEffect(()=>{
        fetch_exchange((err,res)=>{
          if(err) return
          if(!res.success) return
          let exchange = res.data
          setData(exchange.raw)
          //setSymbolTab(exchange.symbolTab)
        })
      },[])
    return (
        <div >
            <br /><br /><br /><br /><br /><br />
      <Tab style={{
        no:'4'
      }} setPage={setPage}/>
           <hr />
           <br />
           {
            Object.keys(data).filter(x=>{
                if(x === 'id' || x==='_id'){
                    return false
                }
                return true
            }).map(x=>{
               return  <div className='size_choose'>
                
                <input style={{
                    width:'69%'
                }} className="simple_input partition" onChange={(e)=>{
                    let temp = {...data}
                    temp[x] = parseInt(e.target.value)
                    setData(temp)
                    // setValue(e.target.value)
                }}  type="number" value={data[x]} name="" id="" placeholder='enter a value' /> <button style={{
                    width:'30%'
                }} className='button' >{x}</button>

                
                 
                </div>
            })
           }
           
                <div style={{
                    width:'100%',
                    textAlign:'center'
                }} className="button" onClick={()=>{
                    setLoad(true)
              modify_exchange(data , (err,res)=>{
                console.log(err)
                setLoad(false)
                //if(err) return alert('Sorry an unexpected error occured!')
                let dt = JSON.parse(res)
                console.log(dt)
                if(dt.authorized == 'none') {
                  alert('Please sign up as admin to carry out this operation')
                  return window.open('/users/login','_self')
                }
                
                if(!dt.sucess) return alert('Sorry an unexpected error occured!')
                alert('exchange updated successfully')
              })
            
                }}> {
                    load ? <div className="loader"></div>:"save changes"
                  }</div>
        </div>
    )
}


export default Exchange