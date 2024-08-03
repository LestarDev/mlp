import { useState } from "react";
import umiejetnosciType from "../../../config/types/umiejetnosciType";
import usePlayer from "../../../hooks/usePlayer"
import TalentyStack from "../TalentyStack/TalentyStack";

const StackSelect = () => {

    const player = usePlayer();

    const [nothing, setNothing] = useState<umiejetnosciType>({
        cecha: "Cialo",
        nazwa: '',
        ranga: -1,
        value: -999,
        id: -999
    });

    return <>
        {
            player.wybranyTyp=="Talenty" ? 
            <TalentyStack id={player.idUzytkownika} isAdmin={false} adminSet={setNothing} /> :
            nothing.nazwa
        }
    </>
}

export default StackSelect