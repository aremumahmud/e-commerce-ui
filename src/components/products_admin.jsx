import { useEffect, useState } from 'react'
import '../css/prod_admin.css'
import Products from './prod_admin'
import load_products from '../libs/load_product'
import Path from './path'

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
            <Path
        setPage={setPage}
        data={[
          { name: "Home", path: "addP" },
          { name: "edit products", path: "prod_admin" },
          {name:'discount' , path:'discount'}
        ]
        
    }
    style={{
        paddingTop:'0 !important' 
    }}
      />
            <p className='title1'>Products in inventory</p><hr /><br />
            <Products data={data} />
        </div>
    )
}

export default ProductsAdmin