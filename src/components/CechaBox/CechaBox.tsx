import cechyType from "../../config/types/cechyType"
import usePlayer from "../../hooks/usePlayer"

type cechaBoxType = {
    cecha: cechyType,
    value: number
}

const CechaBox = ({cecha, value}: cechaBoxType) => {
    
    const player = usePlayer();

    return <div>
        <span>{cecha}</span>
        <span>{player.recalculateToDices(value, false, true)}</span>
    </div>
}

export default CechaBox