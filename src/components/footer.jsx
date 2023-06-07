import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import '../css/footer.css'

function Footer (){
    return (
        <footer>
            <hr />
            <div class="logo">
            <p>Glitz<span>abelle</span></p>
        </div>
            <div className="links">
                <ul>
                    <li><a href="https://www.instagram.com/glitzabellelogistics/" target="_blank"><AiOutlineInstagram size={30} /></a></li>
                    <li><a href="https://twitter.com/glitzlogistics" target="_blank"><AiOutlineTwitter  size={30}/></a></li>
                    <li><a href="https://www.facebook.com/Glitzabelleworld" target="_blank"><AiOutlineFacebook  size={30}/></a></li>
                    <li><a href="https://www.linkedin.com/in/bashirah-olawuyi-67778a1aa/" target="_blank"><AiOutlineLinkedin  size={30}/></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=2348032403003" target="_blank"><AiOutlineWhatsApp  size={30}/></a></li>
                    <li> <a href="mailto:glitzabelleworld@gmail.com"><AiOutlineMail  size={30}/></a></li>
                </ul>
            </div>
            <div className="other">
                <div className="email">
                    <input type="email" placeholder='Email Address' />
                    <div className="btn">Suscribe</div>
                </div>
                <div className="copyWright">
                    <p>&copy; 2023 Shopcart. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer