import { useEffect, useState } from 'react'
import '../css/prod_admin.css'
import Products from './prod_admin'
import load_products from '../libs/load_product'
import Path from './path'
import Tab from './tab'

function ProductsAdmin({setPage}){
    let [data, setData] = useState([])
    
    useEffect(()=>{
        load_products('all',(err,res)=>{
            if(err) return  alert('error loading products')
            setData(res)
            console.log(res , 'fuck you')
        })
    },[])

    return(
        <div>
            <br /><br /><br /><br /><br />
      <Tab style={{
        no:'2'
      }} setPage={setPage}/>
           <hr /><br />
            <Products data={data} />
        </div>
    )
}

export default ProductsAdmin