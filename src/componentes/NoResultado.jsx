import React from 'react'
import lupa from '../images/lupa.png'

function NoResultado({resultado}) {
  return (
    <>
    {resultado && (
    <div className='sinresultado'>
      <div>
      <img src={lupa} alt="" />
        <span>Sorry! No result found.</span>
        <p>Please, try:</p>
        <ul>
            <li>Using fever keywords.</li>
            <li>Using different keywords.</li>
            <li>Removing your filters.</li>
        </ul>

        </div>
    </div>)
    }
    </>
    
  )
}

export default NoResultado