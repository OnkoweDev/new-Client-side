import React from 'react'
import './RegisterStyle.css'
import LoginImage from './rafiki.png'
import facebook from './facebook.png'
import google from './google.png'
import apple from './apple-black-logo.png'

const Register = () => {
  return (
    <section>
        <div className="imgBx">
            <img src={LoginImage}/>
        </div>
        <div className="contentBx">
            <div className="formBx">
                <h2>Register</h2>
                <form>

                    <div className="inputBx">
                        <span>Username</span>
                        <input type='text' name='' />
                    </div>

                    <div className="inputBx">
                        <span>Email</span>
                        <input type='text' name='' />
                    </div>

                    <div className="inputBx">
                        <span>Password</span>
                        <input type='password' name='' />
                    </div>
                    
                    <div className="inputBx">
                        <input type='submit' value='Sign up' />
                    </div>
                    <div className="inputBx">
                        <p>Already have an account? <a href="">Sign in</a></p>
                    </div>
                </form>
                <h3>Sign up with social media</h3>
                <ul className="sci">
                <li><img src={facebook} /></li>
                <li><img src={google} /></li>
                <li><img src={apple} /></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Register