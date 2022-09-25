import React from 'react'
import { toggleLinearRadial, toggleGradientContainer, toggleAngles, gradientColors } from '../Events/gradient'

const Gradient = () => {
  window.addEventListener('load', toggleLinearRadial)
  window.addEventListener('load', toggleAngles)
  window.addEventListener('load', gradientColors)

  return (
    <div className='gradient close'>
      <h1 className='titleGradient' onClick={ toggleGradientContainer }>Gradient</h1>

      <p className='linear-radial'>
        <button className='blr button-linear active'>Linear</button>

        <button className='blr button-radial'>Radial</button>
      </p>

      <div className='angulos'> <h1>Ângulos</h1>
        <p className='container-angles'>
          <button value='0deg'>0°</button>
          <button value='45deg' className='active'>45°</button>
      
          <button value='90deg'>90°</button>
          <button value='135deg'>135°</button>
      
          <button value='180deg'>180°</button>
          <button value='225deg'>225°</button>
      
          <button value='270deg'>270°</button>
          <button value='315deg'>315°</button>
        </p>
      </div>

      <article className='color12'>
        <div> <h1>Color 1</h1>

          <p>
            <input type='color' name='gradient1' id='inputGradient1'/>
            <span>-</span>
            <label htmlFor="gradient1" id='label-gradient1'>#D8D6D6</label>
          </p>

          <div className='gg-t opacity-gradient'>
            <span>opacity</span>
            <input type='range' name='opacity1' id='opacity1'/>
          </div>

          <div className='gg-t toggle-gradient'> <span>gradient 1:</span>
            <input type='range' name='gradient1' id='gradient1' min="0" max="100" steps="1"/>

            <span className='span-gradient1 sg'>0</span>
          </div>
        </div>

        <div> <h1>Color 2</h1>
          <p>
            <input type='color' name='gradient2' id='inputGradient2'/>
            <span>-</span>
            <label htmlFor="gradient2" id='label-gradient2'>#D8D6D6</label>
          </p>

          <div className='gg-t opacity-gradient'>
            <span>opacity</span>
            <input type='range' name='opacity2' id='opacity2'/>
          </div>

          <div className='gg-t toggle-gradient'> <span>gradient 2:</span>
            <input type='range' name='gradient2' id='gradient2' min="0" max="100" steps="1"/>

            <span className='span-gradient2 sg'>100</span>
          </div>
        </div>

      </article>
    </div>

  )
}

export default Gradient
