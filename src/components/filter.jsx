import { AiFillStar } from "react-icons/ai";
import "../css/filter.css";

function Filter() {
  return (
    <div className="filters">
      <div className="filter">
        <ul>
          <li className="ml-none">
            <select name="" id="">
                <option value="">Cap Type</option>
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
          <li>
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