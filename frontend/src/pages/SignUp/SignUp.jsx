import React , {useState} from 'react'
import TextNIcon from '../../components/TextNIcon/TextNIcon'
import personIcon from "../../assets/icons/human_placeholder.png"
import email_icon from "../../assets/icons/email.png"
import pass_icon from "../../assets/icons/password.png"
import { useNavigate } from "react-router-dom";
import './SignUp.css'
import { ROUTES } from '../../routes/RouterConfig'
import axios from 'axios'

const styles = {
    body: "signUp_body flex items-center justify-center h-screen bg-hero bg-no-repeat bg-cover bg-right-top bg-fixed font-openSans",
    container: "signUp_container flex flex-col items-center justify-around py-[60px] border-0 border-black px-[30px] bg-white rounded-[8px] shadow-login_shadow m-2 w-[35%] max-w-[425px]",
    title_div: "signUp_title_div text-left w-full",
    title_h1: "text-5xl pb-0 font-bold",
    form : "w-full pt-[60px]",
    signUp_button : "text-center w-full text-2xl font-semibold block mt-[30px] rounded-[8px] border-font_orange py-[10px] text-center bg-font_orange text-white transition-colors hover:bg-font_orange-hover hover:ease-in",
    login_container : "flex mt-[40px]",
    login_text : "",
    login_link : "pl-2 font-semibold hover:underline hover:decoration-solid"
}


function SignUp() {
    
    const navigate=useNavigate();

    const [signUpForm , setSignUpForm] = useState({
        firstname : "",
        lastname : "",
        email : "",
        password : "",
    })

    const handleSubmit = async (event) =>{
        event.preventDefault()
        console.log(signUpForm)

       await axios.post('http://localhost:8080/api/signup',{
        firstname:signUpForm.firstname,
        lastname:signUpForm.lastname,
        email:signUpForm.email,
        password:signUpForm.password
        }).then( res => {
        console.log(res);
        console.log(res.data);
                navigate("/");
        }).catch(err =>{
            alert(err);
        });
    }

    const handleChange = (event) =>{
        const {name , value} = event.target 

        setSignUpForm(prevState =>{
            return{
                ...prevState,
                [name] : value
            }
        })
    } 
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.title_div}>
                    <h1 className={styles.title_h1}>Sign Up</h1>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <TextNIcon
                        type="text"
                        icon={personIcon}
                        placeholder="Firstname" 
                        name = "firstname"
                        value = {signUpForm.firstname}
                        changehandler = {handleChange}
                    />
                    <TextNIcon
                        type="text"
                        icon={personIcon}
                        placeholder="Lastname" 
                        name = "lastname"
                        value = {signUpForm.lastname}
                        changehandler = {handleChange}
                    />
                    <TextNIcon
                        type="email"
                        icon={email_icon}
                        placeholder="Email address" 
                        name = "email"
                        value = {signUpForm.email}
                        changehandler = {handleChange}
                    />
                    <TextNIcon
                        type="password"
                        icon={pass_icon}
                        placeholder="Password" 
                        name = "password"
                        value = {signUpForm.password}
                        changehandler = {handleChange}
                    />

                    <button className={styles.signUp_button}>Sign Up</button>
                </form>
                <div className={styles.login_container}>
                    <p className={styles.login_text}> Already have an account?</p>
                    <a href={ROUTES.Login} className={styles.login_link}>Log In</a>
                </div>
            </div>

        </div>
    )
}

export default SignUp