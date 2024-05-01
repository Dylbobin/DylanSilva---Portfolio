import React from 'react'
import { PortfolioHeaderDisplayName } from './PortfolioHeaderDisplayName'
import { SectionHome } from './SectionHome'

export const PortfolioHeader = () => {
  return (
    <>
        <div className='header'>
            <PortfolioHeaderDisplayName />
            <button className='navigation-btn'>Home</button>
            <button className='navigation-btn'>About</button>
            <button className='navigation-btn'>Projects</button>
            <button className='navigation-btn'>Contact</button>
        </div>
        <div className='section'>
            <SectionHome />
        </div>
    </>
  )
}
