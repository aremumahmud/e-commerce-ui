import { useState } from 'react'
import '../css/add_prod.css'

function AddProd(){

   let [variants , setVariants] = useState([])
   let [vari , setVari] = useState('')
   let [description , setDescription] = useState('')
   let [title , setTitle] = useState('')
   let [price , setPrice] = useState(0)
   let [inventory , setInventory] = useState(0)

   let getDoc = (x) => document.getElementById(x)
// a function to click an element if one element is being clicked
    let placeholder = (x,y) => {
        getDoc(x).onclick = ()=>{
            getDoc(y).click()
        }
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
            </label>
            <br />
            <label htmlFor="">
               <p> Media</p>
                <div className="images">
                    <div className="image" id='image1'>
                        upload images
                        <input type="file" className='nonee' id='file1'/>
                    </div>
                    <div className="image" id='image2'>
                    upload images
                    <input type="file" className='nonee'  id='file2'/>
                    </div>
                    <div className="image" id='image3'>
                    <input type="file" className='nonee'  id='file3'/>
                    upload images
                    </div>
                    <div className="image" id='image4'>
                    <input type="file" className='nonee'  id='file4'/>
                    upload images
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
            
            <button className='submit_this'>Add product</button>
        </form>
        
       <br />
        </>
    )
}

export default AddProd