import { useEffect, useState } from "react";
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
import getUserIP from "../libs/geolocate";
import changeCurrency from "../libs/changeCurrency";
import currencyTab, { symbolTab } from "../config/currency";
import CartModal from "./CartModalSucess";
import ForgotModal from "./forgotModal";
import search from "../libs/search_products";
import AddProd from "./add_prod";
import Discounts from "./discount";
import Exchange from "./exchange";
import fetch_exchange from "../libs/currencies";
import Policy from "./policy";
import ReturnPolicy from "./returnPolicy";
import SizeChart from "./sizechart";
import Shipment from "./shipment";
import Orders from "./orders";
import process_data from "../libs/process_product_data";
import extract_ids from "../libs/extract_ids";
import get_current_version from "../libs/getCurrentVersion";
import update_cart from "../libs/updateCart";

function Main({
  cart,
  setCart,
  page,
  setPage1,
  cart_no,
  removeFromCart,
  addFromCart,
  cleanCart,
  removeTotally,
  ViewStatus3,
  setViewStatus3,
  CartData3,
  setCartData3,
  setcart,
  setCartno,
}) {
  let [product, setProduct] = useState({});
  let navigate = useNavigate();
  let setPage = (x, bool = true) => {
    if (x && x !== "") {
      bool && localStorage.setItem("page", x);
      return navigate("/" + x);
      // props.history.push('/foo')
    }
  };

  const [symbolTab1, setSymbolTab] = useState({ ...symbolTab });
  const [currencyTab1, setCurrencyTab] = useState({ ...currencyTab });
  const [span, setSpan] = useState(0);

 
  useEffect(() => {
    fetch_exchange((err, res) => {
      if (err) return setSpan((prevSpan) => prevSpan + 1);
      if (!res.success) return setSpan((prevSpan) => prevSpan + 1);
      let exchange = res.data;

      setCurrencyTab({ ...exchange.currencyTab });
      setSymbolTab({ ...exchange.symbolTab });
    });
  }, []);

  // Use symbolTab1 and currencyTab1 directly in the component or use another useEffect to observe changes

  let [data, setData] = useState([{}, {}, {}, {}]);
  let [load, setLoad] = useState(true);
  let [load1, setLoad1] = useState(true);
  let [currency, setCurrency] = useState("₦");
  const { paged } = useParams();
  setPage1(paged || "home");
 
  // if(paged === 'success'){
  //   cleanCart()
  // }

  let [trigger, setTrigger] = useState(false);
  useEffect(() => {
    try{
      //alert(paged)
    if(paged === "success") {
      //alert('hel')
       localStorage.setItem('cart','{}')
      localStorage.setItem('no',0)
      return cleanCart()
    }

    let cart = JSON.parse(localStorage.getItem("cart"));
    if (Object.keys(cart).length === 0) {
      setCartno(0);
      localStorage.setItem("no", 0);
      return;
    }
    let ids = extract_ids(cart);
    // console.log(ids,":ids",cart)
    get_current_version(ids, (err, res) => {
      if (err) {
        //do sth
        // console.log(err)
        return setTrigger(!trigger);
      }

      let updatedCart = update_cart( JSON.parse(res), JSON.parse(localStorage.getItem("cart")));
      let no = localStorage.getItem("no");
      setcart(updatedCart);
      setCartno(no);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      // console.log(err,res, 'this is ,the thing i want to see')
    });
  }catch(e){
    //alert(localStorage.getItem("cart"))
    console.log(e,'error')
    localStorage.setItem("cart", JSON.stringify({}));
    localStorage.setItem("no", 0);
  }
  }, []);



  let [ViewData, setViewData] = useState({});
  let [ViewStatus, setViewStatus] = useState("none");
  let [ViewStatus1, setViewStatus1] = useState("none");
  let [ViewStatus2, setViewStatus2] = useState("none");

  let [searchLoader, setSearchLoader] = useState(false);
  //  let [ViewStatus3 , setViewStatus3] = useState('flex')
  //  let [CartData3 , setCartData3] = useState({})
  let [filter, setFilter] = useState("all");

  let search_prod = (search_string) => {
    search(search_string || " ", (err, resp) => {
      setSearchLoader(false);
      if (!resp || !resp.length) return;

      // if(resp.length ===0 || !resp) return
      if (err) return;
      let d = resp.filter((data) => data.varieties.length);
      // console.log(d)
      //console.log(process_data({data:d}))
      //console.log('shouts yuasuf')
      setData(process_data({ data: d }));
    });
  };
  useEffect(() => {
    load &&
      load_products(filter, (err, res) => {
        //console.log(err,',lhjgz,mb')
        if (err) return setViewStatus1("flex");
        setLoad(false);
        // console.log(res,'uyhkuj')
        setData(res);
      });
  }, [filter]);
  useEffect(() => {
    if( load1 && navigator.onLine){
      getUserIP().then((res) => {
        // res = 'USD'
        let data2 = changeCurrency(data, "NGN", currencyTab1);
        // console.log(data2,'jayz')
        // console.log(isNaN(data2[0][0].price))
        if (isNaN(data2[0][0].price)) {
          return;
        }
        setData(data2[0]);

        let curr_currency= currencyTab1[res]
        setCurrency(curr_currency?curr_currency.symbol:'$');
        // setCurrency('$')
        setLoad1(false);
      }).catch(err=>{
        setLoad1(false);
      });
    }
   
      
  }, [data]);
  return (
    <>
      <input
        type="hidden"
        onClick={() => {
          setPage(localStorage.getItem("page") || "home");
        }}
      />
      {/* <ForgotModal display={ViewStatus4} close={setViewStatus4}/> */}
      <CartModal
        data={CartData3}
        display={ViewStatus3}
        setViewStatus={setViewStatus3}
      />
      <Modal display={ViewStatus1} />
      <SizeChart display={ViewStatus2} setViewStatus={setViewStatus2} />
      <ViewModal
        data={ViewData}
        display={ViewStatus}
        setViewStatus={setViewStatus}
      />
      <div className="container">
        {/* <div className="coverIt nonee"></div>  */}
        {page !== "addP" &&
          page !== "shipping_policy" &&
          page !== "return_policy" && (
            <div className="cont">
              <TopNav
                searchLoader={searchLoader}
                setSearchLoader={setSearchLoader}
                search={search_prod}
                cart={cart_no}
                setPage={setPage}
              />
            </div>
          )}

        {page === "home" && (
          <Home
            setCurrency={setCurrency}
            symbolTab={symbolTab1}
            currencyTab={currencyTab1}
            search={search_prod}
            setViewStatus3={setViewStatus3}
            setCartData3={setCartData3}
            setLoad={setLoad}
            setFilter={setFilter}
            symbol={currency}
            data={data}
            setProduct={setProduct}
            setPage={setPage}
            setCart={setCart}
            cart={cart}
            setcart={setcart}
            setCartno={setCartno}
          />
        )}

        {page === "product" && (
          <AboutProduct
            symbolTab={symbolTab1}
            currencyTab={currencyTab1}
            cart={cart}
            setProduct={setProduct}
            setViewStatus3={setViewStatus3}
            setViewStatus2={setViewStatus2}
            setCartData3={setCartData3}
            symbol={currency}
            productData={data}
            product={product}
            setPage={setPage}
            setCart={setCart}
          />
        )}

        {page === "checkout" && (
          <Checkout
            cart_no={cart_no}
            symbolTab={symbolTab1}
            currencyTab={currencyTab1}
            setCurrency={setCurrency}
            symbol={currency}
            cart={cart}
            setPage={setPage}
            setcart={setcart}
            setCartno={setCartno}
          />
        )}

        {page === "cart" && (
          <Cart
            symbolTab={symbolTab1}
            currencyTab={currencyTab1}
            removeTotally={removeTotally}
            symbol={currency}
            addFromCart={addFromCart}
            removeFromCart={removeFromCart}
            setPage={setPage}
            data={cart}
            setcart={setcart}
            setCartno={setCartno}
          />
        )}

        {page === "addP" && <AddProd setPage={setPage} />}
        {page === "prod_admin" && <ProductsAdmin setPage={setPage} />}
        {page === "success" && (
          <PaymentSucesss cleanCart={cleanCart} setPage={setPage} />
        )}
        {page === "dash" && (
          <Dashboard
            setPage={setPage}
            setViewStatus={setViewStatus}
            setViewData={setViewData}
          />
        )}
        {page === "discount" && <Discounts setPage={setPage} />}
        {page === "exchange" && <Exchange setPage={setPage} />}
        {page === "shipment" && <Shipment setPage={setPage} />}
        {page === "orders" && <Orders setPage={setPage} />}
        {page === "shipping_policy" && <Policy />}
        {page === "return_policy" && <ReturnPolicy />}
        {page !== "login" && <Footer setPage={setPage} />}
      </div>
    </>
  );
}

export default Main;
