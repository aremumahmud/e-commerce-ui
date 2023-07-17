import '../css/aboutPic.css'

function AboutPic({data}){
    return (
      
        <div className="main">  {data.length > 0 && <>
        <div className="card34" id="c1"><img className='img' src={data[0].image||''} alt="" /></div>
        <div className="card34" id="c2"><img  className='img' src={(data[1]?data[1].image:data[0].image)||''} alt="" /></div>
        <div className="card34" id="c3"><img  className='img' src={(data[2]?data[2].image:data[0].image||'')} alt="" /></div>
        <div className="card34" id="c4"><img  className='img' src={(data[3]?data[3].image:data[0].image||'')} alt="" /></div>
        
        </>}
        
    </div>
    )
}

export default AboutPic
