import React from 'react'
import './login.css'
const Login=()=> {
  return (
    <div className='login'>
        <div className="item">
            <h2>welcomme back</h2>
            <form action="">
               <input type="text" placeholder='Email'  name='email'/>
               <input type="password" placeholder='password' name='password' />
               <button>Sing In</button> 
            </form>
            
        </div>
        <div className="separator"></div>
        <div className="item">
      <h2>Create New Account</h2>
             <form>
            <label htmlFor="file">
            <img src="" alt="" />
                upload an image
            </label>
            <input type="file " id='file' style={{display:"none"}} />
            <input type="text" placeholder='Email'  name='email'/>
               <input type="password" placeholder='password' name='password' />
               <button>Sing Up</button> 
               </form>
    </div>
    </div>
  )
} 

export default Login