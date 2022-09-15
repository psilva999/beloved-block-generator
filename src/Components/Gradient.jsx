import React from 'react'

const Gradient = () => {
  return (
    <div className='gradient'>
      <button className='openGradient open'>Gradient</button>

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
    </div>

  )
}

export default Gradient
