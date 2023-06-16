import '../css/sizes.css'

function Sizes({sized,setSize}){

    let manageClicked = (e)=>{
        let size = e.target.innerHTML
        setSize && setSize(size)
        e.target.classList.add('active8')
        console.log(document.getElementsByName('fave'),'hrlo')
        document.getElementsByName('fave').forEach(el=>{
            console.log(el,'e')
            if(el.innerHTML === size){
                return
            }
            el.classList.remove('active8')
        })
        
    }
    return (
        <> <p className='reeky'> sizes</p>{
            //alert(JSON.stringify(sized))
        }
        <div className='sizes1'>
            {
                sized && sized.map((sizes,i)=>{
                  return  <div name="fave" onClick={(e)=>manageClicked(e)} className={"size1 "+(sizes.index==0?'active8':'')}>{sizes.size}</div>
                })
            }
           
        </div>
        </>
        
    )
}

export default Sizes