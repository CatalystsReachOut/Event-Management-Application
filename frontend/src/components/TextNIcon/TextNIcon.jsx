import React from 'react'

const styles = {
    main: "flex justify-center items-center mb-6 border-b-2 border-font_orange font-openSans",
    label: "",
    icon :"mr-2",
    inp_filed : "px-1 w-full py-3 focus:outline-none"
}

function TextNIcon(props) {
    return (
        <div className={styles.main}>
            <label htmlFor="inp_id" className={styles.label}>
                <img src={props.icon} alt="icon" className={styles.icon} />
            </label>
            <input type={props.type} 
                   className={styles.inp_filed} 
                   id="inp_id" 
                   placeholder={props.placeholder} 
                   name = {props.name} 
                   value = {props.value} 
                   onChange = {props.changehandler}
            />
        </div>
    )
}

export default TextNIcon