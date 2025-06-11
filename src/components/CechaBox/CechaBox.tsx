import React from "react"
import cechyType from "../../config/types/cechyType"
import usePlayer from "../../hooks/usePlayer"
import "./CechaBox.css"
import cialoIcon from "./../../assets/cialo.svg"
import umyslIcon from "./../../assets/umysl.svg"
import urokIcon from "./../../assets/urok.svg"

type cechaBoxType = {
    cecha: cechyType,
    value: number,
    showAs: number,
    setCecha?: React.Dispatch<React.SetStateAction<cechyType | "">>
    cechaToSet?: cechyType | ""
}

const CechaBox = ({cecha, value, showAs, setCecha, cechaToSet}: cechaBoxType) => {
    
    const player = usePlayer();

    return <div className="cechaBox" style={{"--showAs": showAs} as React.CSSProperties} onClick={()=>{
        if(setCecha)
            
        if(cecha==cechaToSet){
            setCecha("");
        }else
        setCecha(cecha);
            
        
        
        
    }}>
        {showAs==0?(
            cecha=="Cialo" ?
            <img src={cialoIcon} alt="cialoIcon" /> :
            cecha == "Urok"?
            <img src={urokIcon} alt="urokIcon" /> :
            <img src={umyslIcon} alt="umyslIcon" />
        ):""}
        <div>
            <span>{cecha}</span>
            <span>{player.recalculateToDices(value)}</span>
        </div>
    </div>
}

export default CechaBox