import React from 'react'

const TextCode = () => {
  return (
    <>
      <div class='text-color'>
        <h1>Text:</h1>

        <p>
          <input type='color' name='textColor' id='inputTextColor'/>

          <span>-</span>

          <label htmlFor="textColor" id='label-color'>#000000</label>
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

        <select>
          <option value='bolder'>bolder</option>
          <option value='normal'>normal</option>
          <option value='lighter'>lighter</option>
          <option value='bold'>bold</option>
        </select>
      </div>

      <code>
        <p>border-radius:.2rem;</p>
        <p>font-size:2rem;</p>
        <p>text-transform:uppercase;</p>
        <p>border:.1rem solid black;</p>
        <p>font-weight:bolder;</p>
        <button>copy</button>
      </code>
    </>
  )
}

export default TextCode
