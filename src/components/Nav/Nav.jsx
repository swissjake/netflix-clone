import React, { useEffect } from 'react'
import './nav.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const[show, handleShow] = React.useState(false)
    const navigate = useNavigate();

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
                onClick={() => navigate('/')} 
                className='nav__logo'
                src={logo}
                alt="/" 
            />
        
            <img 
                onClick={() => navigate('/profile')}
                className='nav__avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="/" 
            />

        </div>
       
    </div>
  )
}

export default Nav