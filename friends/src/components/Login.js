import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Redirect, useHistory } from 'react-router-dom'


const initialCredentials = {
    username: '',
    password: '',
}

 const Login = () => {
const [credentials, setCredentials] = useState(initialCredentials)
let history = useHistory()

const handleChanges = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
}

const login = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        history.push('/protected')


    })
    .catch(err => console.log(err.message))
}



return (
    <div>
        <form onSubmit={login}>
            <input 
            type='text'
            placeholder='username'
            value={credentials.username}
            onChange={handleChanges}
            name='username'
            />
            <input 
            type='password'
            placeholder='password'
            value={credentials.password}
            onChange={handleChanges}
            name='password'
            />
            <button>Login</button>
        </form>
    </div>
)
}
export default Login