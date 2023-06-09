import { useState } from 'react';
import '../css/modal.css'
import send_otp from '../libs/send_otp';
import verify_otp from '../libs/verify_otp';
import change_password from '../libs/change_password';

function ForgotModal({display,close}) {
    let [placeholder , setPlaceholder] = useState('Email Address')
    let [email , setEmail] = useState('')
    let [token , setToken] = useState('')
    let [id , setId] = useState('')
    let [password , setPassword] = useState('')
    let [load , setLoad] = useState(false)
    let [error , setError] = useState('')
    let [pace , setPace] = useState(0)
    let stroll = ['send OTP' , 'verify OTP' , 'Change Password']
    let [done , setDone ]= useState(false)
    let change = e=>{
        if(pace ===0){
              setEmail(e.target.value.replaceAll(' ',''))
        }else if(pace ===1 ){
            setToken(e.target.value.replaceAll(' ',''))
        }else if(pace === 2){
            setPassword(e.target.value.replaceAll(' ',''))
        }
      
        //alert(e.target.value.replaceAll(' ',''))
    }

    let sendOTP = ()=>{
        if(email === ''){
            return setError('enter your email address')
        }
        setLoad(true)
        send_otp(email , (err,res)=>{
           console.log(res,err)
           setLoad(false)
           if(err){
            return setError('an unexpected error occured')
           }
           if(res.error){
             return setError(res.mesage)
           }
           setError('')
           setPlaceholder('Enter 6-digit OTP')
           setPace(++pace)
           document.getElementById('clearit').value = ''
        })
    }
    let verifyOTP = ()=>{
        if(token === '' || email === ''){
            return setError('please enter  token')
        }
        setLoad(true)
        verify_otp(email,token , (err,res)=>{
           console.log(res,err)
           setLoad(false)
           if(err){
            return setError('an unexpected error occured')
           }
           if(res.error){
             return setError(res.mesage)
           }
           setError('')
           setId(res.userID)
           setPlaceholder('Enter New Password')
           setPace(++pace)
           document.getElementById('clearit').value = ''
        })
    }

    let change_Password= ()=>{
        if(token === '' || email === ''){
            return setError('please enter  token')
        }
        setLoad(true)
        change_password(id,token,password , (err,res)=>{
           console.log(res,err)
           setLoad(false)
           if(err){
            return setError('an unexpected error occured')
           }
           if(res.error){
             return setError(res.mesage)
           }
           setError('')
           setDone(true)
          // setId(res.userID)
          // setPlaceholder('Enter New Password')
           //setPace(++pace)
           document.getElementById('clearit').value = ''
        })
    }

    let factory = ()=>{
        if (pace === 0 ){
            return sendOTP
        }else if(pace === 1){
            return verifyOTP
        }else if(pace === 2){
            return change_Password
        }else{
            return ()=>{}
        }
    }

  return (
    <div style={{display}} className="modalWrap">
      <div class="card">
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
          <p class="alert">Forgot Password?</p>
        </div>
{
    !done? <p class="message">
          No worries, just <b>click on the send otp button</b>  below and we will send you a 
          one time password to reset it
        </p>:''
}
       
        <p className="red">{error} </p>
        {
            !done?<div class="actions1">
        
          <div class="read re" href="">
            <input id='clearit' className='span' type="text" placeholder={placeholder} onChange={change}/>
          </div>

          <div class="mark-as-read" onClick={factory()}>
            {
                load ? <div className="loader">

                </div>: stroll[pace]
            }
         
          </div>
          <div onClick={()=>close('none')} class="mark-as-read" href="">
            close
          </div>
        </div>:<div className='leng'>
            <p>Password changed succesfully</p>
            <div onClick={()=>close('none')} className="mark-as-read">
                close
            </div>
        </div>
        }
        
      </div>
    </div>
  );
}


export default ForgotModal