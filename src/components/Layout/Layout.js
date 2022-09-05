import React from 'react';
import {Outlet} from 'react-router-dom';
import { Footer } from '../../container';
import {Navbar} from '../../components'

const Layout = () => {
  return (
    <>
        <header>
            {/* <NavLink to="/">Tavern</NavLink>
            <NavLink to='/restaurant'>Restaurant</NavLink>
            <NavLink to='/catering'>Catering</NavLink>
            <NavLink to='/about'>About us</NavLink> */}
            <Navbar/>
        </header>

        <Outlet/>

        <footer>
            <div>
                <Footer/>
            </div>
        </footer>
    </>
    
  )
}

export {Layout}