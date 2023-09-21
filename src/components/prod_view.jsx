import { useState } from "react";
import Products from "./prod_admin";
import '../css/prod_view.css'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function ProductView({ data_ }) {
  let [data, setData] = useState(data_);
  let [view, setView] = useState(false);
  let [icon , setIcon] =  useState(false)
  return (
    <div>
        <div className="tile_">
            <div className="info_">
               <p>{data_.length?data_[0].name:'unknown'}</p>
               <p>{data_.length?(data_[0].description.slice(1,70)+ '...'):'unknown'}</p>
            </div>
            {
            !icon &&<div className="eye">
                <AiFillEye onClick={()=>{
                    setView(!view)
                    setIcon(!icon)
                }} />
            </div>
            }
            
            {icon && <div className="eye">
                <AiFillEyeInvisible onClick={()=>{
                    setView(!view)
                    setIcon(!icon)
                }} />
            </div>}
        </div>
        <hr />
      <Products view={view ? "block" : "none"} data={data_} />
    </div>
  );
}

export default ProductView;
