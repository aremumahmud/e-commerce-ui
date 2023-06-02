import "../css/about.css";

function About() {
  return (
    <div className="about">
      <div className="descriptionSection">
        <p className="title">About Shopcart</p>
        <p className="description">
          Welcome to our e-commerce website selling female caps! We offer a wide
          range of fashionable and comfortable caps for women made from
          high-quality materials. Our collection includes various styles,
          colors, and designs to suit your taste and personality. We provide a
          seamless shopping experience, secure payment options, and fast
          delivery services. Check back frequently for new arrivals and thank
          you for choosing us!
        </p>
        <div className="cta">
          <div className="btn active">Log in</div>
          <div className="btn">Sign up</div>
        </div>
      </div>
      <div className="imageSection">
        <img src="/imgs/51+Ev5UmxvL._AC_UL320_-removebg-preview (1).png" alt="" />
      </div>
    </div>
  );
}

export default About;
