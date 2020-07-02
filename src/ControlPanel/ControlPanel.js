import React from 'react'
import { BsXCircleFill } from "react-icons/bs";

import './ControlPanel.css'

const controlPanel = props => {
    return (
        <div className="ControlPanelBox">
            <div className="ClearButton">
                <BsXCircleFill />
            </div>
        </div>
    )
}

export default controlPanel