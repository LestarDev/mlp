import { useState } from "react";
import LoginPage from "../LoginPage.tsx/LoginPage";
import MainPage from "../MainPage.tsx/MainPage";

const ChoosePage = () => {


    const inicjalPage: number = 0;

    // 0 => Login page
    // 1 => Main page
    // 2 => Shop page

    const [choosenPage, setChoosenPage] = useState(inicjalPage);

   

    
    

    const logIn = () => {
        setChoosenPage(1);
    }

    const logOut = () => {
        setChoosenPage(0);
    }

    // console.log("Effect: ", sql`SELECT * FROM postac WHERE postac.id=1`);

    return <>
        {
            choosenPage==0 ? <LoginPage loginOut={logIn} /> : 
            choosenPage==1 ? <MainPage loginOut={logOut} /> :
            ''
        }
    </>
}

export default ChoosePage