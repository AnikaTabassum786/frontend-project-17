import React from 'react';
import useInputField from '../hooks/useInputField';

const HookForm = () => {

    const [name,nameOnChange] = useInputField('')
    const [email,emailOnChange] = useInputField('')
    const [password, passwordOnChange] = useInputField('')

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('submit',name, email,password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                 <input defaultValue={name} onChange={nameOnChange} type="text" /> <br />
                 <input defaultValue={email} onChange={emailOnChange} type="email" /> <br />
                 <input defaultValue={password} onChange={passwordOnChange} type="text" /> <br />
                 <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;