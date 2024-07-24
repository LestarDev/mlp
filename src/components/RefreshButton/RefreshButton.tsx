import usePlayer from "../../hooks/usePlayer"

const RefreshButton = () => {

    const player = usePlayer();

    return <button onClick={()=>{
        player.rerollPage();
    }}>
        Refresh
    </button>
}

export default RefreshButton