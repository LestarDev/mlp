import { useEffect } from "react"
import pageType from "../../config/types/pageType"
import usePlayer from "../../hooks/usePlayer"
import { loginPageID } from "../../config/config";
import RefreshButton from "../../components/RefreshButton/RefreshButton";

const AdminPage = ({setPage}: pageType) => {

    const player = usePlayer();

    useEffect(()=>{

        if(player.idUzytkownika!=-999){
            player.clear();
            setPage(loginPageID);
        }

    },[player.refreshPage])

    return <div>
        Admin Panel
        <RefreshButton />
    </div>
}

export default AdminPage