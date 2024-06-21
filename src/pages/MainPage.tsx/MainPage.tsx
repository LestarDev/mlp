import usePlayer from "../../hooks/usePlayer"

const MainPage = () => {

    const player = usePlayer();

    return <div>
        <p>{player.getRangaOfUmiejka(1, true)}</p>
        <p>{player.getRangaOfUmiejka(1)}</p>
        <p>{player.getRangaOfUmiejka(3, true)}</p>
    </div>
}

export default MainPage