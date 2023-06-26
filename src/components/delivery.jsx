import "../css/delivery.css";

function Delivery({valid,pace,setPace}) {
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
