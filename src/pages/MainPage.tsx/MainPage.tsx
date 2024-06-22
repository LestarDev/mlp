import pageType from "../../config/types/pageType";
import usePlayer from "../../hooks/usePlayer"



const MainPage = ({loginOut}: pageType) => {

    const player = usePlayer();

    return <div>
        <p>{player.getRangaOfUmiejka(1, true)}</p>
        <p>{player.getRangaOfUmiejka(1)}</p>
        <p>{player.getRangaOfUmiejka(3, true)}</p>
        <button onClick={loginOut}>Logout</button>
    </div>
}

export default MainPage