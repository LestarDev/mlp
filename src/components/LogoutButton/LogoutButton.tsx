import { loginPageID } from "../../config/config";
import pageType from "../../config/types/pageType";
import usePlayer from "../../hooks/usePlayer";

const LogoutButton = ({setPage}: pageType) => {

    const player = usePlayer();

    return <button onClick={()=>{
        document.title="Mlp - login";
        player.clear();
        setPage(loginPageID);
    }}>Logout</button>
}

export default LogoutButton