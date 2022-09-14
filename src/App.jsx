import React from 'react'
import './Css/app.min.css'

import Header from './Components/Header'
import Block from './Components/Block'
import Generator from './Components/Generator'

function App() {

  return (
    <>
      <main>
        <Header/>

        <section>
          <Block/>
          <Generator/>
        </section>
      </main>
    </>

  )
}

export default App
