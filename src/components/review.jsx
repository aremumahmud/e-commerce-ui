import { useState } from 'react'
import '../css/review.css'

function Review({cart}){
    let [data , setData] = useState(Object.keys(cart).map(x=>cart[x]))
    let [index , setIndex] = useState(0)
    return (
        <div className="review">
            <p className="topic">Review Item And Shipping <span className='left'>{index+1} of {data.length}</span></p>
            <div className="items">
                <div className="item_img">
                    <img
                    src={data[index].image}
                    alt="" 
                />
                </div>
                <div className="info">
                    <p>{data[index].name}</p>
                    <p>Price: N{data[index].price}</p>
                    <p>Quantity: {data[index].quantity_for_cart}</p>
                </div>
                <div className="wrapNext">
                    <p></p>
                    <div className="nextItem" onClick={()=>setIndex((data.length-1) === index?0:++index)}>&gt;</div>
                </div>
                
            </div>
        </div>
    )
}

export default Review