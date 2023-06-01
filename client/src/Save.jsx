import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/Save.scss'

const Save = () => {
  return (
    <div className='save'>
            <div className='container-save'>
                <div className='minititle-save'>Save the recipes you like</div>
                <div className='info-save'>Collect your favorites and save for others to see!</div>
                <Link className='explore-save'>Search</Link>
            </div>
    </div>
  )
}

export default Save