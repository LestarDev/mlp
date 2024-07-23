import usePlayer from "../../hooks/usePlayer"
import CechaBox from "../CechaBox/CechaBox";
import lvlIcon from "./../../assets/lvl_icon.png"

const Header = () => {
    const player = usePlayer();
    return <header className="characterStats">
        <div className="player-main-info">
            <img src={player.imgLink} alt="Avatar" />
            <div className="player-main-info-expAndName">
                <p>{player.nick}</p>
                <span>EXP: {player.exp}</span>
            </div>
            <div className="player-main-info-lvlAndGalopy">
                <div><img src={lvlIcon} alt="lvl icon" />{player.lvl}</div>
                <div><img src="" alt="" />{player.calculateHP()}</div>
            </div>
        </div>
        <div className="stats">
            <CechaBox cecha="Cialo" value={player.Cialo} />
            <CechaBox cecha="Umysl" value={player.Umysl} />
            <CechaBox cecha="Urok" value={player.Urok} />
        </div>
    </header>
}

export default Header