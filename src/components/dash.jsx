import { AiOutlineEye, AiOutlineLogout, AiOutlinePayCircle, AiOutlineSetting, AiOutlineShoppingCart, AiOutlineUser, AiOutlineWarning } from 'react-icons/ai'
import '../css/dashboard.css'
import Tile from './tile'
import { useState } from 'react'

function Dash({orders ,setViewStatus , setViewData , loader,refresh}){

    let [page , setPage] = useState(true)
    return(
        <div class="split_me1" style={{
            display:'flex'
        }}>
    <div class="one_1">
        <div class="nav">
            <ul>
                <li onClick={()=>setPage(true)} ><AiOutlineUser className='icony' /></li>
                <li onClick={()=>setPage(false)}><AiOutlineSetting  className='icony'  /></li>
                {/* <li><AiOutlinePayCircle className='icony'  /></li> */}
            </ul>
        </div>
    </div>{
        page ? <div class="one_2">
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
    </div>: <div class="one_2">
    <p class="header11">User Actions</p>
    <p style={{
        padding:'10px'
        ,color:' #004225',
        border:'1px solid  #004225',
        width:'fit-content',
        borderRadius:'10px',
        marginBottom:'10px'
    }}> <AiOutlineLogout /> Log out</p>
    <p style={{
        padding:'10px'
        ,color:'red',
        border:'1px solid red',
        width:'fit-content',
        borderRadius:'10px'
    }}><AiOutlineWarning /> Deactivate your Account</p>
    </div>
    }
    
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