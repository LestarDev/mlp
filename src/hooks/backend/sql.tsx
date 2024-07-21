import { sqlHostLink } from "../../config/config";

const sql = (query: string) => {

    // const emptyResult: string[] = [];

    
    // const [datas, setDatas] = useState(emptyResult);
    
   

        
    
    return [sqlHostLink,query].join("").split(" ").join("+");
   
    // return ["1"];
    // return datas;
    
}

export default sql
