import React from "react"
import cechyType from "../../config/types/cechyType"
import usePlayer from "../../hooks/usePlayer"
import "./CechaBox.css"

type cechaBoxType = {
    cecha: cechyType,
    value: number,
    showAs: number
}

const CechaBox = ({cecha, value, showAs}: cechaBoxType) => {
    
    const player = usePlayer();

    return <div className="cechaBox" style={{"--showAs": showAs} as React.CSSProperties}>
        <span>{cecha}</span>
        <span>{player.recalculateToDices(value)}</span>
    </div>
}

export default CechaBox