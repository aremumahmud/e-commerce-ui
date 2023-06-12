import "../css/about.css";
import AboutPic from "./about_pic";

function About({setPage}) {
  return (
    <div className="about">
      <div className="descriptionSection">
        <p className="title">About Glitzabelle Label</p>
        <p className="description">
        Explore our premier online boutique, catering exclusively to women's fashion! Discover an exquisite 
        array of stylish and comfortable clothing items, meticulously curated from top-notch materials. From trendy 
        tops to chic dresses, we offer a diverse range of designs, colors, and sizes to suit your individual style and 
        preferences. Experience a seamless shopping journey, secured payments, and expedited delivery services. Stay
         ahead of the fashion curve with our frequent new arrivals.
         Thank you for choosing us as your ultimate destination for all your female wear needs!
        </p>
        <div className="cta">
          <div className="btn active" onClick={()=>setPage('users/login')}>Log in</div>
          <div className="btn"  onClick={()=>setPage('users/signup')}>Sign up</div>
        </div>
      </div>
      <div className="imageSection">
        {/* <img src="/imgs/51+Ev5UmxvL._AC_UL320_-removebg-preview (1).png" alt="" /> */}
        <AboutPic />
      </div>
    </div>
  );
}

export default About;
