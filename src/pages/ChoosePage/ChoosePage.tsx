import { useState } from "react";
import LoginPage from "../LoginPage.tsx/LoginPage";
import MainPage from "../MainPage.tsx/MainPage";

const ChoosePage = () => {


    const inicjalPage: number = 0;

    // 0 => Login page
    // 1 => Main page
    // 2 => Shop page

    const [choosenPage, setChoosenPage] = useState(inicjalPage);

    return <>
        <button onClick={()=>{setChoosenPage(1)}}>Main</button>
        <button onClick={()=>{setChoosenPage(2)}}>Login</button>
        {
            choosenPage==0 ? <LoginPage /> : 
            choosenPage==1 ? <MainPage /> :
            ''
        }
    </>
}

export default ChoosePage