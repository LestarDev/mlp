import { useState } from "react";
import LoginPage from "../LoginPage.tsx/LoginPage";
import MainPage from "../MainPage.tsx/MainPage";

const ChoosePage = () => {


    const inicjalPage: number = 0;

    // 0 => Login page
    // 1 => Main page
    // 2 => Shop page
    // 3 => Admin Page

    const [choosenPage, setChoosenPage] = useState(inicjalPage);

   

    

    // console.log("Effect: ", sql`SELECT * FROM postac WHERE postac.id=1`);

    return <>
        {
            choosenPage==0 ? <LoginPage setPage={setChoosenPage} /> : 
            choosenPage==1 ? <MainPage setPage={setChoosenPage} /> :
            ''
        }
    </>
}

export default ChoosePage