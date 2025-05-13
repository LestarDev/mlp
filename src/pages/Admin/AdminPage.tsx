import { useEffect, useRef, useState } from "react"
import pageType from "../../config/types/pageType"
import usePlayer from "../../hooks/usePlayer"
import { dbPath, loginPageID, mainPageID } from "../../config/config";
import RefreshButton from "../../components/RefreshButton/RefreshButton";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import React from "react";
import "./AdminPage.css"
import TalentyStack from "../../components/stack/TalentyStack/TalentyStack";
import umiejetnosciType from "../../config/types/umiejetnosciType";
import sqlPush from "../../hooks/backend/sqlPush";
import singlePlayerType from "../../config/types/databaseType";

import fs from 'vite-plugin-fs/browser';

// To read a file
const file = await fs.readFile(dbPath);
// console.log("file: ",file);

// console.log(JSON.parse(file))


type typeForm  = {
    idUz: number,
    typeOf: number
}

const AdminPage = ({setPage}: pageType) => {

    const player = usePlayer();

    const refKostka = useRef<HTMLSelectElement>(null);
    const refRanga = useRef<HTMLSelectElement>(null);
    const refNazwa = useRef<HTMLInputElement>(null);

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


    const [isNowPending, setIsNowPending] = useState<boolean>(true);
    const [errorHere, setErrorHere] = useState("");

    const generateUserData = () => {
        console.log(JSON.stringify(player))
    }

    let db = JSON.parse(file)
    

    useEffect(()=>{

        const data = db.accounts as singlePlayerType[]

        if(player.idUzytkownika!=-999){
            player.clear();
            setPage(loginPageID);
            document.title="Mlp - login";
            return;
        }

        try{
            // fetch("https://my-json-server.typicode.com/lestardev/mlp/accounts").then(response=>response.json()).then((data: singlePlayerType[])=>{
            // console.log(data);
                setAllUsers([]);
                setIsNowPending(preV=>!preV);
                data.forEach((el, i)=>{
                    setAllUsers(prevV=>[...prevV, <p className="admin-singleUser" key={`admin${i}`}>
                        <span>{el.id}</span>
                        <span>{el.nick}</span>
                        <button onClick={()=>{
                            player.setNewIdUzytkownika(Number(data[i].id));
                            setPage(mainPageID);
                            return;
                        }}>Show</button>
                        <button onClick={()=>{
                            player.setNewUmiejetnosci(el.talents)
                            setTypeOfForm({
                                idUz: Number(data[i].id),
                                typeOf: 1
                            });
                        }}>
                            Edit
                        </button>
                        <button onClick={()=>{
                            
                            setTypeOfForm({
                                idUz: Number(data[i].id),
                                typeOf: 0
                            })
                        }}>
                            Dodaj
                        </button>
                    </p>])
                })
            // })
        }catch(e){
            setIsNowPending(false);
            setErrorHere("Blad: "+(e as string));
        }

        setIsNowPending(false);

    },[player.refreshPage])


    return <div>
        <h1>Admin Panel</h1>
        {
            isNowPending ? <p>Loading...</p> : errorHere
        }
        <div className="admin-allUsers">
            {
                allUsers
            }
        </div>
            {
                typeOfForm.idUz>=0 ? <>
                    {
                        typeOfForm.typeOf == 0 ? <>
                            <form>
                                <label>Cecha: <select name="cecha" id="cecha">
                                    <option value="Cialo">Cialo</option>
                                    <option value="Umysl">Umysl</option>
                                    <option value="Urok">Urok</option>
                                </select></label>
                                <label>Nazwa: <input ref={refNazwa} type="text"/></label>
                                <label>Ranga: <select defaultValue={2} name="ranga" id="ranga" ref={refRanga}>
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
                                    <option value="11" selected={umiejkaToChange.ranga==11}>{player.getRangaOfUmiejka(11, true)}</option>
                                </select></label>
                                <label>Kostka: <select name="kostka" id="kostka" ref={refKostka}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="8">8</option>
                                    <option value="10">10</option>
                                    <option value="12">12</option>
                                    <option value="20">20</option>
                                    <option value="21">k20+1</option>
                                    <option value="22">k20+2</option>
                                    <option value="23">k20+3</option>
                                    <option value="24">k20+4</option>
                                    <option value="25">k20+5</option>
                                    <option value="26">k20+6</option>
                                    <option value="27">k20+7</option>
                                    <option value="28">k20+8</option>
                                    <option value="29">k20+9</option>
                                    <option value="30">k20+10</option>
                                    <option value="31">k20+11</option>
                                    <option value="32">k20+12</option>    
                                </select></label>

                                {
                                    //dodac selecta z options a nie inputa z numberem => todo
                                }
                                <input type="hidden" name="idUz" value={typeOfForm.idUz} />
                                <input type="submit" value="Dodaj" onClick={(e)=>{
                                    e.preventDefault();
                                    
                                    console.log(refKostka.current, refNazwa.current, refRanga.current)
                                    fetch(sqlPush(`INSERT INTO talenty(id, Id_uzytkownika, nazwa, kostka, id_talentType, imgLink) VALUES (NULL, '${typeOfForm.idUz}', '${refNazwa.current!.value}', '${refKostka.current!.value}', '${refRanga.current!.value}', '');`)).then(response=>response.text()).then((data: string)=>{
                                        console.log(data);
                                        setTypeOfForm({
                                            idUz: typeOfForm.idUz,
                                            typeOf: -1
                                        })
                                        player.rerollPage();
                                    })
                                }} />
                            </form>
                        </> :
                        typeOfForm.typeOf == 1 ? <> {umiejkaToChange.ranga>0 ? <>
                            <form>
                                <label>Cecha: <select name="cecha" id="cecha">
                                    <option value="Cialo" selected={umiejkaToChange.cecha=="Cialo"}>Cialo</option>
                                    <option value="Umysl" selected={umiejkaToChange.cecha=="Umysl"}>Umysl</option>
                                    <option value="Urok" selected={umiejkaToChange.cecha=="Urok"}>Urok</option>
                                </select></label>
                                <label>Nazwa: <input ref={refNazwa} type="text" value={umiejkaToChange.nazwa}/></label>
                                <label>Ranga: <select name="ranga" id="ranga" ref={refRanga}>
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
                                    <option value="11" selected={umiejkaToChange.ranga==11}>{player.getRangaOfUmiejka(11, true)}</option>
                                </select></label>
                                <label>Value: <select name="value" id="value" ref={refKostka}>
                                    {
                                        umiejkaToChange.ranga==3 ? <>
                                            <option value="1" selected={umiejkaToChange.value==1}>1</option>
                                            <option value="2" selected={umiejkaToChange.value==2}>2</option>
                                            <option value="3" selected={umiejkaToChange.value==3}>3</option>
                                            <option value="4" selected={umiejkaToChange.value==4}>4</option>
                                            <option value="5" selected={umiejkaToChange.value==5}>5</option>
                                            <option value="6" selected={umiejkaToChange.value==6}>6</option>
                                        </> : <>
                                            {
                                                umiejkaToChange.ranga==11 || umiejkaToChange.ranga==4 || umiejkaToChange.ranga==5 ? <option value="3" selected={umiejkaToChange.value==3}>k3</option> : ''
                                            }
                                            <option value="4" selected={umiejkaToChange.value==4}>k4</option>
                                            <option value="6" selected={umiejkaToChange.value==6}>k6</option>
                                            <option value="8" selected={umiejkaToChange.value==8}>k8</option>
                                            <option value="10" selected={umiejkaToChange.value==10}>k10</option>
                                            <option value="12" selected={umiejkaToChange.value==12}>k12</option>
                                            {
                                                umiejkaToChange.ranga!=4 && umiejkaToChange.ranga!=5 ? <option selected={umiejkaToChange.value==20} value="20">k20</option> : ''
                                            }
                                            
                                        </>
                                    }
                                    
                                    {
                                        umiejkaToChange.ranga==1 || umiejkaToChange.ranga==2 ? <>
                                            <option value="21" selected={umiejkaToChange.value==21}>k20+1</option>
                                            <option value="22" selected={umiejkaToChange.value==22}>k20+2</option>
                                            <option value="23" selected={umiejkaToChange.value==23}>k20+3</option>
                                            <option value="24" selected={umiejkaToChange.value==24}>k20+4</option>
                                            <option value="25" selected={umiejkaToChange.value==25}>k20+5</option>
                                            <option value="26" selected={umiejkaToChange.value==26}>k20+6</option>
                                        </> : ''
                                    }
                                    
                                    {
                                        umiejkaToChange.ranga==1 ? <>
                                            <option value="27" selected={umiejkaToChange.value==27}>k20+7</option>
                                            <option value="28" selected={umiejkaToChange.value==28}>k20+8</option>
                                            <option value="29" selected={umiejkaToChange.value==29}>k20+9</option>
                                            <option value="30" selected={umiejkaToChange.value==30}>k20+10</option>
                                            <option value="31" selected={umiejkaToChange.value==31}>k20+11</option>
                                            <option value="32" selected={umiejkaToChange.value==32}>k20+12</option>
                                        </> : ''
                                    }   
                                    
                                </select></label>
                                <input type="hidden" name="id" value={umiejkaToChange.id} />
                                <input type="submit" value="Usun" onClick={(e)=>{
                                    e.preventDefault();
                                    (db.accounts as singlePlayerType[])[typeOfForm.idUz-1].talents = (db.accounts as singlePlayerType[])[typeOfForm.idUz-1].talents.filter(singleTalent => singleTalent.id!=umiejkaToChange.id)
                                    
                                    console.log(JSON.stringify(db))
                                    fs.writeFile(dbPath, JSON.stringify(db));
                                    // setPage(loginPageID);
                                    // player.rerollPage();
                                }} />
                                <input type="submit" value="Zapisz zmiany" onClick={(e)=>{
                                    e.preventDefault();
                                    (db.accounts as singlePlayerType[])[typeOfForm.idUz-1].talents = (db.accounts as singlePlayerType[])[typeOfForm.idUz-1].talents.map(el => {
                                        return el.id==umiejkaToChange.id ? {
                                            id: el.id,
                                            cecha: el.cecha,
                                            nazwa: refNazwa.current!.value,
                                            ranga: Number(refRanga.current!.value),
                                            value: Number(refKostka.current!.value)
                                        } as umiejetnosciType : el
                                    });
                                    (db.accounts as singlePlayerType[])[typeOfForm.idUz-1].talents.sort(function(a, b) {
                                            return a.ranga - b.ranga;
                                        });
                                        // console.log((db.accounts as singlePlayerType[])[typeOfForm.idUz-1].talents.sort(function(a, b) {
                                        //     return a.ranga - b.ranga;
                                        // }))
                                    // console.log(db.accounts)
                                    fs.writeFile(dbPath, JSON.stringify(db))
                                    // fetch(sqlPush(`UPDATE talenty SET nazwa='${refNazwa.current!.value}', kostka='${refKostka.current!.value}', id_talentType='${refRanga.current!.value}' WHERE id='${umiejkaToChange.id}';`)).then(response=>response.text()).then((data: string)=>{
                                    //     console.log(data);
                                    //     player.rerollPage();
                                    // })
                                    // setPage(loginPageID);
                                    // player.rerollPage();
                                }} />
                            </form>
                        </> : ''} <TalentyStack id={typeOfForm.idUz} isAdmin={true} adminSet={setUmiejkaToChange} /></>
                        : ''
                    }
                </> : ''
            }
        <div className="buttons-down">
            <LogoutButton  setPage={setPage} />
            <button onClick={()=>generateUserData()}>Generate user Data</button>
            <RefreshButton />
        </div>
    </div>
}

export default AdminPage