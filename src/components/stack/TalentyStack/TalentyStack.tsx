import { useEffect } from "react"
import sql from "../../../hooks/backend/sql"
import usePlayer from "../../../hooks/usePlayer"
import umiejetnosciType from "../../../config/types/umiejetnosciType";

const TalentyStack = () => {

    const player = usePlayer();    
        
    useEffect(()=>{

        const query = `SELECT nazwa, id_talentType, id,  kostka, imgLink FROM talenty WHERE Id_uzytkownika="${player.idUzytkownika}"; `;

        fetch(sql(query)).then(response=>response.json()).then((data: string[])=>{

            let umiejetnosciToPush: umiejetnosciType[] = [];

            for(let i = 1; i<(Number(data[0])*5)+1; i+=5){
                const tempTalent: umiejetnosciType = {
                    cecha: "Umysl",
                    nazwa: data[i],
                    ranga: Number(data[i+1]),
                }
                // player.setNewUmiejetnosci([...player.umiejetnosci, tempTalent]);
                // console.log(tempTalent);
                umiejetnosciToPush.push(tempTalent);
            }

            player.setNewUmiejetnosci(umiejetnosciToPush);

        })
    },[])
    
    
    return <div onClick={()=>{
        console.log(player.umiejetnosci)
    }}>
 klik
    </div>
}

export default TalentyStack