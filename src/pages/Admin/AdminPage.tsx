import { useEffect } from "react"
import pageType from "../../config/types/pageType"
import usePlayer from "../../hooks/usePlayer"
import { loginPageID } from "../../config/config";
import RefreshButton from "../../components/RefreshButton/RefreshButton";
import sql from "../../hooks/backend/sql";
import LogoutButton from "../../components/LogoutButton/LogoutButton";

const AdminPage = ({setPage}: pageType) => {

    const player = usePlayer();

    useEffect(()=>{

        if(player.idUzytkownika!=-999){
            player.clear();
            setPage(loginPageID);
        }

        const query = `SELECT uzytkownik.id, uzytkownik.login, uzytkownik.password, postac.nick FROM uzytkownik INNER JOIN postac ON postac.Id_uzytkownika = uzytkownik.id`;

        fetch(sql(query)).then(response=>response.json()).then((data: string[])=>{
            console.log(data);
            for(let i=1; i<Number(data[0])+1; i+=4){
                console.log(data[i], data[i+1], data[i+2], data[i+3]);
            }
        })

    },[player.refreshPage])

    return <div>
        Admin Panel
        <div className="buttons-down">
            <LogoutButton  setPage={setPage} />
            <RefreshButton />
        </div>
    </div>
}

export default AdminPage