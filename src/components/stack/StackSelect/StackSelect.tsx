import { useState } from "react";
import umiejetnosciType from "../../../config/types/umiejetnosciType";
import usePlayer from "../../../hooks/usePlayer"
import TalentyStack from "../TalentyStack/TalentyStack";
import CechaBox from "../../CechaBox/CechaBox";
import EqStack from "../EqStack/EqStack";
import SearchStack from "../SearchStack/SearchStack";

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
            player.wybranyTyp == "Cechy" ?
            <div className="mainCechy">
                <CechaBox cecha="Cialo" showAs={0} value={player.Cialo} key={"cialo"} />
                <CechaBox cecha="Umysl" showAs={0} value={player.Umysl} key={"Umysl"} />
                <CechaBox cecha="Urok" showAs={0} value={player.Urok} key={"Urok"} />
            </div> :
            player.wybranyTyp=="Ekwipunek"?
            <EqStack isAdmin></EqStack> :
            player.wybranyTyp=="Search" ?
            <SearchStack /> :
            nothing.nazwa
        }
    </>
}

export default StackSelect