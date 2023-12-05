import React from 'react'
import "./RightSide.css"
import Updates from '../updates/Updates'
import Customer from '../customer/Customer'

const RightSide = () => {
  return (
    <div className='RightSide'>
        <div>
            <h3>Actualizaciones</h3>
            <Updates />
        </div>
        <div>
            <h3>Revicion de Clientes</h3>
            <Customer />
        </div>
    </div>
  )
}

export default RightSide