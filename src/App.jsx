import React from 'react'
import { Link } from 'react-scroll'
import './Css/app.min.css'

import Header from './Components/Header'
import Block from './Components/Block'
import Generator from './Components/Generator'

import { voltaProTopo } from './Events/voltaProTopo'

function App() {
  window.addEventListener('load', voltaProTopo)
  window.addEventListener('resize', voltaProTopo)
  window.addEventListener('scroll', voltaProTopo)

  return (
    <>
      <main>
        <Header/>

        <section>
          <Block/>
          <Generator/>
        </section>
      </main>

      <Link activeClass="active"
          to='top'
          spy={ true }
          smooth={ true }
          offset={ -145 }
          duration={ 600 }
          className='link-scroll'>

          <button className='volta-pro-topo'>^</button>
      </Link>

      <div className='gradient-effect'></div>
    </>

  )
}

export default App
