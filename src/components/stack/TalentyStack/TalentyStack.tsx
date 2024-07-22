import { useEffect, useId, useState } from "react"
import sql from "../../../hooks/backend/sql"
import usePlayer from "../../../hooks/usePlayer"
import umiejetnosciType from "../../../config/types/umiejetnosciType";
import Talent from "../../Talent/Talent";

const TalentyStack = () => {

    const player = usePlayer();    

    const jsxTab: JSX.Element[] = []

    const [allTalentyJSX, setAllTalentyJSX] = useState(jsxTab);

    useEffect(()=>{

        const query = `SELECT nazwa, id_talentType, kostka, id, imgLink FROM talenty WHERE Id_uzytkownika="${player.idUzytkownika}" ORDER BY id_talentType; `;

        fetch(sql(query)).then(response=>response.json()).then((data: string[])=>{

            setAllTalentyJSX([]);

            let umiejetnosciToPush: umiejetnosciType[] = [];

            for(let i = 1; i<(Number(data[0])*5)+1; i+=5){
                const tempTalent: umiejetnosciType = {
                    cecha: "Umysl",
                    nazwa: data[i],
                    ranga: Number(data[i+1]),
                    value: Number(data[i+2]),
                }
                // player.setNewUmiejetnosci([...player.umiejetnosci, tempTalent]);
                // console.log(tempTalent);
                umiejetnosciToPush.push(tempTalent);
            }
            
            player.setNewUmiejetnosci(umiejetnosciToPush);
            umiejetnosciToPush.forEach((el,i)=>{
                setAllTalentyJSX(preV=>[...preV, <Talent umiejka={el} key={i+1}/>])
                
            })
        })
    },[])


    return <div onClick={()=>{
        console.log(player.umiejetnosci)
    }}>
 {allTalentyJSX}

{
    
}

    </div>
}

export default TalentyStack