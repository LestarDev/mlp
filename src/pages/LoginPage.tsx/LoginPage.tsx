import { useEffect, useRef, useState } from "react";
import pageType from "../../config/types/pageType"
import sql from "../../hooks/backend/sql";
import usePlayer from "../../hooks/usePlayer";

const LoginPage = ({loginOut}: pageType) => {

    const refLogin = useRef<HTMLInputElement>(null);
    const refPassword = useRef<HTMLInputElement>(null);

    const [tryToLogin, setTryToLogin] = useState(true);

    const player = usePlayer();

    useEffect(()=>{
        const login = refLogin.current?.value;
        const password = refPassword.current?.value;

        if(!login) return;
        if(!password) return;

        const query = `SELECT id FROM uzytkownik WHERE login="${login}" and password="${password}";`;

        fetch(sql(query)).then(response=>response.json()).then((data: string[])=>{
            if(Number(data[0])<=0) return ;
            player.setNewIdUzytkownika(Number(data[1]));
            loginOut();
        })

    },[tryToLogin])

    return <div>
        <div>
            <label>Login: <input type="text" ref={refLogin} /></label>
            <label>Hasło: <input type="password" ref={refPassword} /></label>
        </div>
        <button onClick={()=>{setTryToLogin(preV=>!preV)}}>Login</button>
    </div>
}
export default LoginPage