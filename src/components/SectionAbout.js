import React from 'react'
import linkedInCropped from './images/LinkedIn-Photo-cropped.png'
import aboutHeader from './images/qboutHeader.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AboutTabHandler } from './AboutTabHandler';

export const SectionAbout = () => {
  return (
    <>
    <div id='about'>
        <div className='container'>
            <div className='row'>
            <div className='about-col-1'>
                <img className='profileLogo' src={linkedInCropped} alt="LinkedIn Logo" />
                <FaGithub className="profileIcon" onClick={() => window.open("https://github.com/Dylbobin")} />
                <FaLinkedin className="profileIcon" onClick={() => window.open("https://www.linkedin.com/in/dylan-silva-cpsc/")} />
            </div>
                <div className='about-col-2'>
                    <h1 className='subtitle'>
                        <div className='clearfix'>
                        <img className='sectionHeaderText' src={aboutHeader}></img>
                        </div>
                    </h1>
                        <p>
                        Computer science major with experience working across the full-stack of software development. I’m looking for a role where I can grow and learn from experienced team members while drawing on project experience I have already successfully executed. Currently interested in iOS Development, Data Science, and Web Development.
                        </p>
                    <AboutTabHandler />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
