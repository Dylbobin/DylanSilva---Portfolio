import React from 'react'
import { useState } from 'react'
import { FaPencil } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";

export const AboutTabHandler = () => {

    const [activeTab, setTab] = useState('skills')

    function handleClick(tabName) {
        setTab(tabName)
    }
  return (
    <>
    <div className='tabTitles'>
        <p className={activeTab === 'skills' ? 'tabLinks activeLink' : 'tabLinks'} onClick={() => handleClick('skills')}><LuBrainCircuit /> Skills</p>
        <p className={activeTab === 'experience' ? 'tabLinks activeLink' : 'tabLinks'} onClick={() => handleClick('experience')}><FaBuilding /> Experience</p>
        <p className={activeTab === 'education' ? 'tabLinks activeLink' : 'tabLinks'} onClick={() => handleClick('education')}><FaPencil /> Education</p>
    </div>
    <div className={activeTab === 'skills' ? 'tabContents activeTab' : 'tabContents'} id='skills'>
        <ul>
            <li><span>UI/UX</span><br />Designing Web/App interfaces</li>
            <li><span>Data</span><br />Data analysis and Personalized consumer products</li>
            <li><span>Languages</span><br />Python | swiftUI | C++ | HTML | CSS | JavaScript | SQL</li>
            <li><span>Interpersonal Skills</span><br />Leadership, Communication, Teamwork and Task Management</li>
        </ul>
    </div>
    <div className={activeTab === 'experience' ? 'tabContents activeTab' : 'tabContents'} id='experience'>
        <ul>
            <li><span>Internship</span><br />Enterprise and Core Apps/IT <br/>1st United Credit Union - Pleasanton, Ca</li>
            <li><span>Part-Time</span><br />Customer Service - eService Lead <br/>Titan Shops - Fullerton, Ca</li>
        </ul>
    </div>
    <div className={activeTab === 'education' ? 'tabContents activeTab' : 'tabContents'} id='education'>
        <ul>
            <li><span>School</span><br />California State University, Fullerton (2020-2024)</li>
            <li><span>GPA</span><br />3.51/4.0</li>
            <li><span>Awards</span><br />Dean's List: 2021, Fall 2022, 2023 <br/> Cum Laude</li>
            <li><span>Clubs</span><br />Pi Kappa Alpha (August 2020 - May 2024)<br/>Video Game Design Club (January 2021 - August 2022)</li>
        </ul>
    </div>
    </>
  )
}
