import React from 'react'
import './Gate.css'

const gate = props => {
    return (
        <div className="gateBox">
            <div className="gateColor" style={{ border: `4px solid ${props.color}` }}>
                
            </div>
            <div className="rider">
                <p>B.Zmarzlik</p>
            </div>
            <div className="riderSubstitution">
                <p>J.Kołodziej</p>
            </div>
            <div className="points">
                3
            </div>
        </div>
    )
}

export default gate