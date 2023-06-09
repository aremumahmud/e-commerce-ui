import { useEffect, useState } from "react";
import "../css/delivery.css";
import axios from 'axios'
//import * as countryjs from 'countryjs'

function Delivery({valid,pace,setPace}) {
 // let Country;
  //console.log( countryjs.all().map(country => country.name.common))
let [ options1,setoptions] = useState([])
// useEffect(()=>{
//   Country && setoptions(Country.all().map(country => ({name:country.name.common})))
// },[])
axios.get('https://restcountries.com/v3.1/all')
.then(function(response) {
  const countryNames = response.data.map(country => ({ name: country.name.common }));
  const sortedCountryNames = countryNames.sort((a, b) => a.name.localeCompare(b.name));
    
    //console.log(countryNames)
    setoptions(sortedCountryNames)

    // console.log(options)
})
  
  return ( 
    <div className="delivery" style={{
      display : pace === 0? "block" : 'none'
    }}>
      <p className="topic nn">Delivery Information</p>
      <form id='form2134' className="delivery_form" action="">
        <div className="wrapInput">
          <p>First name<sup>*</sup></p> 
          <input onChange={valid} type="text" name="first_name" id="" placeholder="Type Here ..." />
        </div>

        <div className="wrapInput">
          <p> Last name<sup>*</sup></p>
          <input onChange={valid} type="text" name="last_name" id="" placeholder="Type Here ..."  />
        </div>

        <div className="wrapInput long">
          <p>Shipping Address<sup>*</sup></p> 
          <input onChange={valid} type="text" name="address" id="" placeholder="Type Here ..."  />
        </div>
        <div className="wrapInput long">
          <p>Country<sup>*</sup></p> 
          <select onChange={valid} type="text" name="country" id="" >
            <option value="">Choose country</option>
            <option value="Nigeria">Nigeria</option>
           {
            options1.map(x=> <option value={x.name}>{x.name}</option>)
           }
          </select>
        </div>
        <div className="wrapInput">
          <p>City/Town<sup>*</sup></p> 
          <input onChange={valid} type="text" name="city" id="" placeholder="Type Here ..." />
        </div>

        <div className="wrapInput">
          <p> Zip Code</p>
          <input onChange={valid} type="text" name="zip_code" id="" placeholder="Type Here ..."  />
        </div>

        <div className="wrapInput">
          <p> Mobile<sup>*</sup></p>
          <input onChange={valid} type="text" name="phone_number" id="" placeholder="Type Here ..." />
        </div>

        <div className="wrapInput">
            <p>Email<sup>*</sup></p>
          <input onChange={valid} type="text" name="email_address" id="" placeholder="Type Here ..." />
        </div>
      </form>
      {/* <div className="btn" onClick={()=>setPace(1)}> <p className="next">Next -&gt;</p></div>
       */}
     
    </div>
  );
}

export default Delivery;
