import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'

const initialFormValues = {
    name: '',
    age: '',
    email: '',
}
const Friends = () => {

    const [friends, setFriends] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChanges = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    const postFriend = (newFriend) => {
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => console.log(res))
        .catch(err => console.log(err))  
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newFriend = {
            name: formValues.name.trim(),
            age: formValues.age.trim(),
            email: formValues.email.trim(),
        }
        postFriend(newFriend)
        setFormValues(initialFormValues)
    }


useEffect(() => {
    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
        console.log(res)
        setFriends(res.data)
    })
    .catch(err => console.log(err))    
},[formValues === initialFormValues])

    

    return (
        <div className='friends-list'>
            <h1>Friends List</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                placeholder='name'
                onChange={handleChanges}
                value={formValues.name}
                name='name'
                />
                <input 
                type='text'
                placeholder='age'
                onChange={handleChanges}
                value={formValues.age}
                name='age'
                />
                <input 
                type='email'
                placeholder='email'
                onChange={handleChanges}
                value={formValues.email}
                name='email'
                />
                <button>Add Friend</button>
            </form>
            <div>
                {
                friends.map(person => {
                    return <div key={person.id}><h2>{person.name}</h2></div>
                })
            }
            </div>
        </div>
    )
}
export default Friends