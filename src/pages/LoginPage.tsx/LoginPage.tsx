import { useEffect, useRef, useState } from "react";
import pageType from "../../config/types/pageType"
import usePlayer from "../../hooks/usePlayer";
import "./LoginPage.css"
import { adminPageID, mainPageID } from "../../config/config";

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

        // const query = `SELECT id FROM uzytkownik WHERE login="${login}" and password="${password}";`;

        // fetch(sql(query)).then(response=>response.json()).then((data: string[])=>{

        //     if(Number(data[0])!=1 && tryToLogin!=0) {
        //         setTryToLogin(-1);
        //         return;
        //     }

        //     player.setNewIdUzytkownika(Number(data[1]));
        //     setPage(mainPageID)
        // })

        if (login=="x" && password=="x"){
            player.setNewIdUzytkownika(1);
            setPage(mainPageID);
        } 

        if(login=="Erin" && password=="11037"){
            player.setNewIdUzytkownika(2)
            setPage(mainPageID)
        }

        if(login=="Kwiatuszek" && password=="KochamGo"){
            player.setNewIdUzytkownika(4)
            setPage(mainPageID)
        }

        if(login=="haslo" && password=="1234"){
            player.setNewIdUzytkownika(3)
            setPage(mainPageID)
        }

        if(login=="chęć" && password=="4321"){
            player.setNewIdUzytkownika(5)
            setPage(mainPageID)
        }

        

    },[tryToLogin])

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
            tryToLogin==-1 ? <p className="wrongLogin">Zly login lub haslo</p> :
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