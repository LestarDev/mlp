import { useEffect, useState } from "react"
import pageType from "../../config/types/pageType"
import usePlayer from "../../hooks/usePlayer"
import { loginPageID, mainPageID } from "../../config/config";
import RefreshButton from "../../components/RefreshButton/RefreshButton";
import sql from "../../hooks/backend/sql";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import React from "react";

const AdminPage = ({setPage}: pageType) => {

    const player = usePlayer();

    const emptyUserList: React.JSX.Element[] = [];

    const [allUsers, setAllUsers] = useState(emptyUserList);
    
    useEffect(()=>{

        if(player.idUzytkownika!=-999){
            player.clear();
            setPage(loginPageID);
        }

        const query = `SELECT uzytkownik.id, postac.nick, postac.lvl, postac.exp FROM uzytkownik INNER JOIN postac ON postac.Id_uzytkownika = uzytkownik.id`;

        fetch(sql(query)).then(response=>response.json()).then((data: string[])=>{
            console.log(data);
            for(let i=1; i<Number(data[0])+1; i+=4){
                console.log(data[i], data[i+1], data[i+2], data[i+3]);
                setAllUsers(prevV=>[...prevV, <p className="admin-singleUser">
                    <span>{data[i]}</span>
                    <span>{data[i+1]}</span>
                    <button onClick={()=>{
                        player.setNewIdUzytkownika(Number(data[i]));
                        setPage(mainPageID);
                        return;
                    }}>Show</button>
                </p>])
            }
        })

    },[player.refreshPage])

    return <div>
        <h1>Admin Panel</h1>
        <div className="admin-allUsers">
            {
                allUsers
            }
        </div>
        <div className="buttons-down">
            <LogoutButton  setPage={setPage} />
            <RefreshButton />
        </div>
    </div>
}

export default AdminPage