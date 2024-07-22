import { useDispatch, useSelector } from "react-redux"
import { choosenType, setCialo, setExp, setIdUzytkownika, setLvl, setNick, setRefreshPage, setSzczescie, setUmiejetnosci, setUmysl, setUrok, setZloteGalopy } from "../config/currentSlice";
import umiejetnosciType from "../config/types/umiejetnosciType";

const usePlayer = () => {

    const dispatch = useDispatch();

    const {nick,dodHP, lvl, Umysl, refreshPage, Cialo, idUzytkownika, Szczescie, Urok, wybranyTyp, exp, umiejetnosci}: {
        nick: string, dodHP: number, lvl: number, Cialo: number, Umysl: number, Urok: number, refreshPage: boolean, idUzytkownika: number, Szczescie: number, wybranyTyp: choosenType, exp: number, umiejetnosci: umiejetnosciType[],         
    } = (useSelector((state: any) => state) as any).currency;

    // const cechy: cechyType[] = ["Cialo", "Umysl", "Urok"]

    const rangi: string[] = ["Znaczek", "Podstawowy", "Lvlowy", "Mistrzowski", "Arcymistrzowski", "Pojedynczy", "Polboski", "Boski", "Mutacyjny", "Wlasciwosc"];

    const checkRangaToAdd = (dane: string): boolean => {
        return !(dane=="Znaczek" || dane=="Wlasciwosc") 
    }

    //mysle czy jej te kartki podniesc czy nie wypada

    // const tabDices = [3, 4, 6, 8, 10, 12, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32];

    const recalculateToDices = (toCal: number, withK: boolean = false): number | string => {
        // const diceVal: number = isLvlZero ? tabDices[toCal] ?? 0 : tabDices[toCal+1] ?? -1;
        return withK ?  (toCal>20 ? "k20+"+(toCal-20) : "k"+(toCal)) : toCal
    }


    const calculateHP = (): number => {
        return Cialo + Umysl + dodHP;
    }

    const getRangaOfUmiejka = (rangaUmiejki: number, fullName: boolean = false): string => {
        const umiejkaRanga = rangi[rangaUmiejki-1] ?? "Error ranga <= 0";
        if(fullName && checkRangaToAdd(umiejkaRanga)) return ["Talent", umiejkaRanga].join(' ');  
        return umiejkaRanga
    }

    // const returnCecha = (cecha: number | cechyType): string | number => {
    //     if(typeof cecha == "number") return cechy[cecha]
    //     return cechy.indexOf(cecha)
    // } // return name of cecha or id of cecha

    const runRefreshPage = () => {
        dispatch(setRefreshPage(!refreshPage))
    }

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

    const setNewNick = (newNick: string) => {
        dispatch(setNick(newNick));
    }

    const setNewLvl = (newLvl: number) => {
        dispatch(setLvl(newLvl));
    }

    const setNewExp = (newExp: number) => {
        dispatch(setExp(newExp));
    }

    const setNewMonety = (newMonety: number) => {
        dispatch(setZloteGalopy(newMonety));
    }

    const setNewUmiejetnosci = (newUmiejetnosci: umiejetnosciType[]) => {
        dispatch(setUmiejetnosci(newUmiejetnosci));
    }

    return ({
        getRangaOfUmiejka, runRefreshPage, calculateHP, recalculateToDices,
        setNewIdUzytkownika, setNewSzczescie, setNewCialo, setNewUmysl, setNewUrok, setNewNick, setNewLvl, setNewExp, setNewMonety, setNewUmiejetnosci,
        nick, Cialo, Szczescie, Umysl, Urok, dodHP, lvl, idUzytkownika, wybranyTyp, refreshPage, exp, umiejetnosci
    })
}

export default usePlayer