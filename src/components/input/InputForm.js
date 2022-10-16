import React, { useState } from 'react';
import './InputForm.css';

function InputForm(props){
    let [nameValue, setNameValue] = useState('');
    let [ageValue, setAgeValue] = useState(''); 

    function nameValueHandler(event){
        setNameValue(event.target.value);
    }
    function ageValueHandler(event){
        setAgeValue(event.target.value);
    }
    function submitHandler(event){ 
        event.preventDefault();
        if(nameValue.trim().length === 0 || ageValue.trim().length === 0) {
            return;
        }
        else if(+ageValue < 1){
            return;
        }
        var userInfo = {
            userName: nameValue,
            age: +ageValue
        };
        props.onSaveUserData(userInfo);
        setNameValue('');
        setAgeValue('');
    }
    

return <form onSubmit={submitHandler}>
    <label>Username</label>
    <input type="text" value={nameValue} placeholder="first name" onChange={nameValueHandler}/>
    <label>Age</label>
    <input type="number" value={ageValue} placeholder="age" onChange={ageValueHandler}/> 
    <button type="submit">Add User</button>
</form>;
}

export default InputForm;