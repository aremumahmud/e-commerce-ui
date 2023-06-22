import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import '../css/footer.css'
import { useState } from 'react'
import suscribe from '../libs/suscribe'

function Footer (){
    let [email , setEmail] = useState('')
    let [load , setLoad] = useState(false)
    let suscribe_email = ()=>{
        if(email.split(' ').join('') === '') return alert('please enter an email address')
        setLoad(true)
      suscribe(email , (err,res)=>{
        setLoad(false)
        if(err) return alert('an unexpected error ocurred, please check you internet connection')
        if(!res.success) return alert('seems you are already suscribed to our mailing list')
        alert('You have successfully subscribed to our mailing list.')
      })
    }
    // } @celoOrg, @CeloNigeria @adamsheed93 #CeloAfricdao #CeloUIL
    return (
        <footer>
            <hr />
            <a href='/home' class="logo">
            {/* <p>Glitz<span>abellelabel</span></p> */}
            <img src="\imgs\67957883-348A-45E4-BD1E-E956B290647F~2.jpg" alt="" />
        </a>
            <div className="links">
                <ul>
                    <li><a href="https://www.instagram.com/glitzabellelogistics/" target="_blank"><AiOutlineInstagram size={30} /></a></li>
                    <li><a href="https://twitter.com/glitzlogistics" target="_blank"><AiOutlineTwitter  size={30}/></a></li>
                    <li><a href="https://www.facebook.com/Glitzabelleworld" target="_blank"><AiOutlineFacebook  size={30}/></a></li>
                    {/* <li><a href="https://www.linkedin.com/in/bashirah-olawuyi-67778a1aa/" target="_blank"><AiOutlineLinkedin  size={30}/></a></li> */}
                    <li><a href="https://api.whatsapp.com/send?phone=2348032403003" target="_blank"><AiOutlineWhatsApp  size={30}/></a></li>
                    <li> <a href="mailto:glitzabelleworld@gmail.com"><AiOutlineMail  size={30}/></a></li>
                </ul>
            </div>
            <div className="other">
                <div className="email">
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email Address' />
                    <div className="btn" onClick={suscribe_email}>
                        {
                            load ? <div className="loader mid" style={{
                                width:'20px'
                                ,height:'20px'
                            }}></div>:'Subscribe'
                        }
                        
                    </div>
                </div>
                <div className="copyWright">
                    <p>&copy; 2023  Glitzabelle Label. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer