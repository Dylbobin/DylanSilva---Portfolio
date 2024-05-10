import React from 'react'
import { PortfolioHeaderDisplayName } from './PortfolioHeaderDisplayName'
import { PortfolioHeaderText } from './PortfolioHeaderText'
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdRocket } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export const PortfolioHeader = () => {
  return (
    <>
        <div className='header'>
            <nav>
                <PortfolioHeaderDisplayName />
                <ul>
                    <li><a href="#header"><FaHome /> Home</a></li>
                    <li><a href="#about"><IoPersonSharp /> About</a></li>
                    <li><a href="#projects"><IoMdRocket /> Projects</a></li>
                    <li><a href="#contact"><FaPhone /> Contact</a></li>
                </ul>
            </nav>
        </div>
    </>
  )
}
