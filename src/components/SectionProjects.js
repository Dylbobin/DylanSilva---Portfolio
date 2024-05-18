import React from 'react'
import projectsHeaderText from './images/projectsHeadertext.png'
import pawsitiveProject from './images/pawsitiveProject.png'
import quiznessProject from './images/quizneeesProject.png'
import taskItProject from './images/taskItProject.png'
import basicTodo from './images/projectBasicTodo.png'
import exhaustiveSearch from './images/projectExhaustiveSearch.png'
import webScraping from './images/projectWebscrapingNewegg.png'
import { FaExternalLinkAlt } from "react-icons/fa";

export const SectionProjects = () => {
  return (
    <>
        <div id='projects'>
            <div className='container'>
                <h1 className='subtitle'>
                    <div className='clearfix'>
                        <img className='sectionHeaderText projects' src={projectsHeaderText}></img>
                    </div>
                    <div className='projectList'>
                        <div className='project'>
                            <img src={pawsitiveProject} />
                            <div className='layer'>
                                <h3>Pawsitive - iOS App</h3>
                                <p>swiftUI<br />Senior Capstone Project at California State University Fullerton.  My first large scale project using SwiftUI including various features like MapKit, Firebase/Firestore, Navigation Buttons, User Inputted Dogs, and a clean UI.</p>
                                <a href='#'><FaExternalLinkAlt onClick={() => window.open("https://github.com/Dylbobin/Pawsitive---SwiftUI")}/></a>
                            </div>
                        </div>
                        <div className='project'>
                            <img src={taskItProject} />
                            <div className='layer'>
                                <h3>Task-It - iOS App</h3>
                                <p>swiftUI<br />Based off of the reminders app on iPhone, Task-It implements basic features of SwiftUI including Navigation links, forms, priority lists, and ability to edit the reminders.</p>
                                <a href='#'><FaExternalLinkAlt onClick={() => window.open("https://github.com/Dylbobin/Task-It---SwitUI")}/></a>
                            </div>
                        </div>
                        <div className='project'>
                            <img src={quiznessProject} />
                            <div className='layer'>
                                <h3>Quizness - Web App</h3>
                                <p>JS/HTML/CSS<br />My first JavaScript project based on making a variety of quizzes, randomizing questions, showing incorrect/correct answers, and providing users with their score.  Very basic, but was a learning project for myself.</p>
                                <a href='#'><FaExternalLinkAlt onClick={() => window.open("https://github.com/Dylbobin/Quizness")}/></a>
                            </div>
                        </div>
                        <div className='project'>
                            <img src={basicTodo} />
                            <div className='layer'>
                                <h3>Basic Todo - Web App</h3>
                                <p>JS/HTML/CSS<br />A basic todo app, this time in React.js.  This was my first put together project in JavaScript with a clean interface and good user experience.</p>
                                <a href='#'><FaExternalLinkAlt onClick={() => window.open("https://github.com/Dylbobin/Quizness")}/></a>
                            </div>
                        </div>
                        <div className='project'>
                            <img src={exhaustiveSearch} />
                            <div className='layer'>
                                <h3>Soccer Problem - Exhaustive Search</h3>
                                <p>Python<br />Created in algorithms, the soccer problem is the amount of routes you are able to take to reach the goal.</p>
                                <a href='#'><FaExternalLinkAlt onClick={() => window.open("https://github.com/Dylbobin/Quizness")}/></a>
                            </div>
                        </div>
                        <div className='project'>
                            <img src={webScraping} />
                            <div className='layer'>
                                <h3>Newegg - Web Scraping</h3>
                                <p>Python<br />Using beautiful soup bs4, this webscraper takes in the type of item you would like to scrape off Newegg and finds items within the right criteria and price range.</p>
                                <a href='#'><FaExternalLinkAlt onClick={() => window.open("https://github.com/Dylbobin/Quizness")}/></a>
                            </div>
                        </div>
                    </div>
                    <a href='#' onClick={() => window.open("https://github.com/Dylbobin?tab=repositories")} className='btn'>See More</a>
                </h1>
            </div>
        </div>
    </>
  )
}
