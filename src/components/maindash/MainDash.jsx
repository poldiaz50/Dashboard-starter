import React from 'react'
import "./MainDash.css"
import Cards from '../cards/Cards'
import Table from '../tables/Table'

const MainDash = () => {
  return (
    <div className='MainDash'>
        <h1>Panel de Control</h1>
        <Cards />
        <Table />
    </div>
  )
}

export default MainDash