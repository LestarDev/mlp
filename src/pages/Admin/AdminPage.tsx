import { useEffect, useState } from "react"
import pageType from "../../config/types/pageType"
import usePlayer from "../../hooks/usePlayer"
import { loginPageID, mainPageID } from "../../config/config";
import RefreshButton from "../../components/RefreshButton/RefreshButton";
import sql from "../../hooks/backend/sql";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import React from "react";
import "./AdminPage.css"
import TalentyStack from "../../components/stack/TalentyStack/TalentyStack";
import umiejetnosciType from "../../config/types/umiejetnosciType";

type typeForm  = {
    idUz: number,
    typeOf: number
}

const AdminPage = ({setPage}: pageType) => {

    const player = usePlayer();

    const emptyUserList: React.JSX.Element[] = [];

    const [allUsers, setAllUsers] = useState(emptyUserList);

    const emptyUmiejkaToChange: umiejetnosciType = {
        cecha: "Cialo",
        nazwa: "",
        ranga: -1,
        value: -999,
        id: -999
    }

    const [umiejkaToChange, setUmiejkaToChange] = useState(emptyUmiejkaToChange);

    const inicjalOfForm: typeForm = {
        idUz: -999,
        typeOf: 0
    }

    const [typeOfForm, setTypeOfForm] = useState(inicjalOfForm);

    // 0 => Dodaj umiejke
    // 1 => Edytuj umiejke [plansza gracza]
    // 

    document.title="Mlp - admin panel";

    useEffect(()=>{

        if(player.idUzytkownika!=-999){
            player.clear();
            setPage(loginPageID);
            document.title="Mlp - login";
            return;
        }

        const query = `SELECT uzytkownik.id, postac.nick, postac.lvl, postac.exp FROM uzytkownik INNER JOIN postac ON postac.Id_uzytkownika = uzytkownik.id`;

        fetch(sql(query)).then(response=>response.json()).then((data: string[])=>{
            console.log(data);
            for(let i=1; i<Number(data[0])*4; i+=4){
                console.log(data[i], data[i+1], data[i+2], data[i+3]);
                setAllUsers(prevV=>[...prevV, <p className="admin-singleUser">
                    <span>{data[i]}</span>
                    <span>{data[i+1]}</span>
                    <button onClick={()=>{
                        player.setNewIdUzytkownika(Number(data[i]));
                        setPage(mainPageID);
                        return;
                    }}>Show</button>
                    <button onClick={()=>{
                        setTypeOfForm({
                            idUz: Number(data[i]),
                            typeOf: 1
                        });
                    }}>
                        Edit
                    </button>
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
            {
                typeOfForm.idUz>=0 ? <>
                    {
                        typeOfForm.typeOf == 1 ? <> {umiejkaToChange.ranga>0 ? <>
                            <form>
                                <label>Cecha: <select name="cecha" id="cecha">
                                    <option value="Cialo" selected={umiejkaToChange.cecha=="Cialo"}>Cialo</option>
                                    <option value="Umysl" selected={umiejkaToChange.cecha=="Umysl"}>Umysl</option>
                                    <option value="Urok" selected={umiejkaToChange.cecha=="Urok"}>Urok</option>
                                </select></label>
                                <label>Nazwa: <input type="text" value={umiejkaToChange.nazwa}/></label>
                                <label>Ranga: <select name="ranga" id="ranga">
                                    <option value="1" selected={umiejkaToChange.ranga==1}>{player.getRangaOfUmiejka(1, true)}</option>
                                    <option value="2" selected={umiejkaToChange.ranga==2}>{player.getRangaOfUmiejka(2, true)}</option>
                                    <option value="3" selected={umiejkaToChange.ranga==3}>{player.getRangaOfUmiejka(3, true)}</option>
                                    <option value="4" selected={umiejkaToChange.ranga==4}>{player.getRangaOfUmiejka(4, true)}</option>
                                    <option value="5" selected={umiejkaToChange.ranga==5}>{player.getRangaOfUmiejka(5, true)}</option>
                                    <option value="6" selected={umiejkaToChange.ranga==6}>{player.getRangaOfUmiejka(6, true)}</option>
                                    <option value="7" selected={umiejkaToChange.ranga==7}>{player.getRangaOfUmiejka(7, true)}</option>
                                    <option value="8" selected={umiejkaToChange.ranga==8}>{player.getRangaOfUmiejka(8, true)}</option>
                                    <option value="9" selected={umiejkaToChange.ranga==9}>{player.getRangaOfUmiejka(9, true)}</option>
                                    <option value="10" selected={umiejkaToChange.ranga==10}>{player.getRangaOfUmiejka(10, true)}</option>    
                                </select></label>
                                <label>Value: <input type="number" value={umiejkaToChange.value} /></label>
                                <input type="hidden" name="id" value={umiejkaToChange.id} />
                                <input type="submit" value="Zapisz zmiany" />
                            </form>
                        </> : ''} <TalentyStack id={typeOfForm.idUz} isAdmin={true} adminSet={setUmiejkaToChange} /></>
                        : ''
                    }
                </> : ''
            }
        <div className="buttons-down">
            <LogoutButton  setPage={setPage} />
            <RefreshButton />
        </div>
    </div>
}

export default AdminPage