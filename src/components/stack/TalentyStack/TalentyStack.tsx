import { useEffect, useState } from "react"
import sql from "../../../hooks/backend/sql"
import usePlayer from "../../../hooks/usePlayer"
import umiejetnosciType from "../../../config/types/umiejetnosciType";
import Talent from "../../Talent/Talent";
import "./TalentyStack.css"
import React from "react";

const TalentyStack = ({id, isAdmin, adminSet}: {id: number, isAdmin: boolean, adminSet: React.Dispatch<React.SetStateAction<umiejetnosciType>>}) => {

    const player = usePlayer();    

    const jsxTab: React.JSX.Element[] = [];

    player.umiejetnosci.forEach((el, i)=>{
        jsxTab.push(<Talent umiejka={el} key={'firstTalent'+i} />)
    })

    const [allTalentyJSX, setAllTalentyJSX] = useState(jsxTab);

    const [search, setSearch] = useState("");

    useEffect(()=>{

        const query = `SELECT nazwa, id_talentType, kostka, id, imgLink FROM talenty WHERE Id_uzytkownika="${id}" AND nazwa LIKE "%${search}%" ORDER BY id_talentType; `;

        fetch(sql(query)).then(response=>response.json()).then((data: string[])=>{

            setAllTalentyJSX([]);

            let lastValue = -1;

            let umiejetnosciToPush: umiejetnosciType[] = [];

            for(let i = 1; i<(Number(data[0])*5)+1; i+=5){
                const tempTalent: umiejetnosciType = {
                    cecha: "Umysl",
                    nazwa: data[i],
                    ranga: Number(data[i+1]),
                    value: Number(data[i+2]),
                    id: Number(data[i+3])
                }
                // player.setNewUmiejetnosci([...player.umiejetnosci, tempTalent]);
                // console.log(tempTalent);
                umiejetnosciToPush.push(tempTalent);
            }
            
            player.setNewUmiejetnosci(umiejetnosciToPush);
            umiejetnosciToPush.forEach((el,i)=>{
                if(lastValue!=el.ranga){
                    setAllTalentyJSX(preV=>[...preV, <span className="otherRanga">{player.getRangaOfUmiejka(el.ranga)}</span>]);
                    lastValue=el.ranga;
                }
                setAllTalentyJSX(preV=>[...preV, <div className={isAdmin ? "admin-talent" : ''} onClick={()=>{
                    // console.log("DOBRA TRZEBA TO ZROBIC, talentySLACK.tsx > 54")
                    adminSet(el);
                }}><Talent umiejka={el} key={i+1}/></div>])
            })
        })
    },[search, player.refreshPage])


    return <div className="allTalenty">
        <input type="search" name="searchUmiejka" id="searchUmiejka" placeholder="Szukaj" onChange={(e)=>{
            setSearch(e.target.value)
        }} />
 {allTalentyJSX}


    </div>
}

export default TalentyStack