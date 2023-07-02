import { useEffect } from 'react'
import '../css/sizes.css'
import arrayToObject from '../libs/arraytoObj_sizebased'

function Sizes({data,setSize,setOutOfStock,setViewStatus}){
let sized = data.sizes
    useEffect(()=>{
       if(sized.length){
        console.log(sized)
         let sis =  parseInt(arrayToObject(sized)[sized[0].size].qty)
        ///alert(typeof sis)
        if(sis === 0){
            setOutOfStock(true)
        }else{
            setOutOfStock(false)
        }
        
       }else{
        setOutOfStock(true)
    }
       
    },[data])

    

    

    let manageClicked = (e)=>{
        let size = e.target.innerHTML
        setSize && setSize(size)
        e.target.classList.add('active8')
        console.log(document.getElementsByName('fave'),'hrlo')
        document.getElementsByName('fave').forEach(el=>{
            console.log(el,'e')
            if(el.innerHTML === size){
                return
            }
            el.classList.remove('active8')
        })
        let sis =  parseInt(arrayToObject(sized)[size].qty)
        ///alert(typeof sis)
        if(sis === 0){
            setOutOfStock(true)
        }else{
            setOutOfStock(false)
        }
        
    }
    return (
        <> <p className='reeky'> sizes</p> 
        <small onClick={()=>setViewStatus('flex')} style={{
            textDecoration:'underline',
            marginBottom:'10px'
          }}>Checkout our size chart</small>
        <div className='sizes1'>
            {
                sized && sized.map((sizes,i)=>{
                  return  <div id={'size' + i} name="fave" onClick={(e)=>manageClicked(e)} className={"size1 "+(sizes.index==0?'active8':'')}>{sizes.size}</div>
                })
            }
           
        </div>
        </>
        
    )
}

export default Sizes