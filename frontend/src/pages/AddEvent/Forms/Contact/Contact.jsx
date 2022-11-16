import React from 'react'
import FormInput from '../../../../components/FormInput/FormInput'

//need to add icons  
function Contact(props) {
  return (
    <>
      <FormInput
        type="tel"
        placehodler="10 digit only"
        label="Contact"
        name="contact"
        value={props.state.contact}
        changeHandler={props.changeHandler}
        pattern = "[0-9]{10}"
      />
      <FormInput
        type="url"
        placehodler="LinkedIn"
        label="LinkedIn"
        name="linkedIn"
        value={props.state.linkedIn}
        changeHandler={props.changeHandler}
      />
      <FormInput
        type="url"
        placehodler="Instagram"
        label="Instagram"
        name="instagram"
        value={props.state.instagram}
        changeHandler={props.changeHandler}
      />
    </>
  )
}

export default Contact