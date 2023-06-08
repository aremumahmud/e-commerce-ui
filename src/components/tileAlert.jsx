import { AiOutlineEye } from 'react-icons/ai'

function TileAlert({data}){
    return (
        <div class="tile align">
        <div class="p1">
            <p class="topic_me">{data.name}</p>
            <p class="sub_me">price: {data.price}</p>
        </div>
        <div class="p2">
            {/* <p class="topic_me"><AiOutlineEye fontWeight={900} /></p>
            <p class="sub_me">view order info</p> */}
             <div className="y23">
        <img src={data.image} alt="" />
        </div>
        </div>
      </div>
    )
}

export default TileAlert