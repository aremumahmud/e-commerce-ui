import { useEffect,useState } from "react";
import "../css/main.css";
import AboutProduct from "./aboutProduct";
import AddProducts from "./addProducts";
import Cart from "./cart";
import Checkout from "./checkout";
import Footer from "./footer";
import Home from "./home";
import ProductsAdmin from "./products_admin";
import TopNav from "./topNav";
import load_products from "../libs/load_product";
import PaymentSucesss from "./payment_success";
import Dashboard from "./dashboard";
//import Modal from "./modal";
import ViewModal from "./view";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "./modal";


function Main({

  cart,
  setCart,
  page,
  setPage1,
  cart_no,
  removeFromCart,
  addFromCart,
  cleanCart

}) {
  let [product , setProduct] = useState({})
  let navigate = useNavigate()
  let setPage = (x ,bool=true)=>{
    if(x && x !==''){
      bool && localStorage.setItem('page', x)
     return navigate('/'+x)
     // props.history.push('/foo')

    }
  }
  let [data, setData] = useState([{},{},{},{}])
  let [load, setLoad] = useState(true)
  const { paged } = useParams()
 setPage1(paged||'home')
  
 let [ViewData , setViewData] = useState({})
 let [ViewStatus , setViewStatus] = useState('none')
 let [ViewStatus1 , setViewStatus1] = useState('none')

  useEffect(()=>{
    load &&
      load_products((err,res)=>{
        console.log(res , 'lk')
        console.log(err,',lhjgz,mb')
          if(err) return  setViewStatus1('flex')
          setLoad(false)
          res.length && setData(res)
      })
  },[])
  
  return (<>
   <input type="hidden" onClick={()=>{
    setPage(localStorage.getItem('page') || 'home')
  }} />
    <Modal display={ViewStatus1} />
    <ViewModal data={ViewData} display={ViewStatus} setViewStatus={setViewStatus} />
   <div className="container">
      
     <div className="coverIt"></div> 
      {
        page !== 'addP' && <div className="cont"><TopNav cart={cart_no} setPage={setPage}/></div> 
      }
      
     
      {
        page === 'home' && <Home data={data} setProduct={setProduct} setPage={setPage} setCart={setCart} cart={cart}/>
      }

      {
        page === 'product' && <AboutProduct productData={data} product={product} setPage={setPage} setCart={setCart}  />
      }

      {
        page === 'checkout' && <Checkout cart={cart} setPage={setPage} />
      }
      
      {
        page === 'cart' && <Cart addFromCart={addFromCart} removeFromCart={removeFromCart} setPage={setPage} data={cart}/>
      }

      {
        page === 'addP' && <AddProducts />
      }
      { 
        page === 'prod_admin' && <ProductsAdmin />
      }
      {
        page === 'success' && <PaymentSucesss cleanCart={cleanCart} setPage={setPage} />
      }
      {
       page==='dash' && <Dashboard setPage={setPage} setViewStatus={setViewStatus} setViewData={setViewData} />
      }
       {
        page !== 'login' && <Footer />
      }
      
    </div>
  </>
    
  ); 
}

export default Main;
