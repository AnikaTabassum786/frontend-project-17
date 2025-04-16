import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState()
    const [error, setError] = useState();

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('Submitted')
    }

    const handlePasswordChange=(e)=>{
        console.log(e.target.value)
        setPassword(e.target.value)

        if(password.length<6){
            setError('Password must be 6 digit or longer')
        }
        else{
            setError('')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='email' required /> <br />
                <input type="password" name="password"
                 onChange={handlePasswordChange} defaultValue={password} required /> <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}>{error}</p>
        </div>
    );
};

export default ControlledField;