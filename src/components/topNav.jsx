import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import '../css/topnav.css'

function TopNav({cart,setPage}){
    return (
        <div className="wrap">
          <div className="topNav">
          <div class="logo">
            <p>Glitz<span>abellelabel</span></p>
        </div>
            <div className="navigations">
                <ul>
                    <li>
                        <select name="" id="">
                            <option value="">Categories</option>
                        </select>
                    </li>
                    <li>Deals</li>
                    <li>What's More</li>
                    <li>Delivery</li>
                </ul>
            </div>
            <div className="search">
                <input type="text" placeholder='Search product' />
                <div className="icon">
                    <AiOutlineSearch />
                </div>
            </div>
            <div className="usersection">
              <p onClick={()=>setPage('dash')}>
                <AiOutlineUser style={{fontWeight:'bold'}} />
                User
              </p>
              <p onClick={()=>setPage('cart')}>
                <span className='qty'>{cart}</span>
                <AiOutlineShoppingCart  style={{fontWeight:'bold'}} />
                Cart
              </p>
            </div>
        </div>
        </div>
        
    )
}

export default TopNav