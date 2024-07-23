import usePlayer from "../../hooks/usePlayer"
import CechaBox from "../CechaBox/CechaBox";
import lvlIcon from "./../../assets/lvl_icon.png"
import goldGalop from "./../../assets/galop.png"
import "./Header.css"

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
                <div className="player-main-info-lvlAndGalopy-item"><img src={lvlIcon} alt="lvl icon" />{player.lvl}</div>
                <div className="player-main-info-lvlAndGalopy-item"><img src={goldGalop} alt="gold galop" />{player.zloteGalopy}</div>
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