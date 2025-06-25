import { useEffect, useRef, useState } from "react";
import pageType from "../../config/types/pageType"
import usePlayer from "../../hooks/usePlayer";
import "./LoginPage.css"
import { adminPageID, mainPageID } from "../../config/config";
import sql from "../../hooks/backend/sql";

const LoginPage = ({setPage}: pageType) => {

    const refLogin = useRef<HTMLInputElement>(null);
    const refPassword = useRef<HTMLInputElement>(null);

    const [tryToLogin, setTryToLogin] = useState(0);

    const player = usePlayer();

    // console.log("login page randered")


    useEffect(()=>{

        const tryItem = localStorage.getItem("id");

        if(tryItem){
            localStorage.removeItem("id");
            player.setNewIdUzytkownika(Number(tryItem));
            setPage(mainPageID);
            return;
        }

        const login = refLogin.current?.value;
        const password = refPassword.current?.value;

        if(!login || !password){
            if(tryToLogin!=0) setTryToLogin(-1);
            return;
        }

        if(login=="Admin" && password=="op9001!"){
            player.setNewIdUzytkownika(Number(-999));
            setPage(adminPageID)
            return;
        }

        const query = `SELECT postac.Id, postac.nick, rasy.name, postac.lvl, rasy.main_ability_name, postac.cialo, postac.umysl, postac.urok, postac.exp, postac.monety, postac.img_link FROM postac INNER JOIN rasy ON rasy.Id=postac.id_rasa WHERE postac.login='${login}' AND postac.password='${password}';`;

        fetch(sql(query)).then(response=>response.json()).then((data: string[])=>{

            console.log(data);

            if(Number(data[0])!=1 && tryToLogin!=0) {
                setTryToLogin(-1);
                return;
            }

            player.setNewIdUzytkownika(Number(data[1]));
            player.setNewNick(data[2]);
            player.setNewRasa(data[3]);
            player.setNewLvl(Number(data[4]));
            console.log("lvl",player.lvl)
            setPage(mainPageID)
        })


    },[tryToLogin,player.refreshPage])

    const increment = (v: number) => {
        return v+1;
    }

    return <>
    
    <div className="background-fixed background-login" />

    
    <form className="loginForm animated-border-box">
        <span>LOGOWANIE</span>
        <div>
            <label><span>Login</span> <input type="text" ref={refLogin} /></label>
            <label><span>Haslo</span> <input type="password" ref={refPassword} /></label>
        </div>
        { 
            tryToLogin>0 ? <p>Fetching...</p> :
            tryToLogin!=0 ? <p className="wrongLogin">Zly login lub haslo</p> :
            ""
        }
        <button role="submit" onClick={(e)=>{
            e.preventDefault();
            setTryToLogin(preV=>increment(preV))
            }}>ZALOGUJ</button>
        
    </form>
        <div className="animated-border-box-glow"></div>



    
    </>
}
export default LoginPage