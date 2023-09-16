import classes from './navbar.module.css'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import profileImg from '../../assets/profile.jpg'

const Navbar = () => {
  const [showModel, setShowModel] = useState(false)
  return (
    <div className={classes.container}>
       <div className={classes.wrapper}> 
        <div className={classes.left}> 
          <Link to='/'>Moments Blog</Link>
        </div>
        <ul className={classes.center}>
           <li className={classes.listItem}>Home</li>
           <li className={classes.listItem}>About</li>
           <li className={classes.listItem}>Contact</li>
           <li className={classes.listItem}>Categories</li>
        </ul>
       </div>
       <div className={classes.right}>
       <img onClick={()=> setShowModel(prev => !prev)} src={profileImg} className={classes.img}/>
       {showModel && 
       <div className={classes.model}>
       <Link to='/create'>Create Memories</Link>
       <span>Log out</span>
        </div>
        }
       </div>
    </div>
  )
}

export default Navbar