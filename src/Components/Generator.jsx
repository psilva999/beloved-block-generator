import React from 'react'

import Gradient from './Gradient'
import TextCode from './TextCode'

import BorderBottom from '../assets/svg/3-border-bottom.svg'
import BorderTop from '../assets/svg/4-border-top.svg'

import BorderLeft from '../assets/svg/5-border-left.svg'
import BorderRight from '../assets/svg/6-border-right.svg'

import { border, colorsHexadecimal, configBorder, copyColor, toggleLargeRange } from '../Events/configButtonsAndInputs'

const Generator = () => {
  window.addEventListener('load', configBorder)
  window.addEventListener("load", toggleLargeRange)
  window.addEventListener("load", colorsHexadecimal)
  window.addEventListener("load", copyColor)

  return (
    <article className='generator'>
      
      <div>
        <h1>Background:</h1>

        <p>
          <input type='color' name='background' id='inputBackground'/>

          <span>-</span>

          <label htmlFor="background" id='label-background'>#D8D6D6</label>
        </p>

        <Gradient/>
      </div>

      <div className='large-range'> <h1>Width:</h1>
        <input type='range' name='width' id='width' min="1" max="25" steps="1"/>

        <span className='span-width'>25rem</span>
      </div>

      <div className='large-range'> <h1>Height:</h1>
        <input type='range' name='height' id='height' min="1" max="18" steps="1"/>

        <span className='span-height'>18rem</span>
      </div>

      <section className='normal-range' onChange={ border }> <h1>Border:</h1>
        <div className='wrap-border'>
          <p>
            <input type='range' name='border' id='border' min="0" max="10" steps="1"/>
            <span className='valueBorder'>0rem</span>
          </p>

          <select>
            <option value='solid'>solid</option>
            <option value='dashed'>dashed</option>
            <option value='dotted'>dotted</option>
            <option value='double'>double</option>
          </select>

          <p className='color-acessa'>
            <input type='color' name='border-background' id='inputBorder'/>
            <span>-</span>
            <label htmlFor="borderBackground" id='label-border-background'>#000000</label>
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
        <input type='range' name='border-radius' id='border-radius' min="0" max="100" steps="1"/>

        <span className='span-radius'>.1rem</span>
      </div>

      <div className='large-range'> <h1>Padding:</h1>
        <input type='range' name='padding' id='padding' min="0" max="10" steps="1"/>

        <span className='span-padding'>0rem</span>
      </div>

      <TextCode/>
    </article>

  )
}

export default Generator
