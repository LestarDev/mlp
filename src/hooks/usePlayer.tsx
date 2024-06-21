import cechyType from "../config/types/cechyType"

const usePlayer = () => {

    const cechy: cechyType[] = ["Cialo", "Umysl", "Urok"]

    const returnCecha = (cecha: number | cechyType): string | number => {
        if(typeof cecha == "number") return cechy[cecha]
        return cechy.indexOf(cecha)
    } // return name of cecha or id of cecha

    return ({
        returnCecha
    })
}

export default usePlayer