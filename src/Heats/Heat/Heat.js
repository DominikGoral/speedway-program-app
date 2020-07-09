import React from 'react'
import './Heat.css'

import Gate from './Gate/Gate'

const heat = props => {
    return (
        <div className="HeatBox">
            <Gate color='red' />
            <Gate color='blue' />
            <Gate color='white' />
            <Gate color='yellow' />
        </div>
    )
}

export default heat