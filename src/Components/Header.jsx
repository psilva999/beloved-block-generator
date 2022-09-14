import React from 'react'
import Github from '../assets/svg/1-github.svg'

const Header = () => {
  return (
    <header>
      <h1>Beloved Block</h1>
      <span>Create your own authentic container</span>

      <a href='https://github.com/psilva999'>
        <img src={ Github } alt='Github'/>
      </a>
    </header>
  )
}

export default Header
