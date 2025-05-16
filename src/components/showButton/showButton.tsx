import { useState } from "react"
import "./showButton.css"

const ShowButton = ({className, innerData, dataToPopOut}: {className: string, innerData: JSX.Element, dataToPopOut: JSX.Element}) => {
    
    const [classToShow, setClassTOShow] = useState(false)
    
    return <>
    <button className={`${className} ${classToShow ? "showedButton" : "toShowButton"}`} 
    onClick={()=>setClassTOShow(preV=>!preV)}>
        {innerData}
    </button>
    <div>
        <div className="backGround"></div>
        <div>
            <div className="backGround"></div>
            <button onClick={()=>setClassTOShow(false)}>x</button>
            {dataToPopOut}
            <div className="backGround"></div>
        </div>
        <div className="backGround"></div>
    </div>
    </>
}

export default ShowButton


// BsSearchHeart
// RiHomeHeartLine
// PiListHeart
// BsBagHeart