import React from 'react'
import "./Logo.css"

function Logo(props) {
  return (
    <h1 className={'font-normal text-4xl text-font_orange logo' +" " + props.classes}>
        CLUB
    </h1>
  )
}

export default Logo