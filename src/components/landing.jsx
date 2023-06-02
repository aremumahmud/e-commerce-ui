import { useState ,useEffect} from "react";
import {Routes , Route,BrowserRouter, useNavigate } from 'react-router-dom'
import config from "../config/config";

//components
import Header from "./header";
import Main from "./main";
import Login from "./login";
import Authenticate from '../libs/authenticate'

function Landing(props) {
  let [cart, setcart] = useState({});
  let [focus, setFocus] = useState({});
  let [page, setpage1] = useState("home");
  let [cart_no , setCartno] = useState(0)

  let getDoc = (x) => document.getElementById(x)

  let setCart = (x,n,qty) => {

  //first we clone the cart state
  let v_cart = {...cart}
   //console.log(qty)
  //then we check if the produv=ct is already present in the cart
  if(v_cart[x[0]._id]){
    //if so we assign the current cart value to a variable
    let curr_qty =  v_cart[x[0]._id].quantity_for_cart
    
    // then we check if the current quantity is equal to the quantity or product inventory
    //or the increment of the cart qty is greater than the product inventory

    if(qty < (curr_qty + (n?n:1))){
       return alert('cannot add empty product')
    }
  }
  
  console.log(x[0]._id)

  //then if the cart object for the present is not available
  if(!v_cart[x[0]._id]){
    //then create a reference in the cart object
    v_cart[x[0]._id] = x[0]
    //and add a quantity object
    v_cart[x[0]._id].quantity = qty
    v_cart[x[0]._id].quantity_for_cart = n?n:1
  }else{
    //else we just add to the existing reference
    v_cart[x[0]._id].quantity_for_cart += n?n:1
  }
  
   //console.log(v_cart)
    setcart(v_cart);
    setCartno(n?(n+cart_no):++cart_no)
     //console.log(cart)
  };

  let removeFromCart = (id) => {

    //first we clone the cart state
    let v_cart = {...cart}
  
    //then if the cart object for the present is not available
    if(!v_cart[id]){
      return
    }else{
      //we check if the quantity is 1 if so we return
      if(v_cart[id].quantity_for_cart === 1) return 
      
      //else we just add to the existing reference
      v_cart[id].quantity_for_cart -= 1
    }
    
     //console.log(v_cart)
      setcart(v_cart);
      setCartno(--cart_no)
       //console.log(cart)
    };

    let addFromCart = (id,qty) => {

      //first we clone the cart state
      let v_cart = {...cart}
    //then we check if the produv=ct is already present in the cart
      if(v_cart[id]){
        //if so we assign the current cart value to a variable
        let curr_qty =  v_cart[id].quantity_for_cart
        
        // then we check if the current quantity is equal to the quantity or product inventory
        //or the increment of the cart qty is greater than the product inventory

        if(qty < (curr_qty + 1)){
          return alert('cannot add empty product')
        }
      }
      //then if the cart object for the present is not available
      if(!v_cart[id]){
        return
      }else{
        //else we just add to the existing reference
        v_cart[id].quantity_for_cart += 1
      }
      
       //console.log(v_cart)
        setcart(v_cart);
        setCartno(++cart_no)
         //console.log(cart)
      };

      

  let [isAuthenticated , authenticate] = useState(localStorage.getItem('auth')?true:false)
  let [action , setAction] = useState(config.loginURI)
  let [error , setErrors] = useState(null)
  let [actionsParam , setParams] = useState(null)
  let [busy , setBusy] = useState(false)
  let [load , setLoad ] = useState(false)
  let [URIs,setURI] = useState({ 
    register: config.registerURI,
    login: config.loginURI
  }) 
   
  let setParam = (param)=>{
    setBusy(true)
    setParams(param)
  }




  useEffect(()=>{
    console.log('this run fa', load)
    load &&
    Authenticate(action,actionsParam,((err,res)=>{
        console.log(action,res)
        setBusy(false)
        if(err){
          setErrors({
            color:'red',
            msg:err.reason
          })
        }else{
          if(action === config.loginURI) {
             setErrors({
            color:'green',
            msg:'user login successful'
          });
          setBusy(false)
          //setLoad(false)
          authenticate(true)
          localStorage.setItem('auth',', sjkzn jckmnsd zjk')
           //return window.open("/"+(localStorage.getItem('page')||'home'), '_self');
          }else{
            setErrors({
              color:'green',
              msg:'user registration successful'
            });
            getDoc('login').click()
            setErrors({
              color:'green',
              msg:''
            });
          }
         
        }
    }))
  
  },[actionsParam])

 

    return (
     
       
      <BrowserRouter>
        <Routes>
          <Route path="/:paged" element={
          <>
          {
            page !=='login' && <div className="cont"> <Header /></div>
           
          }
          <Main 
          page={page} 
          setPage1={setpage1}
          cart={cart} 
          setCart={setCart} 
          focus = {focus}
          setFocus = {setFocus} 
          cart_no={cart_no}
          removeFromCart={removeFromCart}
          addFromCart={addFromCart}/>
          </>
          
        }>
          </Route>
          <Route path="/users/:page" element={<Login
          
          error={error} 
          setAction={setAction}
          URIs={URIs}
          setParams={setParams}
          busy={busy}
          setLoad={setLoad}
          setBusy={setBusy}
          />}></Route>
        </Routes>
      </BrowserRouter>
     
     
    )









  // return (
  //   <>
  //   {
  //     page !=='login' && <Header />
  //   }
  //   {
  //     page!=='login' ? <Main 

  //        page={page} 
  //        setPage={setPage} 
  //        cart={cart} 
  //        setCart={setCart} 
  //        focus = {focus}
  //        setFocus = {setFocus}
         
  //     />: <Login busy={busy} 
  //       setParams={(x)=>setParam(x)} 
  //       URIs={URIs} 
  //       error={error} 
  //       setAction={(x)=>setAction(x)} 
  //       fixAuth={(x) => this.fixAuth(x)}
  //       setLoad = {()=>setLoad(true)}/>
  //   }
      
  //   </>
  // );
}

export default Landing;
