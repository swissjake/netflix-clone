import {React, useRef } from 'react';
// import { signUp } from '../../firebase';
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import './signUp.css'

const SignUp = () => {

      const emailRef = useRef(null);
      const passwordRef = useRef(null);

     

    const register = (e) => {
        e.preventDefault();

       createUserWithEmailAndPassword(auth,
          emailRef.current.value,
          passwordRef.current.value
        ).then((userCredential) => {
            console.log(userCredential.user)
        }).catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage)
        })
    }

    const signIn = (e) => {
      e.preventDefault();

      signInWithEmailAndPassword(auth, emailRef.current.value,
        passwordRef.current.value
      ).then((userCredential) => {
          console.log(userCredential.user)
      }).catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      })
    }
  

  return (
    <div className='signup'>
        <form action="">
          <h1>Sign In</h1>
          <input ref={emailRef} type="email"
            placeholder='Email'
            required
          />
          <input ref={passwordRef} type="password"
            placeholder='password'
            required
          />
          <button onClick={signIn} type='submit'>Sign In</button>
          <h4><span className='Signup__gray'>New to Netflix? </span>
            <span className='signup__link' onClick={register}>SignUp Now</span>
          </h4>
        </form>
    </div>
  )
}

export default SignUp