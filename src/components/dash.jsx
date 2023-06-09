import { AiOutlineEye, AiOutlinePayCircle, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import '../css/dashboard.css'
import Tile from './tile'

function Dash({orders ,setViewStatus , setViewData , loader,refresh}){
    return(
        <div class="split_me1">
    {/* <div class="one_1">
        <div class="nav">
            <ul>
                <li><AiOutlineUser className='icony' /></li>
                <li><AiOutlineShoppingCart  className='icony'  /></li>
                <li><AiOutlinePayCircle className='icony'  /></li>
            </ul>
        </div>
    </div> */}
    <div class="one_2">
        <p class="header11">Orders</p>
        {
            loader && <div className='loadings'>
                <div className="loader d"></div>
            </div>
        }{
            loader === false && orders.length === 0 && !refresh && <div className='loadings'>
            <div className="nony">No orders yet</div>
        </div>
        }{
            refresh && <div className='loadings'>
            <div className="nony h">Please refresh this page or check your internet connection</div>
        </div>
        }
       {
        orders.map(x=><Tile setViewStatus={setViewStatus} setViewData={setViewData} data={x} />)
       }
    </div>
    <div class="location">
    {/* <div className="center">
         <!-- <p class="topic_me">Click on an order to reveal its location</p> -->
        <p><span class="topic_me">Location: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sunt quasi, repellat nulla assumenda voluptatem, exercitationem temporibus magnam, modi iste qui rem nam dolorum ea animi aliquid minima
            adipisci explicabo.
        </p>
    </div> */}
       
    </div>
</div>
    )
}

export default Dash