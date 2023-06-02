import { useState } from 'react';
import '../css/modal.css'
import '../css/view.css'
import ProdView from './prodView';

function ViewModal({display,setViewStatus,data}) {
    let [page ,setPage] = useState('delivery')
  return (
    <div style={{display}} className="modalWrap">
      <div class="card wide">
        <div class="header1">
          <span class="icon1">
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
          <p class="alert large3">Order Information</p>
        </div>
        <div className="tab">
            <div onClick={()=>setPage('delivery')} className={"details3 "+ (page==='delivery'?'active1':'')}>
                <p>Delivery information</p>
            </div>
            <div div onClick={()=>setPage('products')}  className={"products3 "+ (page==='delivery'?'':'active1')}>
                <p>Order Products</p>
            </div>
        </div>
        <br />
        {
            page === 'delivery' &&
            <>
             <p class="message">
          These are the delivery information you provided at the checkout
        </p>
        <br />
        <div className="apart">
            <div className="deets">
            <ul>
                <li>City:</li>
                <li>Zip Code:</li>
                <li>First Name:</li>
                <li>Last Name:</li>
                <li>Email Address:</li>
                <li>Phone Number:</li>
                <li>Current Address:</li>
            </ul>
        </div>
        <div className='data'>
            <ul>
                <li>{data.city}</li>
                <li>{data.zip_code}</li>
                <li>{data.first_name}</li>
                <li>{data.last_name}</li>
                <li>{data.email_address}</li>
                <li>{data.phone_number}</li>
                <li>{data.address}</li>
            </ul>
        </div>
        </div>
            </>
        }
        {
            page !== 'delivery'
            &&
            <div className='prodDisplay1'>{
                  data.products.map(p=>{
                    return <ProdView data={p} />
                })
            }
              
                {/* <div className="view_tile"></div>
                <div className="view_tile"></div>
                <div className="view_tile"></div>
                <div className="view_tile"></div>
                <div className="view_tile"></div>
                <div className="view_tile"></div>
                <div className="view_tile"></div>
                <div className="view_tile"></div> */}
            </div>
        }
       
        
        <div class="actions1">
          <p class="read" href="" onClick={()=>setViewStatus('none')}>
            Close
          </p>

          {/* <a class="mark-as-read" href="/">
           Go back
          </a> */}
        </div>
      </div>
    </div>
  );
}


export default ViewModal