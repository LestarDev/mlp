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
            alert("restore session");
            const queryRestore = `SELECT postac.nick, rasy.name, postac.lvl, 
        rasy.main_ability_name, postac.cialo, postac.umysl, postac.urok, 
        postac.exp, postac.monety, postac.img_link FROM postac INNER JOIN rasy ON rasy.Id=postac.id_rasa WHERE postac.Id='${tryItem}';`;

        fetch(sql(queryRestore)).then(response=>response.json()).then((data: string[])=>{
            console.log(data);
            
            player.setNewNick(data[1]);
            player.setNewRasa(data[2]);
            player.setNewLvl(Number(data[3]));
            player.setNewUmiejetnosci([{
                cecha: "Cialo",
                id: -1,
                nazwa: data[4],
                ranga: 6,
                value: player.lvl > 20 ? 5 : Math.ceil(player.lvl/5 + 1)
            }]);
            player.setNewCialo(Number(data[5]))
            player.setNewUmysl(Number(data[6]))
            player.setNewUrok(Number(data[7]))
            player.setNewExp(Number(data[8]))
            player.setNewMonety(Number(data[9]))
            player.setNewImgLink(data[10])
            player.setNewSection("Cechy")
            setPage(mainPageID);
            // return;
        }).catch((error)=>{
            console.log(error);
            setTryToLogin(-2);
        });

            
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

        const query = `SELECT postac.Id, postac.nick, rasy.name, postac.lvl, 
        rasy.main_ability_name, postac.cialo, postac.umysl, postac.urok, 
        postac.exp, postac.monety, postac.img_link FROM postac INNER JOIN rasy ON rasy.Id=postac.id_rasa WHERE postac.login='${login}' AND postac.password='${password}';`;
        fetch(sql("SELECT 1")).then(response=>response.text()).then(v=>alert(v));        
        fetch(sql(query)).then(response=>response.json()).then((data: any[])=>{
            console.log(data);
            alert(data.toString());
            if(Number(data[0])!=1) {
                setTryToLogin(-1);
                return;
            }

            player.setNewIdUzytkownika(Number(data[1]));
            player.setNewNick(data[2]);
            player.setNewRasa(data[3]);
            player.setNewLvl(Number(data[4]));
            player.setNewUmiejetnosci([{
                cecha: "Cialo",
                id: -1,
                nazwa: data[5],
                ranga: 6,
                value: player.lvl > 20 ? 5 : Math.ceil(player.lvl/5 + 1)
            }]);
            player.setNewCialo(Number(data[6]))
            player.setNewUmysl(Number(data[7]))
            player.setNewUrok(Number(data[8]))
            player.setNewExp(Number(data[9]))
            player.setNewMonety(Number(data[10]))
            player.setNewImgLink(data[11])
            player.setNewSection("Cechy")
            setPage(mainPageID)
        }).catch(error=>{
            alert(error);
            setTryToLogin(-2);
        })


    },[tryToLogin,player.refreshPage])

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
            tryToLogin==-2 ? <p className="wrongLogin">Error</p> : 
            tryToLogin==-1 ? <p className="wrongLogin">Zly login lub haslo</p> : 
            ""
        }
        <button role="submit" onClick={(e)=>{
            e.preventDefault();
            setTryToLogin(1);
        }}>ZALOGUJ</button>
        
    </form>
        <div className="animated-border-box-glow"></div>



    
    </>
}
export default LoginPage