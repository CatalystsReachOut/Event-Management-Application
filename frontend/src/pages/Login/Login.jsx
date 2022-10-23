import React from 'react'
import Logo from '../../components/Logo/Logo'
import "./Login.css"
import email_icon from "../../assets/icons/email.png"
import pass_icon from "../../assets/icons/password.png"

const styles = {
    body: "login__body flex items-center justify-center h-screen bg-hero bg-no-repeat bg-cover bg-right-top bg-fixed font-openSans",
    login__container: "login__container flex flex-col items-center justify-around py-16 border-0 border-black px-4 h-3/4 bg-white rounded-2xl shadow-login_shadow m-2",
    login__title: "login__title text-left w-96", 
    login__title_h1: "login__title--h1 text-5xl pb-0 font-bold",
    login__form: "login__form",
    email_div: "emila_div flex justify-around ",
    email_label: "email_label",
    email_icon: 'mr-2',
    email: "login__username border-b-2 border-font_orange block py-1 mb-5 px-1 w-full pb-3 focus:outline-none",
    password_div: "password_div flex justify-around mb-2",
    password_icon: "mr-2",
    password: "login__password border-b-2 border-font_orange block py-1 mb-5 px-1 w-full pb-3 focus:outline-none",
    checkbox__container: "inline ",
    checkbox__box: "accent-font_orange",
    checkbox__label: "ml-1",
    forgotPass__conatiner: "inline right-0 ml-28 ",
    forgotPass__link : "forgotPass__link hover:underline hover:decoration-solid ",
    login__button: "login__button border-black border-2 text-center w-96 text-2xl font-semibold block mt-6 rounded-2xl border-font_orange p-0.5 text-center bg-font_orange text-white transition-colors hover:bg-font_orange-hover hover:ease-in",
    signUp__container : "flex",
    signUp__text : "",
    signup__link: "login__signup pl-2 font-semibold hover:underline hover:decoration-solid" 
}

function Login() {
    return (
        <div className={styles.body}>
            <div className={styles.login__container}>
                <div className={styles.login__title}>
                    <h1 className={styles.login__title_h1}>Log In</h1>
                </div>
                <form action="" className={styles.login__form}>
                    <div className={styles.email_div}>
                        <label htmlFor="email" className={styles.email_label}>
                            <img src={email_icon} alt="email_icon" className={styles.email_icon} />
                        </label>
                        <input type="email" className={styles.email} id="email" placeholder='Email address' />
                    </div>
                    <div className={styles.password_div}>
                        <label htmlFor="email" className={styles.password_label}>
                            <img src={pass_icon} alt="password_icon" className={styles.password_icon} />
                        </label>
                        <input type="password" className={styles.password} id="password" placeholder='Password' />
                    </div>
                    <div className={styles.checkbox__container}>
                        <input type="checkbox" id='rememberMe' className={styles.checkbox__box} />
                        <label htmlFor="rememberMe" className={styles.checkbox__label}>Remember Me</label>
                    </div>
                    <div className={styles.forgotPass__conatiner}>
                        <a href="" className={styles.forgotPass__link}>Forgot Password?</a>
                    </div>
                    <button type="submit" className={styles.login__button}>Log In</button>
                </form>
                <div className={styles.signUp__container}>
                    <p className={styles.signUp__text}> Need an account?</p>
                    <a href="" className={styles.signup__link}>Sign Up</a>
                </div>
            </div>
        </div>
    )
}

export default Login