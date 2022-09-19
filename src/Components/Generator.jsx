import React from 'react'

import Gradient from './Gradient'
import TextCode from './TextCode'

import BorderBottom from '../assets/svg/3-border-bottom.svg'
import BorderTop from '../assets/svg/4-border-top.svg'

import BorderLeft from '../assets/svg/5-border-left.svg'
import BorderRight from '../assets/svg/6-border-right.svg'

import { configBorder } from '../Events/configBlock'

const Generator = () => {
  window.addEventListener('load', configBorder)

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

      <div className='large-range'> <h1>Width:</h1>
        <input type='range' name='width' id='width'/>

        <span>.5rem</span>
      </div>

      <div className='large-range'> <h1>Height:</h1>
        <input type='range' name='height' id='height'/>

        <span>.5rem</span>
      </div>

      <section className='normal-range'> <h1>Border:</h1>
        <div className='wrap-border'>
          <p>
            <input type='range' name='border' id='border'/>
            <span className='valueBorder'>0rem</span>
          </p>

          <select>
            <option value='solid'>solid</option>
            <option value='dashed'>dashed</option>
            <option value='dotted'>dotted</option>
            <option value='double'>double</option>
            <option value='groove'>groove</option>
          </select>

          <p className='color-acessa'>
            <input type='color' name='border-background' id='inputBorder'/>
            <span>-</span>
            <label htmlFor="border-background">#000000</label>
          </p>

          <div className='ajuste-bordas'>
            <button className='bTop'>
              <img src={ BorderTop }/> </button>
            <button className='bRight'>
              <img src={ BorderRight }/> </button>
            
            <button className='bBottom'>
              <img src={ BorderBottom }/> </button>
            <button className='bLeft'>
              <img src={ BorderLeft }/> </button>
          </div>

        </div>
      </section>

      <div className='large-range'> <h1>Border-radius:</h1>
        <input type='range' name='border-radius' id='border-radius'/>

        <span>0rem</span>
      </div>

      <div className='large-range'> <h1>Padding:</h1>
        <input type='range' name='padding' id='padding'/>

        <span>0rem</span>
      </div>

      <TextCode/>
    </article>

  )
}

export default Generator
