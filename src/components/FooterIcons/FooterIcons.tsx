import { BsBagHeart, BsSearchHeart } from "react-icons/bs"
import { FaArrowCircleRight } from "react-icons/fa"
import { PiListHeart } from "react-icons/pi"
import { RiHomeHeartLine } from "react-icons/ri"
import usePlayer from "../../hooks/usePlayer"
import { loginPageID } from "../../config/config"
import pageType from "../../config/types/pageType"

const FooterIcons = ({setPage}: pageType) => {

    const player = usePlayer();

    return <footer>
        <BsSearchHeart onClick={()=>{

        }} />
        <PiListHeart onClick={()=>{
            player.setNewSection("Talenty")
        }} />
        <RiHomeHeartLine onClick={()=>{
            player.setNewSection("Cechy")
        }} />
        <BsBagHeart onClick={()=>{
            player.setNewSection("Ekwipunek")
        }} />
        <FaArrowCircleRight onClick={()=>{
            document.title="Mlp - login";
            player.clear();
            setPage(loginPageID);
        }} />
    </footer>
}

export default FooterIcons


// BsSearchHeart
// RiHomeHeartLine
// PiListHeart
// BsBagHeart
// FaArrowCircleRight