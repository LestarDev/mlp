import { useEffect, useRef, useState } from "react";
import pageType from "../../config/types/pageType"
import sql from "../../hooks/backend/sql";
import usePlayer from "../../hooks/usePlayer";
import "./LoginPage.css"
import { adminPageID, mainPageID } from "../../config/config";

const LoginPage = ({setPage}: pageType) => {

    const refLogin = useRef<HTMLInputElement>(null);
    const refPassword = useRef<HTMLInputElement>(null);

    const [tryToLogin, setTryToLogin] = useState(0);

    const player = usePlayer();


    useEffect(()=>{

        const tryItem = localStorage.getItem("id");

        if(tryItem){
            localStorage.removeItem("id");
            player.setNewIdUzytkownika(Number(tryItem));
            setPage(mainPageID); // przepisac funkcje void na React.dispatch<choosePage>
            return;
        }

        const login = refLogin.current?.value;
        const password = refPassword.current?.value;

        if(!login) return;
        if(!password) return;

        if(login=="Admin" && password=="op9001!"){
            player.setNewIdUzytkownika(Number(-999));
            setPage(adminPageID)
            return;
        }

        const query = `SELECT id FROM uzytkownik WHERE login="${login}" and password="${password}";`;

        fetch(sql(query)).then(response=>response.json()).then((data: string[])=>{
            if(Number(data[0])<=0) {
                setTryToLogin(-1);
                return;
            }
            player.setNewIdUzytkownika(Number(data[1]));
            // setIdUz(Number(data[1]));
            // console.log("idUz", idUz.toString())
            // loginOut();
            setPage(mainPageID)
        })

        // const player = usePlayer();

        

    },[tryToLogin])

    

    return <form className="loginForm">
        <div>
            <label>Login: <input type="text" ref={refLogin} /></label>
            <label>Hasło: <input type="password" ref={refPassword} /></label>
        </div>
        {
            tryToLogin>0 ? <p>Fetching...</p> : 
            tryToLogin==-1 ? <p>Zly login albo haslo</p> :
            ""
        }
        <p>Try to login: {tryToLogin}</p>
        <button role="submit" onClick={(e)=>{
            e.preventDefault();
            setTryToLogin(preV=>preV++)
            }}>Login</button>
        
    </form>
}
export default LoginPage