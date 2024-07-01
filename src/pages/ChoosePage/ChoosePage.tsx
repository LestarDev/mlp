import { useState } from "react";
import LoginPage from "../LoginPage.tsx/LoginPage";
import MainPage from "../MainPage.tsx/MainPage";
import useSql from "../../hooks/backend/useSql";
import usePlayer from "../../hooks/usePlayer";

const ChoosePage = async () => {


    const inicjalPage: number = 0;

    // 0 => Login page
    // 1 => Main page
    // 2 => Shop page

    const [choosenPage, setChoosenPage] = useState(inicjalPage);

    const sql = useSql();
    // usePlayer().setNewNick(sql.getNickFromDemonic())

    console.log(sql.getNickFromDemonic());
    

    const logIn = () => {
        setChoosenPage(1);
    }

    const logOut = () => {
        setChoosenPage(0);
    }

    return <>
        {
            choosenPage==0 ? <LoginPage loginOut={logIn} /> : 
            choosenPage==1 ? <MainPage loginOut={logOut} /> :
            ''
        }
    </>
}

export default ChoosePage