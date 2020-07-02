import React from 'react'
import './ResultsBox.css'

import TotalScore from './TotalScore/TotalScore'
import TeamRidersResults from './TeamRidersResults/TeamRidersResults'

const resultBox = props => {
    return (
        <div className="resultBox">
            <TeamRidersResults />
            <TotalScore />
            <TeamRidersResults />
        </div>
    )
}

export default resultBox