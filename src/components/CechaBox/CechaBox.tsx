import React from "react"
import cechyType from "../../config/types/cechyType"
import usePlayer from "../../hooks/usePlayer"
import "./CechaBox.css"
import cialoIcon from "./../../assets/cialo.svg"

type cechaBoxType = {
    cecha: cechyType,
    value: number,
    showAs: number
}

const CechaBox = ({cecha, value, showAs}: cechaBoxType) => {
    
    const player = usePlayer();

    return <div className="cechaBox" style={{"--showAs": showAs} as React.CSSProperties}>
        {
            cecha=="Cialo" ?
            <img src={cialoIcon} alt="cialoIcon" /> :
            ''
        }
        <div>
            <span>{cecha}</span>
            <span>{player.recalculateToDices(value)}</span>
        </div>
    </div>
}

export default CechaBox