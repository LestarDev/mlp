import { useEffect } from "react";
import Header from "../../components/Header/Header";
import pageType from "../../config/types/pageType";
import usePlayer from "../../hooks/usePlayer";
import sql from "../../hooks/backend/sql";
import Menu from "../../components/Menu/Menu";
import StackSelect from "../../components/stack/StackSelect/StackSelect";



const MainPage = ({loginOut}: pageType) => {

    const player = usePlayer();

    useEffect(()=>{
        const saveIdToLocalHost = () => {
            localStorage.setItem("id", player.idUzytkownika.toString());
        }
   

        window.addEventListener("beforeunload", saveIdToLocalHost)

        return ()=>{
            window.removeEventListener("beforeunload", saveIdToLocalHost)
        }
    },[])

    useEffect(()=>{
        console.log("Player id:",player.idUzytkownika);
        fetch(sql(`SELECT nick, lvl, exp, cialo, umysl, urok, monety, portret, rnHP, maxChar, dodNici, dodHP FROM postac WHERE Id_uzytkownika="${player.idUzytkownika}"`)).then(response=>response.json()).then((data: string[])=>{
            console.log(data);
            if(Number(data[0])<=0) {
                console.log("brak postaci");
                loginOut();
                return;
            }
            player.setNewNick(data[1]);
            player.setNewLvl(Number(data[2]));
            player.setNewExp(Number(data[3]));
            player.setNewCialo(Number(data[4]));
            player.setNewUmysl(Number(data[5]));
            player.setNewUrok(Number(data[6]));
            player.setNewMonety(Number(data[7]));
            player.setNewImgLink(data[8]);
        })
    },[player.refreshPage])

    return <>

        <Menu />

        <Header />

        <StackSelect />

        <button onClick={()=>{
            player.clear();
            loginOut();
        }}>Logout</button>
    </>
}

export default MainPage