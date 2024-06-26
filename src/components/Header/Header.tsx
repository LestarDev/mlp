import usePlayer from "../../hooks/usePlayer"

const Header = () => {
    const player = usePlayer();
    return <header>
        <div className="player-main-info">
            <img src="" alt="" />
            <div className="player-main-info-expAndName">
                <p>{player.nick}</p>
                <span>EXP: {}</span>
            </div>
            <div className="player-main-info-lvlAndGalopy">
                <div><img src="" alt="" />{player.lvl}</div>
                <div><img src="" alt="" />{}</div>
            </div>
        </div>
    </header>
}

export default Header