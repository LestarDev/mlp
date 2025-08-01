import { useDispatch, useSelector } from "react-redux"
import { choosenType, setCialo, setExp, setIdUzytkownika, setImgLink, setLvl, setNick, setRasa, setRefreshPage, setUmiejetnosci, setUmysl, setUrok, setWybranyTyp, setZloteGalopy } from "../config/currentSlice";
import umiejetnosciType from "../config/types/umiejetnosciType";

const usePlayer = () => {

    const dispatch = useDispatch();

    const {nick,dodHP, lvl, Umysl, refreshPage, Cialo, idUzytkownika, Urok, wybranyTyp, exp, umiejetnosci, imgLink, zloteGalopy, rasa}: {
        nick: string, dodHP: number, lvl: number, Cialo: number, Umysl: number, Urok: number, refreshPage: boolean, idUzytkownika: number, wybranyTyp: choosenType, exp: number, umiejetnosci: umiejetnosciType[], imgLink: string, zloteGalopy: string, rasa:string,       
    } = (useSelector((state: any) => state) as any).currency;

    // const cechy: cechyType[] = ["Cialo", "Umysl", "Urok"]

    const rangi: string[] = ["Znaczek", "Podstawowy", "Lvlowy", "Mistrzowski", "Arcymistrzowski", "Pojedynczy", "Polboski", "Boski", "Mutacyjny", "Wlasciwosc", "Zero"];

    const checkRangaToAdd = (dane: string): boolean => !(dane=="Znaczek" || dane=="Wlasciwosc") 

    const recalculateToDices = (toCal: number): string => toCal>20 ? "k20+"+(toCal-20) : "k"+(toCal);


    const calculateHP = (): number => {
        return Cialo + Umysl + dodHP;
    }

    const getRangaOfUmiejka = (rangaUmiejki: number, fullName: boolean = false): string => {
        const umiejkaRanga = rangi[rangaUmiejki-1] ?? "Error ranga <= 0";
        if(fullName && checkRangaToAdd(umiejkaRanga)) return ["Talent", umiejkaRanga].join(' ');  
        return umiejkaRanga
    }

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

    const setNewRasa = (newRasa: string) => {
        dispatch(setRasa(newRasa));
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

    const setNewImgLink = (newImgLink: string) => {
        dispatch(setImgLink(newImgLink));
    }

    const setNewSection = (newSection: choosenType) => {
        dispatch(setWybranyTyp(newSection));
    }

    const rerollPage = () => {
        dispatch(setRefreshPage(!refreshPage));
    }

    const clear = () => {
        setNewIdUzytkownika(-1);
        setNewCialo(0);
        setNewExp(0);
        setNewLvl(0);
        setNewMonety(0);
        setNewNick("");
        setNewRasa("");
        setNewUmiejetnosci([]);
        setNewUmysl(0);
        setNewUrok(0);
        setNewImgLink("");
    }

    return ({
        getRangaOfUmiejka, runRefreshPage, calculateHP, recalculateToDices, clear, rerollPage,
        setNewIdUzytkownika, setNewRasa, setNewCialo, setNewUmysl, setNewUrok, setNewNick, setNewLvl, setNewExp, setNewMonety, setNewUmiejetnosci, setNewImgLink, setNewSection,
        nick, Cialo, Umysl, Urok, dodHP, lvl, idUzytkownika, wybranyTyp, refreshPage, exp, umiejetnosci, imgLink, zloteGalopy, rasa,
    })
}

export default usePlayer