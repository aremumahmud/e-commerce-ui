import { useEffect, useState } from 'react'
import { Link,Outlet, useNavigate, useParams } from 'react-router-dom'
import '../css/login.css'
import {AiFillGoogleCircle,AiFillFacebook , AiOutlineEye, AiOutlineKey, AiOutlineUser, AiFillIeCircle, AiFillPieChart} from 'react-icons/ai'
import ForgotModal from './forgotModal'


function Login({error,setAction,URIs, setParams ,busy,setLoad,setBusy}){
    const { page } = useParams()
    const navigate = useNavigate()
    let setPage = (x)=>{
        if(x && x !==''){
         return navigate('/'+x)
         // props.history.push('/foo')
        }
      }
      //console.log(page)
     

    let [signup , changeSign] = useState(true)
    let [username , changeUsername] = useState('')
    let [password , changePassword] = useState('')
    let [email , changeEmail] = useState('')
    
    useEffect(()=>{
        if(page === 'login'){
            setAction(URIs.login)
            changeSign(false)
          }else{
            setAction(URIs.register)
            changeSign(true)
          }
    })
    

    let submitForm = ()=>{
        setParams({
            username,
            password,
            email,
            password2:password
        })
    }
    let [seen  , setSeen]= useState('password')

    let see =()=>{
        if(seen === 'text'){
            setSeen('password')
        }else{
            setSeen('text')
        }
    }
    let [ViewStatus4 , setViewStatus4] = useState('none')
    return (

       <div className="fixed">
        <ForgotModal  display={ViewStatus4} close={setViewStatus4} />
        {/* <Link to='/dashboard' id='linkee' style={{display:'none'}} >sayee</Link> */}
         {/* <div className="pic_display">
            <div className="img">
                <img src="imgs/fotor_2023-5-21_18_58_22.png" alt="" />
            </div>
            <div>
                <p className='topic1'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero provident ipsam repudiandae mollitia labore natus, rem quo, corrupti amet et beatae, dolorum tempora suscipit nisi? Ex delectus deleniti ipsa nostrum.
                </p>
            </div>
         </div>
 */}

          <div className="login">
            {/* <div className="header">
                <img className="logo" src="" alt="" />
                <p className="title">ERRYNATE</p>
            </div> */}
            <div className='lit'>
                <div className="titles">
                    <p className="top">Welcome Back!</p>
                    <br />
                    <p className="sub">Welcome back to our online store, where female warriors reign supreme! Explore empowering wears for the modern warrior woman and unleash your inner strength in style.</p>
                </div>
                <form  className="form">
                    {error && <p className='error_msg' style={{color:error.color}}>{error.msg}</p>}
                    {
                        signup &&
                        <div className="inputWrap">
                            <div className="icon">
                                <AiOutlineUser />
                            </div>
                            <input onChange={(e)=>changeUsername(e.target.value)} type="email" className="input" placeholder='Username'/>
                            <div className="icon silent">

                            </div> 
                        </div>
                    }
                    <div className="inputWrap">
                        <div className="icon">
                            <AiOutlineUser />
                        </div>
                        <input onChange={(e)=>changeEmail(e.target.value)} type="email" className="input" placeholder='Email address'/>
                        <div className="icon silent">

                        </div> 
                    </div>
                    <div className="inputWrap">
                        <div className="icon">
                            <AiOutlineKey /> 
                        </div>
                        <input onChange={(e)=>changePassword(e.target.value)} type={seen} className="input" placeholder='Password' />
                        <div onClick={see} className="icon silent">
                            <AiOutlineEye />
                        </div>
                    </div>
                    <div onClick={()=>setViewStatus4('flex')} className="forget-password">
                        <p>forgot password</p>
                    </div>
                    <div onClick={()=>{!busy && setLoad(true) ;setBusy(true); submitForm()}} className="submit">
                        {
                            busy?<div className="loader"></div>:
                            <p>{signup?'Sign up ':'Log in '}</p>
                        }
                       
                    </div>
                </form>
            </div>
            {/* <div className="split_or">
                <div className="line"></div>
                <p>or</p>
                <div className="line"></div>
            </div> */}
            {/* <div className="social-logins">
                <div className="social">
                    <AiFillGoogleCircle style={{fontSize:'30px' ,color:'yellowgreen'}} /> 
                    <p>Google</p>
                </div> 
                <div className="social">
                    <AiFillFacebook style={{fontSize:'30px', color:'#0000ff'}} />
                    <p>Facebook</p>
                </div>
            </div> */}
            <div className="otherOptions">
                <p>{signup?'Have an account?':'Dont have an account?'}<a id='login' onClick={()=>{
                   if(signup){
                    navigate('/users/login')
                    setAction(URIs.login)
                   }else{
                    navigate('/users/signup')
                    setAction(URIs.register)
                   }
               
                    
                }}>{!signup?'Sign up here':'Log in here'}</a></p>
            </div>
            <div className="footer">
                <p>&copy; 2023 ALL RIGHTS RESERVED</p>
            </div>
          </div>
         {/* <Outlet /> */}
    </div>
        )
}


export default Login