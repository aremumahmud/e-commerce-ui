import { FaExchangeAlt } from "react-icons/fa";
import "../css/policy.css";
import { useEffect } from "react";

function ReturnPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="conta">
      <br />

      <div class="logo downImpel">
        <a href="https://e-commerce-ui-ruddy.vercel.app/home" class="logo">
          <img src="\imgs\67957883-348A-45E4-BD1E-E956B290647F~2.jpg" alt="" />
          {/* <img src="https://res.cloudinary.com/dvauarkh6/image/upload/v1686347400/DEV/vnfp8ucivmcfyyr8uipo.jpg" alt="" /> */}
        </a>
      </div>
      <div class="topic_header">
        <div class="iconify">
          <FaExchangeAlt color="#004225" n size={35} />
        </div>
        <div class="titlepolicy">Glitzabelle Label Return Policies</div>
      </div>
      <div class="policies">
        <div class="policy">
          <h3>RETURN POLICY</h3>
          <p class="description12">
            We want to ensure that you are completely satisfied with your
            purchase, so we have developed a comprehensive return policy to make
            the process as easy and seamless as possible.
          </p>
        </div>
        <br />
        <h4>
          Our return policy allows you to return any item within these
          timelines:
        </h4>
        <br />
        <ul className="norms">
          <li>3 business days from the date of delivery within Lagos.</li>
          <li>
            {" "}
            5 business days from the date of delivery for orders placed within
            Nigeria but outside Lagos.
          </li>
          <li>
            10 business days from the date of delivery for orders shipped
            outside Nigeria.
          </li>
        </ul>
        <br />
        <p style={{ fontWeight: 500 }} className="continue">
          The item(s) must be in its original condition, unworn, unwashed, and
          with all tags and accessories attached. If you received a damaged or
          defective item, please contact us as soon as possible so we can make
          it right.
        </p>
        <br />
        <p style={{ fontWeight: 500 }}>
          To initiate a return, please follow these steps:
        </p>
        <br />
        <ol className="norms">
          <li>
            Contact us via the website, email or phone to let us know that you
            would like to make a return. Please provide your order number and
            the reason for the return.
          </li>
          <li>
            {" "}
            Pack the item(s) securely in its original packaging, including all
            tags and accessories.
          </li>
          <li>
            Ship the item(s) back to us using a traceable method. Please note
            that we cannot be responsible for lost or damaged packages and
            customers shall bear the entire cost of deliveries.
          </li>
        </ol>
        <br />
        <p style={{ fontWeight: 500 }}>
          Things to note while initiating a return;
        </p>
        <br />
        <ol className="norms">
          <li>
            Once we receive the item(s) and verify that it is in its original
            condition, we will issue a refund to your original payment method
            within 48 hours. Please note that it may take up to 5-10 business
            days for the refund to appear on your account. We will not make a
            refund or exchange for items that are not physically in our
            possession.
          </li>
          <li>
            Refunds are issued minus the cost of shipping via the same payment
            gateway the item(s) were paid for.
          </li>
          <li>
            The re-delivery fee is the same cost as the initial shipping fee
            charged when the item was first ordered.
          </li>
          <li>
            We do not offer refunds for exchanged items. Additionally, we only
            allow items to be exchanged or returned once. We also cannot
            guarantee that the item you would like to exchange will be available
            in your preferred size and colour. If the item is out of stock, we
            will offer a store credit for the amount of the original purchase
            that will be eligible for use at a later time.
          </li>
          <li>
            Item(s) bought on sale or with a discount code will NOT be eligible
            for a refund or exchange regardless of the circumstance. ONLY FULL
            PRICE items qualify for a refund or exchange.
          </li>
          <li>
            We reserve the right to refuse any return that does not meet our
            return policy requirements.
          </li>
        </ol>
        <br />
        <p style={{ fontWeight: 500 }}>RETURN ADDRESS:</p>
        <br />
        <p class="description12">
          16, Oremeji Avenue, off Bamishile Street, Egbeda, Lagos State,
          Nigeria. Postcode 102213.
        </p>
        <br />
        <p style={{ fontWeight: 500 }}>
          If you have any questions or concerns about our return policy, please
          do not hesitate to contact us. We are always happy to help!
        </p><br />
        <p style={{ fontWeight: 500 }}>
          Contact: +234 8025 926 292 or email:  <a href="mailto:info@glitzabellelabel.com">info@glitzabellelabel.com</a> or 
          <a href="mailto:glitzabellelabel@gmail.com"> glitzabellelabel@gmail.com.</a> 
        </p>
      </div>
      <br />
      <br />
    </div>
  );
}

export default ReturnPolicy;
