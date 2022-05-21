import React, { useEffect } from 'react'
import './nav.css'
import logo from '../../assets/logo.png'

const Nav = () => {
    const[show, handleShow] = React.useState(false)

    const transistionNavbar = () => {
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transistionNavbar);
        return () => window.removeEventListener('scroll', transistionNavbar);
      }, [])
    

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav__contents ">
            <img 
                className='nav__logo'
                src={logo}
                alt="/" 
            />
        
            <img 
                className='nav__avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="/" 
            />

        </div>
       
    </div>
  )
}

export default Nav