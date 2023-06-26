import { useEffect, useState } from 'react'
import Path from './path'
import create_discount from '../libs/create_discount'
import Tab from './tab'

function Discounts({setPage}){
    let [value, setValue] = useState(0)
    let [valuesReturned , setValueReturned] = useState(null)
    
    // useEffect(()=>{
       
    // },[])
    let getDiscCode = ()=>{
        create_discount(parseInt(value) , (err,res)=>{
            if(err){
                return alert('an unexpected error occurred ')
            }
            let dt = JSON.parse(res)
            console.log(dt)
            if(dt.authorized == 'none') {
              alert('Please sign up as admin to carry out this operation')
              return window.open('/users/login','_self')
            }
            
            if(!dt._doc) return alert('Sorry an unexpected error occured!')
            setValueReturned(dt._doc.discount_code)
           // alert(valuesReturned)
        })
    }



    return(
        <div style={{padding:'10px'}}>
          <br /><br /><br /><br /><br />
      <Tab style={{
        no:'3'
      }} setPage={setPage}/>
           <hr /><br />
            <div className='size_choose'>
                
                <input style={{
                    width:'69%'
                }} className="simple_input partition" onChange={(e)=>{
                    setValue(e.target.value)
                }}  type="number" name="" id="" placeholder='enter a value' /> <button style={{
                    width:'30%'
                }} className='button' onClick={getDiscCode}>create discount</button>

                
                 
                </div>
                {
                    valuesReturned ?<p>Generated Discount Code : {valuesReturned}</p>:''
                }
                
        </div>
    )
}

export default Discounts
