import '../css/policy.css'
import { useEffect } from 'react';
import { FaShippingFast } from 'react-icons/fa';

function Policy(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div class="conta">
            <br />
        <div class="logo downImpel">
            <a href='https://e-commerce-ui-ruddy.vercel.app/home' class="logo">
            <img src="\imgs\67957883-348A-45E4-BD1E-E956B290647F~2.jpg" alt="" />
                {/* <img src="https://res.cloudinary.com/dvauarkh6/image/upload/v1686347400/DEV/vnfp8ucivmcfyyr8uipo.jpg" alt="" /> */}
            </a>
        </div>
        <div class="topic_header">
            <div class="iconify">
               <FaShippingFast color='#004225'n size={35} /> 
                
            </div>
            <div class="titlepolicy">
                Glitzabelle Label Shipping Policies
            </div>
        </div>
        <div class="policies">
            <div class="policy">
                <p class="header201">DOMESTIC SHIPPING</p>
                <p class="description12">
                    Deliveries within Lagos take 1-3 working days while deliveries outside Lagos but within Nigeria take 4-6 working days.
                </p>
            </div>
            <br />
            <div class="policy">
                <p class="header201">INTERNATIONAL SHIPPING</p>
                <p class="description12">
                    International orders are fulfilled by DHL and are trackable. Delivery time for international orders is 5-10 working days after order placement
                 </p>
            </div>

        </div>
<br /><br />
    </div>
    )
}


export default Policy