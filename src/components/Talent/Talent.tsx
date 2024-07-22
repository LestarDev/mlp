import umiejetnosciType from "../../config/types/umiejetnosciType"

const Talent = (umiejka: umiejetnosciType) => {
    return <div className={
        umiejka.ranga==1 ? "Znaczek" :
        umiejka.ranga==2 ? "Podstawowy" :
        umiejka.ranga==3 ? "Lvlowy" :
        umiejka.ranga==4 ? "Mistrzowski" :
        umiejka.ranga==5 ? "Arcymistrzowski" :
        umiejka.ranga==6 ? "Pojedynczy" :
        umiejka.ranga==7 ? "Polboski" :
        umiejka.ranga==8 ? "Boski" :
        umiejka.ranga==9 ? "Mutacyjny" :
        umiejka.ranga==10 ? "Wlasciwosci" :
        "Zerowy"
    }>
        <span>{umiejka.nazwa}</span>

    </div>
}

export default Talent 