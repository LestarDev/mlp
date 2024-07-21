import pageType from "../../config/types/pageType";



const MainPage = ({loginOut}: pageType) => {

    // const player = usePlayer();

   

    return <div>
        <button onClick={loginOut}>Logout</button>
    </div>
}

export default MainPage