import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {

  const [isNavShowing , setIsNavShowing] = useState(window.innerWidth > 800 ? true : false)

  const closeNavHandler = () => {
    if(window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  }

  return (
    <nav>
      <div className="container nav_container">

        <Link to={"/"} className='nav_logo' onClick={closeNavHandler}>
          IndiLogs.
        </Link>

        {isNavShowing && <ul className="nav_menu">
          <li><Link to="/profile" onClick={closeNavHandler}>Ayush P.S</Link></li>
          <li><Link to="/create" onClick={closeNavHandler}>Create Post</Link></li>
          <li><Link to="/authors" onClick={closeNavHandler}>Authors</Link></li>
          <li><Link to="/logout" onClick={closeNavHandler}>Logout</Link></li>
        </ul>}

        <button className='nav_toggle-btn' onClick={() => setIsNavShowing(!isNavShowing)}>
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>

      </div>
    </nav>
  )
}

export default Header