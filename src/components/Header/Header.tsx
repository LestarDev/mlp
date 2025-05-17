import usePlayer from "../../hooks/usePlayer"
import ShowButton from "../showButton/showButton";
// import CechaBox from "../CechaBox/CechaBox";
// import lvlIcon from "./../../assets/lvl_icon.png"
// import goldGalop from "./../../assets/galop.png"
import "./Header.css"
// import React from "react";
import lvlIcon from "./../../assets/LVL.svg"
import expIcon from "./../../assets/EXP.svg"
import goldIcon from "./../../assets/pieniazek.svg"
import wireWave from "./../../assets/druut.svg"
import ramka from "./../../assets/ramka.svg"
import { nazwyUmiejetnosci, rasyGraczy } from "../../config/config";

const Header = () => {
    const player = usePlayer();
    return <header className="characterStats">
        {/* <div className="player-main-info">
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
        <div className="stats" style={{"--howManyCechy": 6} as React.CSSProperties}>
            {
                // todo: autocount CechaBox for --howManyCechy
            }
            <div className="slider">
                <CechaBox cecha="Cialo" value={player.Cialo} showAs={1} />
                <CechaBox cecha="Umysl" value={player.Umysl} showAs={2} />
                <CechaBox cecha="Urok" value={player.Urok} showAs={3} />
                <CechaBox cecha="Cialo" value={player.Cialo} showAs={4} />
                <CechaBox cecha="Umysl" value={player.Umysl} showAs={5} />
                <CechaBox cecha="Urok" value={player.Urok} showAs={6} />
            </div>
            
        </div> */}
        <div className="player-main-info">
            <img src={player.imgLink=="" ? ramka : player.imgLink} alt="Avatar" />
            <div className="nameRaceAndA">
                <span>
                    {player.nick}
                </span>
                <span>
                    {rasyGraczy[player.idUzytkownika-1]}
                </span>
                <div>
                    <span>{nazwyUmiejetnosci[player.idUzytkownika-1]}</span>
                    <ShowButton className="smallBox" 
                    dataToPopOut={<span>"todo from main umiejka"</span>} 
                    innerData={<span>
                        {player.lvl>20?6:2+Math.floor(player.lvl/5)}
                    </span>} />
                </div>
            </div>
            <div className="expLvlHajs">
                <div><div><span>{player.lvl}</span></div><img src={lvlIcon} alt="lvl" /></div>
                <div><div><span>{player.exp}</span></div><img src={expIcon} alt="exp" /></div>
                <div><div><span>{player.zloteGalopy}</span></div><img src={goldIcon} alt="gold" /></div>
            </div>
        </div>
            <img src={wireWave} alt="drut" />
    </header>
}

export default Header