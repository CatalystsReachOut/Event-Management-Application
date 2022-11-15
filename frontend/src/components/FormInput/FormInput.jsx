import React from 'react'

const styles = {
    main : "",
    label : "",
    inp_filed : ""
}
function FormInput(props) {
    return (
        <div className={styles.main}>
            <label htmlFor="inp_id" className={styles.label}>
                {props.label}
            </label>
            <input type={props.type}
                className={styles.inp_filed}
                id="inp_id"
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.changeHandler}
                pattern = {props.pattern}
            />
        </div>
    )
}

export default FormInput