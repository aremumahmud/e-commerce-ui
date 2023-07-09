import { AiOutlineDatabase, AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'
import '../css/addproducts.css'
import  handle_file_change from '../libs/load_image'
import { useState, useSyncExternalStore } from 'react'
import validate from '../libs/validate'
import generateProductStructure from '../libs/restructure'
import send_product from '../libs/send_product'


//function
function AddProducts (){
    let [load , setLoad] = useState(false)

let style1 = {
    fontSize: '200px',
    color: '#201a1a'
    
}
let getDoc = (x) => document.getElementById(x)
// a function to click an element if one element is being clicked
let placeholder = (x,y) => {
    getDoc(x).onclick = ()=>{
        getDoc(y).click()
    }
}
//define states of the pics
let submit_form = ()=>{
let valid = validate(('1,2,3,4,9').split(','))


    if(valid.length>0){
        return alert('fill all required spaces')
    }
  // console.log()
   //form one data

   let formData = new FormData(getDoc('form'))
   let json = Object.fromEntries(formData.entries())

   //form 2 quantity data
   let formData2 = new FormData(getDoc('form3'))
   let json2 = Object.fromEntries(formData2.entries())
   //varieties object
   let varieties = [{
     image: json.v1,
     inventory: json2.q1

   },{
    image: json.v2,
    inventory: json2.q2

  },{
    image: json.v3,
    inventory: json2.q3

  },{
    image: json.v4, 
    inventory: json2.q4

  }]

   let body = generateProductStructure(json,varieties)
   send_product('form3',body,(err,res)=>{
    res = JSON.parse(res)
      if(err || res.error){
        setLoad(false)
        alert(res.message || 'error uploading products')
      }else{ 
        setLoad(false)
        alert('uploaded products successfully')
        window.open('/addP' , '_self')
      }
   })
}


//pics

    let [one,setOne] = useState(false)
    let [two,setTwo] = useState(false)
    let [three,setThree] = useState(false)
    let [four, setFour] = useState(false)

    //edits
    let [one1,setOne1] = useState(false)
    let [two1,setTwo1] = useState(false)
    let [three1,setThree1] = useState(false)
    let [four1,setFour1] = useState(false)


    //pic url
    let [one2,setOne2] = useState('')
    let [two2,setTwo2] = useState('')
    let [three2,setThree2] = useState('')
    let [four2,setFour2] = useState('')

    return (
        <div id='form1' action='/'>
        <div className="AddProducts">
            <p className="title">Add products</p>
            <div className="productInfo0">
                <p className='title1'>Product Info</p><hr />
                <br />
                <form id='form2'>
                    <input type="text" placeholder='product name' name='product_name' id='1'/><br />
                    <input type="text" placeholder='proucts description' name='product_description' id='2'/><br />
                    <input type="number" placeholder='product price' name='product_price' id='3'/><br />
                    <input type="number" placeholder='product discount' name='product_discount' id='4'/>
                    <input type="text" placeholder='category' name='category' id='9' onChange={(e)=>{
                        let val = e.target.value
                        e.target.value = val.trim()
                    }}/>
                    <input type="hidden" name="v1" value={one2} id='5'/>
                    <input type="hidden" name="v2" value={two2} id='6'/>
                    <input type="hidden" name="v3" value={three2} id='7'/>
                    <input type="hidden" name="v4" value={four2} id='8'/>
                </form>
            </div>
            <br />
            <p className='title1'>Product variations (up to 4)</p><hr />
            <br />
            <div className="variations">
                <form className="variation" onClick={()=>placeholder('v1','f1')} id='v1'>
                    {
                        !one ?
                        <>
                            <input type="file" onChange={(e)=>handle_file_change(e,'v1',setOne,setOne1,setOne2)} name="picture" id="f1" />
                            <AiOutlinePlus style={style1} />
                            <p>Add a variation</p>
                        </>: <div className="actions">
                            {
                                !one1 ?
                                <div className="loader"></div>:<AiOutlineDelete onClick={()=>{setOne1(false);setOne(false);getDoc('v1').style.background=''}} className='delete' />
                            }
                              
                            </div>
                        
                    }
                   
                </form>
                <form className="variation" onClick={()=>placeholder('v2','f2')} id='v2'>
                    {
                        !two ?
                        <>
                            <input type="file" onChange={(e)=>handle_file_change(e,'v2',setTwo,setTwo1,setTwo2)}  name="picture" id="f2" />
                            <AiOutlinePlus style={style1} />
                            <p>Add a variation</p>
                        </>: <div className="actions">
                        {
                                !two1 ?
                                <div className="loader"></div>:<AiOutlineDelete onClick={()=>{setTwo1(false);setTwo(false);getDoc('v2').style.background=''}} className='delete' />
                            }
                            </div>
                    }
                    
                </form>
                <form className="variation" onClick={()=>placeholder('v3','f3')} id='v3'>
                    {
                        !three ?
                        <>
                            <input type="file" onChange={(e)=>handle_file_change(e,'v3',setThree,setThree1,setThree2)}  name="picture" id="f3" />
                            <AiOutlinePlus style={style1}  />
                            <p>Add a variation</p>
                        </>: <div className="actions">
                        {
                                !three1 ?
                                <div className="loader"></div>:<AiOutlineDelete onClick={()=>{setThree1(false);setThree(false);getDoc('v3').style.background=''}} className='delete' />
                            }
                            </div>
                    }
                   
                  
                </form>
                <form className="variation" onClick={()=>placeholder('v4','f4')} id='v4'>
                   
                    {
                        !four ?
                        <>
                            <input onChange={(e)=>handle_file_change(e,'v4',setFour,setFour1,setFour2)} type="file"  name="picture" id="f4" />
                            <AiOutlinePlus style={style1} />
                            <p>Add a variation</p>
                        </>: <div className="actions">
                        {
                                !four1 ?
                                <div className="loader"></div>:<AiOutlineDelete onClick={()=>{setFour1(false);setFour(false);getDoc('v4').style.background=''}} className='delete' />
                            }
                            </div>
                    }
                    
                </form>
                <form id='form3' className='variations1' action="">
                    <div className='quantity'>
                    <div className='icon'>
                        <AiOutlineDatabase style={{fontSize:'30px'}} />
                    </div>
                    
                    <input min={1} type="number" name="q1" id="" placeholder='Quantity of inventory' />
                </div>
                <div className='quantity'>
                    <div className='icon'>
                        <AiOutlineDatabase style={{fontSize:'30px'}} />
                    </div>
                    
                    <input min={1} type="number" name="q2" id="" placeholder='Quantity of inventory' />
                </div>
                <div className='quantity'>
                    <div className='icon'>
                        <AiOutlineDatabase style={{fontSize:'30px'}} />
                    </div>
                    
                    <input min={1} type="number" name="q3" id="" placeholder='Quantity of inventory' />
                </div>
                <div className='quantity'>
                    <div className='icon'>
                        <AiOutlineDatabase style={{fontSize:'30px'}} />
                    </div>
                    
                    <input min={1} type="number" name="q4" id="" placeholder='Quantity of inventory' />
                </div>
                </form>
                
            </div>
            {/**
             * @pot button
             */}
            <div className="out">
                <div className="btn" style={{
                    display:'flex',
                    justifyContent:'center'
                }} onClick={()=>{setLoad(true);submit_form()}}>
                    {
                         load ?<div className="loader"></div>:' Add product to inventory'
                    }
                   
                
                </div>
            </div>
            <br /><br />
        </div>
    </div>
    )
}

export default AddProducts