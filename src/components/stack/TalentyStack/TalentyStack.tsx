import { useEffect, useId, useState } from "react"
import usePlayer from "../../../hooks/usePlayer"
import umiejetnosciType from "../../../config/types/umiejetnosciType";
import Talent from "../../Talent/Talent";
import "./TalentyStack.css"
import React from "react";
import CechaBox from "../../CechaBox/CechaBox";

const TalentyStack = ({isAdmin, adminSet}: {id: number, isAdmin: boolean, adminSet: React.Dispatch<React.SetStateAction<umiejetnosciType>>}) => {

    const player = usePlayer();    

    const talentyStackId = useId();

    // const jsxTab: React.JSX.Element[] = [];

    // player.umiejetnosci.forEach((el, i)=>{
    //     jsxTab.push(<Talent umiejka={el} key={'firstTalent'+i} />)
    //     console.log(jsxTab)
    // })

    const [allTalentyJSX, setAllTalentyJSX] = useState<React.JSX.Element[]>([]);

    // const [search, setSearch] = useState("");

    // console.log(player)

    // function capitalizeFirstLetter(val: string) {
    //     return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    // }

    useEffect(()=>{

        // const query = `SELECT nazwa, id_talentType, kostka, id, imgLink FROM talenty WHERE Id_uzytkownika="${id}" AND nazwa LIKE "%${search}%" ORDER BY id_talentType; `;

        setAllTalentyJSX([]);

            let lastValue = -1;

            // let umiejetnosciToPush: umiejetnosciType[] = [];

        // fetch("http://localhost:3000/").then(response=>response.json()).then((data: string[])=>{

        //     setAllTalentyJSX([]);

        //     let lastValue = -1;

        //     let umiejetnosciToPush: umiejetnosciType[] = [];

        //     for(let i = 1; i<(Number(data[0])*5)+1; i+=5){
        //         const tempTalent: umiejetnosciType = {
        //             cecha: "Umysl",
        //             nazwa: data[i],
        //             ranga: Number(data[i+1]),
        //             value: Number(data[i+2]),
        //             id: Number(data[i+3])
        //         }
        //         umiejetnosciToPush.push(tempTalent);
        //     }
            
        //     player.setNewUmiejetnosci(umiejetnosciToPush);
        //     umiejetnosciToPush.forEach((el,i)=>{
        //         if(lastValue!=el.ranga){
        //             setAllTalentyJSX(preV=>[...preV, <span className="otherRanga">{player.getRangaOfUmiejka(el.ranga)}</span>]);
        //             lastValue=el.ranga;
        //         }
        //         setAllTalentyJSX(preV=>[...preV, 
        //         <div className={isAdmin ? "admin-talent" : ''} onClick={()=>adminSet(el)}>
        //             <Talent umiejka={el} key={i+talentyStackId}/>
        //         </div>])
        //     })
        // })
            
            player.umiejetnosci.forEach((el,i)=>{
                // if(!(el.nazwa.includes(capitalizeFirstLetter(search)) || el.nazwa.includes(search.toLowerCase()))) return;
                if(lastValue!=el.ranga){
                    setAllTalentyJSX(preV=>[...preV, <span className="otherRanga" key={"1"+i+talentyStackId}>{player.getRangaOfUmiejka(el.ranga)}</span>]);
                    lastValue=el.ranga;
                }
                setAllTalentyJSX(preV=>[...preV, 
                <div className={isAdmin ? "admin-talent" : ''} key={"2"+i+talentyStackId} onClick={()=>adminSet(el)}>
                    <Talent umiejka={el} key={i+talentyStackId}/>
                </div>])
            })

            // player.rerollPage();


    },[player.umiejetnosci])


    return <div className="allTalenty">
        
        {/* <input type="search" name="searchUmiejka" id="searchUmiejka" placeholder="Szukaj" onChange={(e)=>setSearch(e.target.value)} /> */}
        {/* <form>
            <label>Cialo<input type="radio" name="Cialo" /></label>
            <label>Umysl<input type="radio" name="Umysl" /></label>
            <label>Urok<input type="radio" name="Urok" /></label>
        </form> */}

        <div className="cechy-to-click">
            <CechaBox cecha="Cialo" showAs={1} value={player.Cialo} />
            <CechaBox cecha="Umysl" showAs={1} value={player.Umysl} />
            <CechaBox cecha="Urok" showAs={1} value={player.Urok} />
        </div>

        {
            allTalentyJSX
        }

    </div>
}

export default TalentyStack