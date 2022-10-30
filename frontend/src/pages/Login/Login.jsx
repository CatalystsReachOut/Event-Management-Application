import React, {useState} from 'react'
import "./Login.css"
import email_icon from "../../assets/icons/email.png"
import pass_icon from "../../assets/icons/password.png"
import TextNIcon from '../../components/TextNIcon/TextNIcon'
import { ROUTES } from '../../routes/RouterConfig'
import axios from "axios"
import { useNavigate } from "react-router-dom";
const styles = {
    body: "login__body flex items-center justify-center h-screen bg-hero bg-no-repeat bg-cover bg-right-top bg-fixed font-openSans",
    login__container: "login__container flex flex-col items-center justify-around py-[60px] border-0 border-black px-[30px] bg-white rounded-[8px] shadow-login_shadow m-2 w-[35%] max-w-[420px]",
    login__title: "login__title text-left w-full",
    login__title_h1: "login__title--h1 text-5xl pb-0 font-bold",
    login__form: "login__form w-full pt-[60px]",
    RemFor_container: "flex justify-between items-center mt-[30px]",
    checkbox__container: "checkbox__container flex items-center",
    checkbox__box: "accent-font_orange",
    checkbox__label: "ml-1 checkbox__label",
    forgotPass__conatiner: "ml-auto",
    forgotPass__link: "forgotPass__link hover:underline hover:decoration-solid ",
    login__button: "login__button text-center w-full text-2xl font-semibold block mt-[30px] rounded-[8px] border-font_orange py-[10px] text-center bg-font_orange text-white transition-colors hover:bg-font_orange-hover hover:ease-in",
    signUp__container: "flex mt-[40px]",
    signUp__text: "",
    signup__link: "login__signup pl-2 font-semibold hover:underline hover:decoration-solid"
}

function Login() {
    const navigate=useNavigate();

    const [loginForm, setLoginForm] = useState({
        email : "",
        password : "",
        rememberMe : false
    })
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(loginForm)

        await axios.post('http://localhost:8080/api/login', {
      email:loginForm.email,
      password:loginForm.password
    }).then(res =>{
      console.log(res);
      console.log(res.data);
        navigate("/");
    }).catch(err=>{
     alert(err);
    })
    }

    const handleChange = (event) =>{
        const {name, value , type , checked} = event.target

        setLoginForm(prevState =>{
            
            return{
                ...prevState,
                [name] : type==="checkbox" ? checked : value
            }
        })
    };


    return (
        <div className={styles.body}>
            <div className={styles.login__container}>
                <div className={styles.login__title}>
                    <h1 className={styles.login__title_h1}>Log In</h1>
                </div>
                <form onSubmit={handleSubmit} className={styles.login__form}>

                    <TextNIcon
                        icon={email_icon}
                        type="email"
                        placeholder="Email address" 
                        name = "email"
                        value = {loginForm.email}
                        changehandler = {handleChange}
                    />
                    <TextNIcon
                        icon={pass_icon}
                        type="password"
                        placeholder="Password"
                        name = "password"
                        value = {loginForm.password}
                        changehandler = {handleChange}
                    />

                    <div className={styles.RemFor_container}>
                        <div className={styles.checkbox__container}>
                            <input type="checkbox" 
                                    id='rememberMe' className={styles.checkbox__box} 
                                    name = "rememberMe"
                                    onChange={handleChange}
                                    checked = {loginForm.rememberMe}

                            />
                            <label htmlFor="rememberMe" className={styles.checkbox__label}>Remember Me</label>
                        </div>
                        <div className={styles.forgotPass__conatiner}>
                            <a href="" className={styles.forgotPass__link}>Forgot Password?</a>
                        </div>
                    </div>

                    <button type="submit" className={styles.login__button}>Log In</button>
                </form>
                <div className={styles.signUp__container}>
                    <p className={styles.signUp__text}> Need an account?</p>
                    <a href={ROUTES.SignUp} className={styles.signup__link}>Sign Up</a>
                </div>
            </div>
        </div>
    )
}

export default Login