import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <NavLink to={'/counter'}>Counter</NavLink>
        <NavLink to={'/users'}>Users</NavLink>        
    </>
  )
}

export default NavBar