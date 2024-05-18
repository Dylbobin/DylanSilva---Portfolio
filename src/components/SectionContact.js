import React from 'react'
import contactHeader from './images/contactHeader.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import resume from './images/resume - Dylan Silva.APR.2024.pdf'

export const SectionContact = () => {
  return (
    <> 
    <div id='contact'>
        <div className='container'>
            <div className='row'>
                <div className='contactLeft'>
                    <div className='clearfix'>
                        <img className='sectionHeaderText contact' src={contactHeader}></img>
                    </div>
                    <p><FaRegPaperPlane className='contactSmallI'/><a href='mailto:dylansilva22@yahoo.com' onsubmit="return false">dylansilva22@yahoo.com</a></p>
                    <p><FaPhoneSquareAlt className='contactSmallI'/><a href='tel:+1 (925) 961-6337'>+1 (925) 961-6337</a></p>
                    <p></p><FaGithub className="profileIcon two" onClick={() => window.open("https://github.com/Dylbobin")} />
                    <FaLinkedin className="profileIcon two" onClick={() => window.open("https://www.linkedin.com/in/dylan-silva-cpsc/")} />
                    <a href={resume} download className='btn'> Download Resume </a>
                </div>
                <div className='contactRight'>
                    <form name='submit-to-google-sheet'>
                        <input type='text' name='Name' placeholder='Your Name' required></input>
                        <input type='text' name='Email' placeholder='name@example.com' required></input>
                        <textarea name='Message' rows='6' placeholder='Message'></textarea>
                        <button type='submit' className='btn two'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <p>Copyright © Dylan Silva 2024</p>
        </div>
    </div>
    <script src='contactFormScript.js'></script>
    </>
  )
}
