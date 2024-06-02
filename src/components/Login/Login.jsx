import React from 'react'
import './Login.css'

const Login = () => {

    const animationsignIn = () => {
        document.querySelector('.wrapper').classList.add('animate-signUp');
        document.querySelector('.wrapper').classList.remove('animate-signIn');
    }

    const animationsignUp = () => {
        document.querySelector('.wrapper').classList.add('animate-signIn');
        document.querySelector('.wrapper').classList.remove('animate-signUp');
    }

  return (
      <div class="wrapper">
        <div class="form-wrapper sign-up">
            <form action="">
                <h2>Sign Up</h2>
                <div class="input-group">
                    <input type="text" required />
                    <label for="">Username</label>
                </div>
                <div class="input-group">
                    <input type="email" required />
                    <label for="">Email</label>
                </div>
                <div class="input-group">
                    <input type="password" required />
                    <label for="">Password</label>
                </div>
                <button type="submit" class="btn">Sign Up</button>
                <div class="sign-link">
                    <p>Already have an account? <a href="#" class="signIn-link" onClick={animationsignIn}>Sign In</a></p>
                </div>
            </form>
        </div>

        <div class="form-wrapper sign-in">
            <form action="">
                <h2>Login</h2>
                <div class="input-group">
                    <input type="text" required />
                    <label for="">Username</label>
                </div>
                <div class="input-group">
                    <input type="password" required />
                    <label for="">Password</label>
                </div>
                <div class="forgot-pass">
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" class="btn">Login</button>
                <div class="sign-link">
                    <p>Don't have an account? <a href="#" class="signUp-link" onClick={animationsignUp}>Sign Up</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
