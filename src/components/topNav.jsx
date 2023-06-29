import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import '../css/topnav.css'

function TopNav({cart,setPage,search}){
    return (
        <div className="wrap">
          <div className="topNav">
          <a href='/home' class="logo">
            {/* <p>Glitz<span>abellelabel</span></p> */}
            <img src="\imgs\67957883-348A-45E4-BD1E-E956B290647F~2.jpg" alt="" />
        </a>
            <div className="navigations">
                {/* <ul>
                    <li>
                        <select name="" id="">
                            <option value="">Categories</option>
                        </select>
                    </li>
                    <li>Deals</li>
                    <li>What's More</li>
                    <li>Delivery</li>
                </ul> */}
            </div>
            <div className="search">
                <input onChange={e=>search(e.target.value)} type="text" placeholder='Search product' />
                <div className="icon">
                    <AiOutlineSearch />
                </div>
            </div>
            <div className="usersection">
              <p onClick={()=>{
                if( localStorage.getItem('TokenID')){
                  return setPage('dash')
                }
                let a = window.confirm('Sorry you would have to sign in to access the dashboard \n Sign you up?')
                return a?setPage('users/signup'):''
                }}>
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