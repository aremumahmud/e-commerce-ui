import { AiFillStar } from "react-icons/ai";
import "../css/filter.css";

function Filter({setFilter , setLoad}) {

  let change = e=>{
    var select = e.target;
    var value = select.options[select.selectedIndex].value;
    setLoad(true)
    setFilter(value)
  }
  return (
    <div className="filters">
      <div className="filter">
        <ul>
          <li className="ml-none">
            <select name="" id="" onChange={change}>
                <option value="all">All</option>
                <option value="caps-W-flower">caps with flower</option>
            </select>
          </li>
          <li  className="nonee">
          <select name="" id="">
                <option value="">Price</option>
            </select>
          </li>
          <li className="nonee">
          <select name="" id="">
                <option value="">Review</option>
            </select>
          </li>
          <li  className="nonee">
          <select name="" id="">
                <option value="">Color</option>
            </select>
          </li>
          <li  className="nonee">
          <select name="" id="">
                <option value="">Material</option>
            </select>
          </li>
          <li  className="nonee">
          <select name="" id="">
                <option value="">Offer</option>
            </select>
          </li>
          <li  className="nonee">
            All Filters
            <AiFillStar />
          </li>
        </ul>
      </div>
      <div className="sortby">
      <select name="" id="">
                <option value="">Sort By</option>
            </select>
      </div>
    </div>
  );
}


export default Filter