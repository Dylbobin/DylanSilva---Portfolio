import React from 'react'
import { PortfolioHeader } from './PortfolioHeader'
import { SectionAbout } from './SectionAbout'
import { SectionContact } from './SectionContact'
import { SectionHome } from './SectionHome'
import { SectionProjects } from './SectionProjects'

export const PortfolioWrapper = () => {
  return (
    <>
        <PortfolioHeader />
        <div className='section'>
            <SectionAbout />
            <SectionProjects />
            <SectionContact />
        </div>
    </>
  )
}
