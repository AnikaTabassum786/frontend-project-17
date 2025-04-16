import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('Submitted')
    }

    const handlePasswordChange=(e)=>{
        console.log(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='email' id='' required /> <br />
                <input type="password" name="password" id=""
                 onChange={handlePasswordChange} defaultValue={password} required /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledField;