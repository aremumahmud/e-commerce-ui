import { AiOutlineEye } from 'react-icons/ai'

function Tile({data, setViewStatus ,setViewData}){
    return (
        <div class="tile">
        <div class="p1">
            <p class="topic_me">Order for {data.first_name+' ' +data.last_name}</p>
            <p class="sub_me">status: pending</p>
        </div>
        <div onClick={()=>{
            setViewStatus('flex')
            setViewData(data)
        }} class="p2">
            <p class="topic_me"><AiOutlineEye fontWeight={900} /></p>
            <p class="sub_me">view order info</p>
        </div>
      </div>
    )
}

export default Tile