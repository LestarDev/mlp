import cechyType from "../config/types/cechyType"

const usePlayer = () => {

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

    return ({
        returnCecha, getRangaOfUmiejka
    })
}

export default usePlayer