
import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
function Navbar(props) {
    return (
        <>
             <nav className='navbar bg-primary text-white pb-0'>
                          <h1>
                              
                              <i className={props.icon}/>&nbsp;
                              
                              {props.title}
                              
                          </h1> 


                          <ul>
                                <li >
                                      <Link to='/'>Home</Link>
                                </li>


                                <li>
                                      <Link to='/about'>About</Link>
                                </li>
                          </ul>
                  </nav>
        </>
    )
}

Navbar. propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

export default Navbar
