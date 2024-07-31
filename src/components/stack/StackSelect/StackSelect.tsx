import usePlayer from "../../../hooks/usePlayer"
import TalentyStack from "../TalentyStack/TalentyStack";

const StackSelect = () => {

    const player = usePlayer();

    return <>
        {
            player.wybranyTyp=="Talenty" ? <TalentyStack id={player.idUzytkownika} /> :
            ''
        }
    </>
}

export default StackSelect