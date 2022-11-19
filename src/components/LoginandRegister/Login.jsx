import React from 'react'
import './style.css'
import LoginImage from './rafiki.png'
import facebook from './facebook.png'
import google from './google.png'
import apple from './apple-black-logo.png'

const Login = () => {
  return (
    <section>
        <div className="imgBx">
            <img src={LoginImage}/>
        </div>
        <div className="contentBx">
            <div className="formBx">
                <h2>Login</h2>
                <form>
                    <div className="inputBx">
                        <span>Username</span>
                        <input type='text' name='' />
                    </div>

                    <div className="inputBx">
                        <span>Password</span>
                        <input type='password' name='' />
                    </div>
                    <label className="remember"><input type="checkbox" />Remember me</label>
                    <div className="inputBx">
                        <input type='submit' value='Sign in' />
                    </div>
                    <div className="inputBx">
                        <p>Don't have an account? <a href="">Sign up</a></p>
                    </div>
                </form>
                <h3>Login with social media</h3>
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

export default Login