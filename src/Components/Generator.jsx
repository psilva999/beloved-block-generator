import React from 'react'
import Gradient from './Gradient'

const Generator = () => {
  return (
    <article className='generator'>
      
      <div>
        <h1>Background:</h1>

        <p>
          <input type='color' name='pColor' id='sColor'/>

          <span>-</span>

          <label htmlFor="pColor">#000000</label>
        </p>

        <Gradient/>
      </div>
    </article>
  )
}

export default Generator
