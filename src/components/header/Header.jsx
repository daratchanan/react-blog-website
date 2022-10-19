import React from 'react'
import './header.css';
import logo from '../../assets/logo.svg'
import { nav } from '../../assets/data/data';
import { Link } from 'react-router-dom';
import User from './User';

export default function Header() {
   return (
      <>
         <header>
            <div className="scontainer flex">
               <div className="logo">
                  <img src={logo} alt="logo" width='50px' />
               </div>
               <nav>
                  <ul>
                     {nav.map(link => (
                        <li key={link.id} >
                           <Link to={link.url}>{link.text}</Link>
                        </li>
                     ))}
                  </ul>
               </nav>
               <div className="account flexCenter">
                  <User />
               </div>

            </div>
         </header>

      </>
   )
}
