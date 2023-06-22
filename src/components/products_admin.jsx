import { useEffect, useState } from 'react'
import '../css/prod_admin.css'
import Products from './prod_admin'
import load_products from '../libs/load_product'

function ProductsAdmin(){
    let [data, setData] = useState([])
    
    useEffect(()=>{
        load_products('all',(err,res)=>{
            if(err) return  alert('error loading products')
            setData(res)
            console.log(res , 'fuck you')
        })
    },[])

    return(
        <div className="top-mr">
            <p className='title1'>Products in inventory</p><hr /><br />
            <Products data={data} />
        </div>
    )
}

export default ProductsAdmin