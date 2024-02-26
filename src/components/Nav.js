import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'
import logo from '../img/littlelemon_logo.png'
import ReorderIcon from '@mui/icons-material/Reorder';

export default function Nav() {

    const [isOpen,setIsOpen] = useState(false)
    function toggleNav() {
        setIsOpen(!isOpen)
    }



  return (
    <>
    
    <nav className={styles.navbar}>
        <div className={`styles.leftSide  id=${isOpen ? "open" : "close"}`}> 
            <img src={logo} alt="logo" height="50px" /> 
            <div className={styles.hiddenLinks}>
                <ul >
                    <li>
                        <NavLink className="nav2" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav2" to="/menu">Menu</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav2" to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav2" to="/about">About</NavLink>
                    </li>
                    
                
                </ul>
            </div>
        </div>

        <div className={styles.rightSide}>
                <ul >
                    <li>
                        <NavLink className="nav2" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav2" to="/menu">Menu</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav2" to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav2" to="/about">About</NavLink>
                    </li>
                </ul>

                <button onClick={toggleNav}>
                    <ReorderIcon />
                </button>
                
        </div>
        
        
    </nav>
    </>
  )
}
