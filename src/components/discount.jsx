import { useEffect, useState } from 'react'
import Path from './path'
import create_discount from '../libs/create_discount'
import Tab from './tab'
import fetch_discount from '../libs/getDiscounts'
import destroy_discount_discount from '../libs/destroy_discount'

function Discounts({setPage}){
    let [value, setValue] = useState(0)
    let [valuesReturned , setValueReturned] = useState(null)
    let [discounts, setDiscounts]= useState([])
    let [ondelete, deledte] = useState(false)
    useEffect(()=>{
       fetch_discount((err,res)=>{
        res&&setDiscounts(res.data)
       })
    },[ondelete]) 
    let getDiscCode = ()=>{
        let lifespan = window.prompt('please enter a lifespan for the discount',1)
        let remark =  window.prompt('please enter a remark for the discount',"any remark!")
        lifespan = isNaN(parseInt(lifespan)) ?0:parseInt(lifespan)
        create_discount(parseInt(value) ,parseInt(lifespan),remark, (err,res)=>{
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

                <h3>Discounts</h3>
                {
                    discounts && discounts.map(discount=><div>
                    <hr />
                    <p>usage: {discount.usage}</p>
                    <p>used: {discount.used}</p>
                    <p>value: {discount.value}%</p>
                    <p>code: {discount.discount_code}</p>
                    <p>code: {discount.remark}</p>
                    <div className="button" onClick={()=>{
                        window.confirm('Are you sure you want to destroy this discount code??') && destroy_discount_discount(discount._id,(err,res)=>{
                           
                           if(err){
                        return alert('an error ocurred while deleting the discount')
                           }
                            deledte(!ondelete)
                            console.log(res)
                            alert('successfully deleted the discount')
                        })
                    }}>Destroy</div>
                </div>)
                }
                
                
        </div>
    )
}

export default Discounts
