import "../css/about.css";
import AboutPic from "./about_pic";

function About({ setPage }) {
  return (
    <div className="about">
      <div className="descriptionSection">
        <p className="title">About Glitzabelle Label</p>
        <p className="description">
          Welcome to our online fashion store! At Glitzabelle Label, we're dedicated to creating stylish pieces for women all over the world. Whether you're looking for something sophisticated, fun, modest or unique, we have something for you. Our goals is to help women look and feel their best, no matter what their personal style may be. Enjoy a seamless shopping experience with secure payment options and expedited delivery services. We can't wait to see our pieces on you. Thank you for choosing Glitzabelle Label.
        </p>
        <div className="cta">
          <div className="btn active" onClick={() => setPage('users/login')}>Log in</div>
          <div className="btn" onClick={() => setPage('users/signup')}>Sign up</div>
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
