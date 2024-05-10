import React from 'react'
import profileLogo from './images/PortfolioLogo.png'
import portfolioWording from './images/DylanSilvaWording.png'

export const PortfolioHeaderDisplayName = () => {
  return (
    <>
        <img className='profileLogo' src={portfolioWording} alt="Profile Logo"/>
    </>
  )
}