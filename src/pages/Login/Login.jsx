import {React, useState} from 'react'
import SignUp from '../SignUp/SignUp';
import logo from '../../assets/logo.png'
import './login.css'

const Login = () => {

    const[signUp, setSignUp] = useState(false);
    const toggleSignUp = () =>{
        setSignUp(prevSignUp => !prevSignUp)
    }

  return (
    <div className='login'>
        <div className="login__background">
            <img className='login__logo' src={logo} alt="/" />
            <button onClick={toggleSignUp} className='login__button'>{signUp ? 'Sign in' : 'SignOut'}</button>

            <div className="login__gradient" />
            <div className="login__body">
                {signUp ? (
                    <SignUp />
                ):
                (
                    <>
                    <h1>Unlimited fils, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="login__input">
                        <form>
                            <input type="email"
                                placeholder='Email'
                                required
                            />
                            <button onClick={() => setSignUp(true)} className='login__input--button'>
                                Get Started
                            </button>
                        </form>
                    </div>
                </>
                )
                }
                
            </div>
        </div>

    </div>
  )
}

export default Login