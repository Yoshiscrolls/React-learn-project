import React, {useEffect, useState} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import style from "../Login.module.css"


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email can`t be empty')
    const [passwordError, setPasswordError] = useState('Password can`t be empty')
    const [formValid, setFormValid] = useState(false)

    useEffect( () => {
        if(emailError || passwordError){
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Invalid email')
        } else {
            setEmailError('')
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 10) {
            setPasswordError('Password too easy')

        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div>
            <form className={style.form}>
                <h1 className={style.title}>Registration</h1>
                {(emailDirty && emailError) && <div style={{color: 'darkred'}}>{emailError}</div>}
                <MyInput
                    onChange={e => emailHandler(e)}
                    value={email}
                    onBlur={e => blurHandler(e)}
                    name='email'
                    type='login'
                    placeholder='Email'>
                </MyInput>
                {(passwordDirty && passwordError) && <div style={{color: 'darkred'}}>{passwordError}</div>}
                <MyInput
                    onChange={e => passwordHandler(e)}
                    value={password}
                    onBlur={e => blurHandler(e)}
                    name='password'
                    type='password'
                    placeholder='Password'>
                </MyInput>
                <div className={style.formCheck}>
                    <MyButton disabled={!formValid} type='submit' className={style.logButton}>Log in</MyButton>
                    <label className={style.checkbox}>Remember me
                        <input type="checkbox"/>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Login;
