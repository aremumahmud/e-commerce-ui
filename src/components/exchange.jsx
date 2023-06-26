import { useState } from 'react'
import '../css/exchange.css'
import Tab from './tab'

function Exchange({setPage}){
    let [data , setData] = useState([])
    return (
        <div>
            <br /><br /><br /><br /><br /><br />
      <Tab style={{
        no:'4'
      }} setPage={setPage}/>
           <hr />
           <br />
           {
            ['USD','GBP','EUR','NGN'].map(x=>{
               return  <div className='size_choose'>
                
                <input style={{
                    width:'69%'
                }} className="simple_input partition" onChange={(e)=>{
                    // setValue(e.target.value)
                }}  type="number" name="" id="" placeholder='enter a value' /> <button style={{
                    width:'30%'
                }} className='button' >{x}</button>

                
                 
                </div>
            })
           }
           
                <div className="button">save changes</div>
        </div>
    )
}


export default Exchange