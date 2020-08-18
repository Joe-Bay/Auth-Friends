import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Friends = () => {

    const [friends, setFriends] = useState([])
    
const getData = () => {
        axiosWithAuth()
        .get('/api/data')
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }


    return (
        <div></div>
    )
}
export default Friends