import { useState } from "react";
import LoginPage from "../LoginPage.tsx/LoginPage";
import MainPage from "../MainPage.tsx/MainPage";
import AdminPage from "../Admin/AdminPage";

const ChoosePage = () => {


    const inicjalPage: number = 0;

    // 0 => Login page
    // 1 => Main page
    // 2 => Shop page
    // 3 => Admin Page

    const [choosenPage, setChoosenPage] = useState(inicjalPage);
    // console.log("choose page randered")

   
    

    // console.log("Effect: ", sql`SELECT * FROM postac WHERE postac.id=1`);

    return <>
        {
            choosenPage==0 ? <LoginPage setPage={setChoosenPage} /> : 
            choosenPage==1 ? <MainPage setPage={setChoosenPage} /> :
            choosenPage==3 ? <AdminPage setPage={setChoosenPage} /> :
            ''
        }
    </>
}

export default ChoosePage