import { useEffect, useState } from 'react'
import '../css/prod_admin.css'
import Products from './prod_admin'
import  { load_products_raw } from '../libs/load_product'
import Tab from './tab'
import ProductView from './prod_view'

function ProductsAdmin({setPage}){
    let [data, setData] = useState([])
    
    useEffect(()=>{
        load_products_raw('all',(err,res)=>{
            if(err) return  alert('error loading products')
            setData(res)
            console.log(data)

        })
    },[])

    return(
        <div>
            <br /><br /><br /><br /><br /><br /><br />
      <Tab style={{
        no:'2'
      }} setPage={setPage}/>
           <hr /><br />
           {
            data.reverse().map(data_=>{
                return <ProductView data_={data_} /> 
            })
           }
            {/* <Products data={data.reverse()} /> */}
        </div>
    )
}

export default ProductsAdmin