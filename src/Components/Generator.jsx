import React from 'react'
import Gradient from './Gradient'

const Generator = () => {
  return (
    <article className='generator'>
      
      <div>
        <h1>Background:</h1>

        <p>
          <input type='color' name='background' id='inputBackground'/>

          <span>-</span>

          <label htmlFor="background">#000000</label>
        </p>

        <Gradient/>
      </div>
    </article>
  )
}

export default Generator
