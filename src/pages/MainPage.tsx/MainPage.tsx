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
// import singlePlayerType from "../../config/types/databaseType";
import FooterIcons from "../../components/FooterIcons/FooterIcons";
import iconAmbrose from "./../../assets/ramkaAMBROSE.svg"
import iconErin from "./../../assets/ramka_erin.svg"
import iconKayn from "./../../assets/ramka_kayn.svg"
import sql from "../../hooks/backend/sql";
import umiejetnosciType from "../../config/types/umiejetnosciType";

// const iconNeferii:string = "", iconMalphite:string = "";

const MainPage = ({setPage}: pageType) => {

    const player = usePlayer();

    console.log(player);

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
        // fetch(`https://my-json-server.typicode.com/lestardev/mlp/accounts`).then(data => data.json()).then(v => {
        //     console.log(v);
        //     const playerData = v[player.idUzytkownika-1] as singlePlayerType;
        //     player.setNewNick(playerData.nick);
        //     document.title=`Uniwerse RPG - ${playerData.nick}`
        //     player.setNewLvl(playerData.lvl);
        //     player.setNewExp(playerData.exp);
        //     player.setNewCialo(playerData.cialo);
        //     player.setNewUmysl(playerData.umysl);
        //     player.setNewUrok(playerData.urok);
        //     player.setNewSection("Cechy")
        //     player.setNewUmiejetnosci(playerData.talents.sort(function(a, b) {
        //         return a.ranga - b.ranga;
        //     }));
            
           player.setNewImgLink(
            player.idUzytkownika==1?iconErin:
            player.idUzytkownika==2?iconAmbrose:
            iconKayn
           )

           fetch(sql(`SELECT umiejetnosci.Id, umiejetnosci.nazwa, umiejetnosci.id_ranga, rangi_talenty.nazwa, umiejetnosci.value, cechy.nazwa FROM umiejetnosci INNER JOIN rangi_talenty ON rangi_talenty.Id=umiejetnosci.id_ranga INNER JOIN cechy ON cechy.Id=umiejetnosci.id_cecha WHERE umiejetnosci.id_player=${player.idUzytkownika};`)).then(v=>v.json()).then((data: []) => {
            data.shift();
            console.log(data)
            const umiejetnosciList: umiejetnosciType[] = [];
            const przeskok = 6;
            for(let i=0; i<data.length/przeskok;i+=przeskok){
                umiejetnosciList.push({
                    id: Number(data[i]),
                    nazwa: data[i+1],
                    ranga: Number(data[i+2]),
                    cecha: data[i+5],
                    value: data[i+4]
                })
            }
            player.setNewUmiejetnosci([...player.umiejetnosci, ...umiejetnosciList])
           })

        // });
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

        <div className="background-fixed">

        </div>

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