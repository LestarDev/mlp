import { useState } from "react"
import "./Menu.css"
import usePlayer from "../../hooks/usePlayer";
import RefreshButton from "../RefreshButton/RefreshButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import pageType from "../../config/types/pageType";

const Menu = ({setPage}: pageType) => {

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const player = usePlayer();

    return <div className={isMenuOpened ? "menu openedMenu" : "menu"} onClick={()=>{
        if(!isMenuOpened) setIsMenuOpened(true);
    }}>

    {
        isMenuOpened ? <div className="innerOpen">
            <div className="innerOpen-close" onClick={()=>{
                setIsMenuOpened(false);
            }}>x</div>
                <span>Sekcje</span>
                <div className="innerOpen-sectionConteiner">
                    <div>
                        <button onClick={()=>{
                            player.setNewSection("Ekwipunek");
                        }}>Ekwipunek</button>
                        <button onClick={()=>{
                            player.setNewSection("Talenty");
                        }}>Talenty</button>
                    </div>
                    <div>
                        <button onClick={()=>{
                            player.setNewSection("Cechy");
                        }}>Cechy</button>
                        <button onClick={()=>{
                            player.setNewSection("Search");
                        }}>Search</button>
                    </div>
                    <div>
                        <LogoutButton setPage={setPage} />
                        <RefreshButton />
                    </div>
                </div>
                
            
            
        
        </div> : <>
            <span></span>
            <span></span>
            <span></span>
        </>
    }

    </div>
}

export default Menu