import React, { useState } from 'react'
import AboutEvent from './Forms/AboutEvent/AboutEvent'
import BasicDetails from './Forms/BasicDetails/BasicDetails'
import Contact from './Forms/Contact/Contact'
import Navbar from '../../components/Navbar/Navbar'

const styles = {
    container : "text-lg",
    form_selector: "flex items-center justify-center text-1xl p-[0.5rem] pt-[0.5rem]  border-solid border-gray-300 border-y-[5px]",
    form: "",
    link: "ml-[7rem]"
}
function AddEvent() {

    const [details, setDetails] = useState(
        {
            event: "",
            date: "",
            description: "",
            venue: "",
            speakers: [],
            strength: 0,
            contact : 0,
            instagram : "",
            linkedIn: "" 
        }
    )

    const [form, setForm] = useState('basic')
    const handleForm = (event) => {
        event.preventDefault()
        const id = event.target.id

        setForm(id)

        console.log(id)
    }

    const handleData = (event) =>{
        const {name, value} = event.target

        setDetails(prevState =>{

            return {
                ...prevState,
                [name]: value
            }
        })
        console.table(details)
    }
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.form_selector}>
                <a href="" id='basic' onClick={handleForm} className={styles.link}>Basic Details</a>
                <a href="" id='aboutEvent' onClick={handleForm} className={styles.link}>About Event</a>
                <a href="" id='contact' onClick={handleForm} className={styles.link}>Contact</a>
            </div>
            <form className={styles.form}>
                {form === 'basic' ? <BasicDetails state={details} changeHandler={handleData} /> : ""}
                {form === 'aboutEvent' ? <AboutEvent state={details} changeHandler={handleData} /> : ""}
                {form === 'contact' ? <Contact state={details} changeHandler={handleData} /> : ""}
            </form>
        </div>
    )
}

export default AddEvent