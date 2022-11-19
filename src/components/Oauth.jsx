import facebookIcon from '../assets/facebook.png'
import googleIcon from '../assets/google.png'
import appleIcon from '../assets/apple-black-logo.png'

const Oauth = () => {
  return (
    <>
  

  <div className='oauthText'>

<div className='line'></div>
<p style={{ color: 'black' }}>Or sign in with</p>
<div className='line'></div>
</div>

<div className='oauthDiv'>
<img src={googleIcon} alt="" />
<img src={facebookIcon} alt="" />
<img src={appleIcon} alt="" />
</div>  
    
    
    </>
  )
}

export default Oauth