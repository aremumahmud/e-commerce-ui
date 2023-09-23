import "../css/about.css";
import AboutPic from "./about_pic";

function About({ setPage , data }) {
  return (
    <div className="about">
      <div className="descriptionSection">
        <p className="title">About Glitzabelle Label</p>
        <p className="description">
          Glitzabelle Label is a desirable fashion brand for women. We create stylish clothes that are made to last. We are committed to helping women look and feel their best regardless of their personal style. Each piece is a labour of love from Lagos. ❤️
         </p>
        {
          !localStorage.getItem("TokenID") &&
          <div className="cta">
          <div className="btn active" onClick={() => setPage('users/login')}>Log in</div>
          <div className="btn" onClick={() => setPage('users/signup')}>Sign up</div>
        </div>}
      </div>
      <div className="imageSection">
        {/* <img src="/imgs/51+Ev5UmxvL._AC_UL320_-removebg-preview (1).png" alt="" /> */}
       {
        data &&<AboutPic data={data} />
       }
        
      </div>
    </div>
  );
}

export default About;
