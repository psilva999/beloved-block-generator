import React from 'react'

const Gradient = () => {
  return (
    <div className='gradient'>
      <h1 className='titleGradient open'>Gradient</h1>

      <p>
        <button>Linear</button>
        <button>Radial</button>
      </p>

      <div className='angulos'> <h1>Ângulos</h1>
        <p>
          <button>0°</button>
          <button>45°</button>
          
          <button>90°</button>
          <button>135°</button>
          
          <button>180°</button>
          <button>225°</button>
          
          <button>270°</button>
          <button>315°</button>
        </p>
      </div>

      <article>
        <div>
          <h1>Color 1</h1>

          <p>
            <input type='color' name='gradient1' id='inputGradient1'/>

            <span>-</span>

            <label htmlFor="gradient1">#000000</label>
          </p>

          <div>
            <span>opacity</span>

            <input type='range' name='opacity1' id='opacity1'/>
          </div>
        </div>

        <div>
          <h1>Color 2</h1>

          <p>
            <input type='color' name='gradient2' id='inputGradient2'/>

            <span>-</span>

            <label htmlFor="gradient2">#000000</label>
          </p>

          <div>
            <span>opacity</span>

            <input type='range' name='opacity2' id='opacity2'/>
          </div>
          
        </div>
      </article>

      <article className='configuration-gradient'>
        <div></div>

        <p className='color1'>
          <button></button>
          <span>0</span>
        </p>

        <p className='color2'>
          <button></button>
          <span>100</span>
        </p>
      </article>
    </div>

  )
}

export default Gradient
