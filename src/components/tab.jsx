import '../css/tab.css'

function Tab({style , setPage}){
    return (
        <div className='tab_admin'>
            <ul>
                <li onClick={()=>setPage('addP')} style={style.no === '1'?{
                    borderBottom: '2px solid #004225'
                }:{}}>add</li>
                <li  onClick={()=>setPage('prod_admin')} style={style.no === '2'?{
                   borderBottom: '2px solid #004225'
                }:{}}>edit </li>
                <li  onClick={()=>setPage('discount')} style={style.no === '3'?{
                    borderBottom: '2px solid #004225'
                }:{}}>discount</li>
                <li onClick={()=>setPage('exchange')} style={style.no === '4'?{
                     borderBottom: '2px solid #004225'
                }:{}}>exchange</li>
                <li onClick={()=>setPage('shipment')} style={style.no === '5'?{
                     borderBottom: '2px solid #004225'
                }:{}}>shipment</li>
                
            </ul>
        </div>
    )
}

export default Tab