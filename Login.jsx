import React from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import style from "../Login.module.css"


const Login = () => {
    return (
        <div>
            <form className={style.form}>
                <h1 className={style.title}>Registration</h1>
                <MyInput

                    type='login'
                    placeholder='email'>
                </MyInput>
                <MyInput

                    type='password'
                    placeholder='password'>
                </MyInput>
                <div className={style.formCheck}>
                    <MyButton type='submit' className={style.logButton}>Log in</MyButton>
                    <input type="checkbox" className={style.checkbox} id='remember'/>
                    <label for='remember' className={style.remember}>Remember me</label>
                </div>
            </form>
        </div>
    );
};

export default Login;