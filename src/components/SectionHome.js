import React from 'react'
import profileImage from './images/LinkedIn-Photo-cropped.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const SectionHome = () => {
  return (
    <>
        <h3 className='sectionHeader'>
            Home
            <p className='sectionContent'>
                <div>
                    <img className='profileImage' src={profileImage} alt="Profile Img" width={200} height={200} />
                    <h4>
                        Dylan Silva
                    </h4>
                    <div>
                        
                        <FaGithub className="profileIcon" onClick={() => window.open("https://github.com/Dylbobin")}/>
                        <FaLinkedin className="profileIcon" onClick={() => window.open("https://www.linkedin.com/in/dylan-silva-cpsc/")}/>
                    </div>
                </div>
            </p>
        </h3>
    </>
  )
}
