import React from 'react'
import "./Login.css"
import Header from './Header'
import Footer from './Footer'

const Login = () => {
  return (
    <>
    <Header />
    <div className="login-body">
    <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div class="signup">
            <form action="">
                <label for="chk" aria-hidden="true">Sign up</label>
                <input type="text" name="name" placeholder="Name" required />
                <input type="text" name="txt" placeholder="User name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="pswd" placeholder="Password" required />
                <button>Sign up</button>
            </form>
        </div>
        <div class="login">
            <form action="">
                <label for="chk" aria-hidden="true">Login</label>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="pswd" placeholder="Password" required />
                <button>Login</button>
            </form>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Login