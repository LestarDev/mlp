import { sqlHostPush } from "../../config/config"

const sqlPush = (query: string) => {
    return [sqlHostPush, query].join("").split(" ").join("+");
}

export default sqlPush