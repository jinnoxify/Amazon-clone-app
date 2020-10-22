import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './Firebase'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) =>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                // logged in, redirect to homepage...
                history.push('/')
            })
            .catch(e => alert(e.message))
    }

    const register = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //created a user and logged in
                history.push('/')
            })
            .catch(e => alert(e.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=''
                />
            </Link>

            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='text'/>
                    <h5>Password</h5>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password'/>
                    <button onClick={login} type='submit' className='login__signInButton'>Sign in</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use and Sale. Please
                    see our privacy notice, out cookies notice and our interest-based ads notice.
                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
