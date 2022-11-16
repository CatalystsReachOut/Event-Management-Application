import React from 'react'
import Logo from '../Logo/Logo'

const styles = {
  container: "flex flex-row items-center justify-between w-full shadow-xl h-[12vh] px-[1rem] ",
  logo: "",
  links: "flex items-end justify-baseline h-full",
  link : "pl-[1rem] text-[1.5rem]"
}


function Navbar() {
  return (
    <nav className={styles.container}>
        <Logo classes={styles.logo}/>
        <div className={styles.links}>
          <a href="" className={styles.link}>Home</a>
          <a href="" className={styles.link}>Events</a>
          <a href="" className={styles.link}>Contact</a>
        </div>
    </nav>
  )
}

export default Navbar