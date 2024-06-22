import { useDispatch, useSelector } from "react-redux"
import cechyType from "../config/types/cechyType"
import { setCialo, setIdUzytkownika, setSzczescie, setUmysl, setUrok } from "../config/currentSlice";

const usePlayer = () => {

    const dispatch = useDispatch();

    // const {nick,dodHP, lvl, Umysl, refreshPage, Cialo, idUzytkownika, Szczescie, Urok, wybranyTyp}: {
    //     nick: string,         
    // } = (useSelector((state: any) => state) as any).currency;

    const cechy: cechyType[] = ["Cialo", "Umysl", "Urok"]

    const rangi: string[] = ["Znaczek", "Podstawowy", "Lvlowy", "Mistrzowski", "Arcymistrzowski", "Pojedynczy", "Polboski", "Boski", "Mutacyjny", "Wlasciwosc"];

    const checkRangaToAdd = (dane: string): boolean => {
        return !(dane=="Znaczek" || dane=="Wlasciwosc") 
    }

    const getRangaOfUmiejka = (rangaUmiejki: number, fullName: boolean = false): string => {
        const umiejkaRanga = rangi[rangaUmiejki-1] ?? "Error ranga <= 0";
        if(fullName && checkRangaToAdd(umiejkaRanga)) return ["Talent", umiejkaRanga].join(' ');  
        return umiejkaRanga
    }

    const returnCecha = (cecha: number | cechyType): string | number => {
        if(typeof cecha == "number") return cechy[cecha]
        return cechy.indexOf(cecha)
    } // return name of cecha or id of cecha

    const setNewIdUzytkownika = (newIdUzytkownika: number) => {
        dispatch(setIdUzytkownika(newIdUzytkownika));
    }

    const setNewCialo = (newCialo: number) => {
        dispatch(setCialo(newCialo));
    }

    const setNewUmysl = (newUmysl: number) => {
        dispatch(setUmysl(newUmysl));
    }

    const setNewUrok = (newUrok: number) => {
        dispatch(setUrok(newUrok));
    }

    const setNewSzczescie = (newSzczescie: number) => {
        dispatch(setSzczescie(newSzczescie));
    }

    return ({
        returnCecha, getRangaOfUmiejka
    })
}

export default usePlayer