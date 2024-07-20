import pageType from "../../config/types/pageType";
import useSql from "../../hooks/backend/sql";
import usePlayer from "../../hooks/usePlayer"



const MainPage = ({loginOut}: pageType) => {

    // const player = usePlayer();

   

    return <div>
        <button onClick={loginOut}>Logout</button>
    </div>
}

export default MainPage