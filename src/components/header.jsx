import "../css/header.css";
import "../css/header_resp.css"
import { AiOutlinePhone } from "react-icons/ai";
function Header() {
  return (
    <div className="header">
      <div className="contact">
        <AiOutlinePhone />
        +2347064552617
      </div>
      <div className="promo">
        <p>Get 50% Off on Selected Items</p>
        <p>|</p>
        <p>Shop Now</p>
      </div>
      <div className="others">
        <select name="" id="">
            <option value="">Eng</option>
        </select>
        <select name="" id="">
            <option value="">Location</option>
        </select>
      </div>
      
    </div>
  );
}

export default Header;
