import { AiFillStar, AiOutlineSearch } from "react-icons/ai";
import "../css/filter.css";

function Filter({setFilter , setLoad,categories, search}) {

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
                {/* <option value="caps-W-flower">caps with flower</option> */}
                {
                  categories && categories.map(x=>{
                    return <option value={x}>{x} 
                    </option>;
                  })
                }
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
      <input onChange={e=>search(e.target.value)} type="text" name="" id="" placeholder="Search for a product"/>
      <div className="btn">
        <AiOutlineSearch size={20} />
      </div>
      </div>
    </div>
  );
}


export default Filter