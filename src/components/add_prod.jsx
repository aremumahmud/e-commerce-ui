import { useEffect, useState } from 'react'
import '../css/add_prod.css'
import handle_file_change from '../libs/load_image'
import { AiFillDelete } from 'react-icons/ai'
import send_product from '../libs/send_product'

function AddProd(){

   let [variants , setVariants] = useState([])
   let [vari , setVari] = useState('')
   let [description , setDescription] = useState('')
   let [title , setTitle] = useState('')
   let [price , setPrice] = useState(0)
   let [inventory , setInventory] = useState(0)
   let [category , setCategory] = useState('')

   //images
   let [image1 , setImage1] = useState('')
   let [image2 , setImage2] = useState('')
   let [image3 , setImage3] = useState('')
   let [image4 , setImage4] = useState('')

//loads 
let [done , setDone ]  = useState(false)
let [done2 , setDone2 ]  = useState(false)
let [done3, setDone3 ]  = useState(false)
let [done4, setDone4 ]  = useState(false)
let [pending , setPending ]  = useState(false)
let [pending2 , setPending2 ]  = useState(false)
let [pending3 , setPending3 ]  = useState(false)
let [pending4 , setPending4 ]  = useState(false)




   let getDoc = (x) => document.getElementById(x)
// a function to click an element if one element is being clicked
    let placeholder = (x,y) => {
        getDoc(x).onclick = ()=>{
            getDoc(y).click()
        }
    }
// useEffect(()=>{
//     console.log('hello')
//     [1,2,3,4].forEach(each=>{
//         //placeholder(`image${each}` , `file${each}`)
//     })
// },[])
    let place =()=> {
        // console.log('hello')
         
             ([1,2,3,4]).forEach(each=>{
            // console.log(each)
             placeholder(`image${each}` , `file${each}`)
         })
         
         
     }
    
     let getData = ()=>{
        return {
              product_name:title,
              image: image1,
              description,
              price,
              category,
              
              varieties:[{
                image: image1,
                parentProduct: title,
                quantity:inventory
              },{
                image: image2,
                parentProduct: title,
                quantity:inventory
              },{
                image: image3,
                parentProduct: title,
                quantity:inventory
              },{
                image: image4,
                parentProduct: title,
                quantity:inventory
              }]
        }
      

     }


     let sendProd = ()=>{
        send_product('', getData(), (err,res)=>{
            res = JSON.parse(res)
      if(err || res.error){
        //setLoad(false)
        alert(res.message || 'error uploading products')
      }else{ 
        //setLoad(false)
        alert('uploaded products successfully')
        window.open('/addP' , '_self')
      }
        })
     }
    return (
        <>
         <a href='/home' class="logo">
            {/* <p>Glitz<span>abellelabel</span></p> */}
            <img src="\imgs\67957883-348A-45E4-BD1E-E956B290647F~2.jpg" alt="" />
        </a>
        <p style={{
            marginBottom:0,
            marginLeft:'15px !important'
        }} className="topicInAdd">Add product</p>
        
        <form onLoad={()=>
            {
               // console.log('hello')
                [1,2,3,4].forEach(each=>{
                    placeholder(`image${each}` , `file${each}`)
                })
            }
        } id='form' onSubmit={(e)=>{
            e.preventDefault()
        }} action="">
            <label htmlFor="">
               <p>Title</p>  
                <input onChange={(e)=>setTitle(e.target.value)} type="text" className="simple_input" placeholder='Name or title of product' />
            </label>
            <br />
            <label htmlFor="">
               <p> Description</p>
                <textarea onChange={(e)=>setDescription(e.target.value)} name="" id="" cols="40" rows="10" placeholder='Enter product description' ></textarea>
            </label><br />
            <label htmlFor="">
               <p>Category</p>  
                <input onChange={(e)=>setCategory(e.target.value)} type="text" className="simple_input" placeholder='Name or title of product' />
            </label>
            <br />
            <label htmlFor="">
               <p> Media</p>
                <div className="images">
                    <div className="image"  id='image1'>
                        <div className="cover_me" onClick={()=>placeholder(`image${1}` , `file${1}`)}>
                        {
                                pending && <div className="loader big"></div>
                               }
                            {
                                done ? <AiFillDelete  size={20} /> : 'upload images'
                            }
                            
                        </div>
                        <form id='form1' action="">
                            <input name="picture" onChange={(e)=>handle_file_change(e , 'image1','form1',setDone,setPending,setImage1)} type="file" className='nonee' id='file1'/>
                    
                        </form>
                        </div>
                    <div className="image" onClick={()=>placeholder(`image${2}` , `file${2}`)} id='image2'>
                    <div className="cover_me">
                    {
                                pending2 && <div className="loader big"></div>
                               }
                            {
                                done2 ? <AiFillDelete  size={20} /> : 'upload images'
                            }
                            
                        </div>
                        <form id='form2' action="">
                            <input name="picture" onChange={(e)=>handle_file_change(e , 'image2','form2',setDone2,setPending2,setImage2)} type="file" className='nonee'  id='file2'/>
                    
                        </form>
                    </div>
                    <div className="image" onClick={()=>placeholder(`image${3}` , `file${3}`)} id='image3'>
                        <form id='form3' action="">
                          <input name="picture"  onChange={(e)=>handle_file_change(e , 'image3','form3',setDone3,setPending3,setImage3)} type="file" className='nonee'  id='file3'/>
                     
                        </form>
                     <div className="cover_me">
                     {
                                pending3 && <div className="loader big"></div>
                               }
                            {
                                done3 ? <AiFillDelete  size={20} /> : 'upload images'
                            }
                            
                        </div>
                    </div>
                    <div className="image" onClick={()=>placeholder(`image${4}` , `file${4}`)} id='image4'>
                        <form id='form4' action="">
                             <input name="picture"  onChange={(e)=>handle_file_change(e , 'image4' ,'form4',setDone4,setPending4,setImage4)} type="file" className='nonee'  id='file4'/>
                    
                        </form>
                   <div className="cover_me">
                            {
                                pending4 && <div className="loader big"></div>
                               }
                            {
                                  done4 ? <AiFillDelete  size={20} /> : 'upload images'
                           
                            }
                            
                        </div>
                    </div>
                </div>
            </label>
            <br />
            <p> Pricing</p>
            <label htmlFor="">
               price 
               <input  onChange={(e)=>setPrice(e.target.value)} type="text" className="simple_input" placeholder='0.00' />
            </label>
            <p>Inventory</p>
            <label htmlFor="">
                Quantity
                <input  onChange={(e)=>setInventory(e.target.value)} type="text" className="simple_input" placeholder='0' />
            </label>
            <p>Variants (size)</p>
            <div className='size_choose'>
                
            <input className="simple_input partition" onChange={(e)=>{
                setVari(e.target.value)
            }}  type="text" name="" id="" placeholder='M / L / XL' /> <button onClick={()=>{
               if(!vari || variants.length === 4) return
               setVariants([...variants,{
                index:variants.length,
                size:vari
               }])
            }} className='button'>add</button>
             
            </div>
            <div className="size_group">
                {
                    variants && variants.filter(x=>x).map(x=>{
                       return <div className="sizes">
                        <p className='size_choice'>{x.size.toUpperCase()}</p>
                        <p onClick={()=>{
                            let j = variants.filter(n=>{
                                if(n.index === x.index){
                                    return false
                                }
                                return true
                            })
                            setVariants(j)
                        }}>x</p>
                        </div>
                    })
                }
                
                {/* <div className="sizes">
                    <p className='size_choice'>X</p>
                    <p>x</p>
                </div> */}
            </div>
           
            <br />
            <p>Inventory division based on size </p>
           
            current inventory listed ({inventory||0})
            <br /> <br />
            {
                variants.map(x=><div className="divisions">
                <div className="ass_size">
                    <p>{x.size.toUpperCase()}</p>
                </div>
                <div className="ass_qty">
                    <input className='simple_input partition' type="text" name="" id="" />
                </div>
            </div> 
                    
                    )
            }
            
            <button className='submit_this' onClick={sendProd}>Add product</button>
        </form>
        
       <br />
       
        </>
    )
}

export default AddProd