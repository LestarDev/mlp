import pageType from "../../config/types/pageType"

const LoginPage = ({loginOut}: pageType) => {

    return <div>
        <button onClick={loginOut}>Login</button>
    </div>
}
export default LoginPage