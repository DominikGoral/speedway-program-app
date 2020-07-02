import React from 'react'
import './TotalScore.css'

const totalScore = props => {
    return (
        <div className="totalScoreBox">
            <span className="totalScore">
                {props.HostsScore}-{props.GuestsScore}
            </span>
        </div>
    )
}

export default totalScore