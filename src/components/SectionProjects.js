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
                                <p>swiftUI<br /> rest of desc</p>
                                <a href='#'><FaExternalLinkAlt onClick={() => window.open("https://github.com/Dylbobin/Pawsitive---SwiftUI")}/></a>
                            </div>
                        </div>
                        <div className='project'>
                            <img src={taskItProject} />
                            <div className='layer'>
                                <h3>Task-It - iOS App</h3>
                                <p>swiftUI<br /> rest of desc</p>
                                <a href='#'><FaExternalLinkAlt onClick={() => window.open("https://github.com/Dylbobin/Task-It---SwitUI")}/></a>
                            </div>
                        </div>
                        <div className='project'>
                            <img src={quiznessProject} />
                            <div className='layer'>
                                <h3>Quizness - Web App</h3>
                                <p>JS/HTML/CSS<br /> rest of desc</p>
                                <a href='#'><FaExternalLinkAlt onClick={() => window.open("https://github.com/Dylbobin/Quizness")}/></a>
                            </div>
                        </div>
                        <div className='project'>
                            <img src={basicTodo} />
                            <div className='layer'>
                                <h3>Basic Todo - Web App</h3>
                                <p>JS/HTML/CSS<br /> rest of desc</p>
                                <a href='#'><FaExternalLinkAlt onClick={() => window.open("https://github.com/Dylbobin/Quizness")}/></a>
                            </div>
                        </div>
                        <div className='project'>
                            <img src={exhaustiveSearch} />
                            <div className='layer'>
                                <h3>Soccer Problem - Exhaustive Search</h3>
                                <p>Python<br /> rest of desc</p>
                                <a href='#'><FaExternalLinkAlt onClick={() => window.open("https://github.com/Dylbobin/Quizness")}/></a>
                            </div>
                        </div>
                        <div className='project'>
                            <img src={webScraping} />
                            <div className='layer'>
                                <h3>Newegg - Web Scraping</h3>
                                <p>Python<br /> rest of desc</p>
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
