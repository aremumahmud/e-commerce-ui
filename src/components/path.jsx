import '../css/path.css'

function Path({data,setPage}){
console.log(setPage)
    let count = 0
    let changePage = (e)=>{
        console.log(e)
       setPage(e)
    }


    return (
        <div className="path">
            
                <ul>
                    {
                        data&&
                        
                        data.map(x=>{
                            count++
                            return count === data.length?
                                 <li onClick={()=>changePage(x.path)} className='bold'>{x.name} /</li>:
                                 <li onClick={()=>changePage(x.path)}>{x.name} /</li>
                        }
                            
                        )
                    }
                </ul>
           
        </div>
    )
}

export default Path