import umiejetnosciType from "../../config/types/umiejetnosciType"
import usePlayer from "../../hooks/usePlayer";
import diceIcon from "./../../assets/d20.png";
import "./Talent.css"

type talentComponentType = {
    umiejka: umiejetnosciType;
}

const Talent = ({umiejka}:talentComponentType) => {
    
    const player = usePlayer();

    // umiejka.ranga==1 ? "Znaczek" :
    // umiejka.ranga==2 ? "Podstawowy" :
    // umiejka.ranga==3 ? "Lvlowy" :
    // umiejka.ranga==4 ? "Mistrzowski" :
    // umiejka.ranga==5 ? "Arcymistrzowski" :
    // umiejka.ranga==6 ? "Pojedynczy" :
    // umiejka.ranga==7 ? "Polboski" :
    // umiejka.ranga==8 ? "Boski" :
    // umiejka.ranga==9 ? "Mutacyjny" :
    // umiejka.ranga==10 ? "Wlasciwosci" :
    // "Zerowy"

    return <div className={
        player.getRangaOfUmiejka(umiejka.ranga)+" singleTalent"
    }>
        <span>{umiejka.nazwa} </span>
        <span>{
            [1,2,4].includes(umiejka.ranga) ?
            player.recalculateToDices(umiejka.value) : 
            [6,9,10,11].includes(umiejka.ranga) ?
            "" : umiejka.value
        }</span>
        <img src={diceIcon} alt="[check]" className="diceIcon" />
    </div>
}

export default Talent 