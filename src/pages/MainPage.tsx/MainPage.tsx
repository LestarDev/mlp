import { useEffect } from "react";
import Header from "../../components/Header/Header";
import pageType from "../../config/types/pageType";
import usePlayer from "../../hooks/usePlayer";
import Menu from "../../components/Menu/Menu";
import StackSelect from "../../components/stack/StackSelect/StackSelect";
// import RefreshButton from "../../components/RefreshButton/RefreshButton";
import "./MainPage.css";
// import LogoutButton from "../../components/LogoutButton/LogoutButton";
import "./Extension/Extension.css"
import singlePlayerType from "../../config/types/databaseType";
import FooterIcons from "../../components/FooterIcons/FooterIcons";
import iconAmbrose from "./../../assets/ambrosee.png"
import iconErin from "./../../assets/ramka_erin.svg"
import iconKayn from "./../../assets/ramka_kayn.svg"

const iconNeferii:string = "", iconMalphite:string = "";

const MainPage = ({setPage}: pageType) => {

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
        fetch(`https://my-json-server.typicode.com/lestardev/mlp/accounts?id=${player.idUzytkownika}`).then(data => data.json()).then(v => {
            const playerData = v[0] as singlePlayerType;
            player.setNewNick(playerData.nick);
            document.title=`Uniwerse RPG - ${playerData.nick}`
            player.setNewLvl(playerData.lvl);
            player.setNewExp(playerData.exp);
            player.setNewCialo(playerData.cialo);
            player.setNewUmysl(playerData.umysl);
            player.setNewUrok(playerData.urok);
            player.setNewSection("Cechy")
            player.setNewUmiejetnosci(playerData.talents.sort(function(a, b) {
                return a.ranga - b.ranga;
            }));
            
           player.setNewImgLink(
            player.idUzytkownika==1?iconAmbrose:
            player.idUzytkownika==2?iconErin:
            player.idUzytkownika==3?iconKayn:
            player.idUzytkownika==4?iconNeferii:
            iconMalphite

           )
        });
        // console.log("Player id:",player.idUzytkownika);
        // fetch(sql(`SELECT nick, lvl, exp, cialo, umysl, urok, monety, portret, rnHP, maxChar, dodNici, dodHP FROM postac WHERE Id_uzytkownika="${player.idUzytkownika}"`)).then(response=>response.json()).then((data: string[])=>{
        //     console.log(data);
        //     if(Number(data[0])<=0) {
        //         console.log("brak postaci");
        //         setPage(loginPageID);
        //         return;
        //     }
        //     player.setNewNick(data[1]);
        //     document.title=`Mlp - ${data[1]}`;
        //     player.setNewLvl(Number(data[2]));
        //     player.setNewExp(Number(data[3]));
        //     player.setNewCialo(Number(data[4]));
        //     player.setNewUmysl(Number(data[5]));
        //     player.setNewUrok(Number(data[6]));
        //     player.setNewMonety(Number(data[7]));
        //     player.setNewImgLink(data[8]);
        // })
    },[player.refreshPage])

    return <>

        <Menu setPage={setPage} />

        <Header />

        <StackSelect />

        {/* <div className="buttons-down">
            <LogoutButton setPage={setPage} />
            <RefreshButton />
        </div> */}


            <FooterIcons setPage={setPage} />

    </>
}

export default MainPage