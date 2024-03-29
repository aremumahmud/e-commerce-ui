import '../css/modal.css'
import TileAlert from './tileAlert';

function CartModal({display,data , setViewStatus}) {
  return (
    <div style={{display}} className="modalWrap">
      <div className="card animate__animated animate__zoomInDown  ">
        <div className="header1">
          <span className="icon1">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                clip-rule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                fill-rule="evenodd"></path>
            </svg>
          </span>
          <p className="alert">New message!</p>
        </div>

        <p className="message">
          The following item has been successfully added to your cart
        </p>
        <br />
        <TileAlert data={data}/>

        {/* <div className="actions1">
          <a className="read" onClick={()=>setViewStatus('none')}>
            close
          </a>

          {/* <a className="mark-as-read" href="/home">
           Go back
          </a> 
        </div> */}
      </div>
    </div>
  );
}


export default CartModal