import React from 'react'
import { copyCode, selectFontWeight } from '../Events/configButtonsAndInputs'

const TextCode = () => {
  return (
    <>
      <div class='text-color'>
        <h1>Text:</h1>

        <p>
          <input type='color' name='textColor' id='inputTextColor'/>

          <span>-</span>

          <label htmlFor="textColor" id='label-color'>#1F191A</label>
        </p>
      </div>

      <div className='large-range'> <h1>letter-spacing:</h1>
        <input type='range' name='letterSpacing' id='letterSpacing' min="0" max="10" steps="1"/>

        <span className='span-spacing'>0rem</span>
      </div>

      <div className='large-range'> <h1>font-size:</h1>
        <input type='range' name='fontSize' id='fontSize' min="1" max="30" steps="1"/>

        <span className='span-size'>3rem</span>
      </div>

      <div className='font-weight'>
        <h1>Font-weight:</h1>

        <select onInput={ selectFontWeight }>
          <option value='bolder'>bolder</option>
          <option value='normal'>normal</option>
        </select>
      </div>

      <code>
        <p>background:#D8D6D6;</p>
        <p>width:25rem;</p>
        
        <p>height:18rem;</p>
        <p>color:#1F191A;</p>

        <p>font-size:3rem;</p>
        <p>font-weight:bolder;</p>

        <p>border-radius:0.1rem;</p>
        <p className='p-off'>padding:0rem;</p>

        <p className='p-off'>letter-spacing:0rem;</p>
        <p className='p-off'>border:none;</p>

        <button onClick={ copyCode }>copy</button>
      </code>
    </>
  )
}

export default TextCode
