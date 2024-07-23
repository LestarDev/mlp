import cechyType from "../../config/types/cechyType"
import usePlayer from "../../hooks/usePlayer"
import "./CechaBox.css"

type cechaBoxType = {
    cecha: cechyType,
    value: number
}

const CechaBox = ({cecha, value}: cechaBoxType) => {
    
    const player = usePlayer();

    return <div className="cechaBox">
        <span>{cecha}</span>
        <span>{player.recalculateToDices(value)}</span>
    </div>
}

export default CechaBox