import React, { useState } from 'react'

const FormComponent = ({ onSubmit }) => {

    const [disabled, setDisabled] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const onChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
            setDisabled(false)
        } else {
            setPassword(e.target.value)
            setDisabled(false)
        }
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <input id='username-input' type="text" placeholder='username' name='username' onChange={onChange} />
            <input id='password-input' type="password" placeholder='password' name='password' onChange={onChange} />
            <button id='login-button' disabled={disabled ? true : false} type='submit'>Submit</button>
        </form>
    )
}

export default FormComponent