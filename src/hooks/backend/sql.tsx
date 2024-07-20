import { useEffect, useState } from "react";
import { sqlHostLink } from "../../config/config";

const sql = (query: TemplateStringsArray) => {

    const [datas, setDatas] = useState();

    const asString = String.raw(query);
    const finalString = asString.split(" ").join("+");

    useEffect(()=>{
        fetch(sqlHostLink+finalString).then(response=>response.json()).then((data: any)=>{
            setDatas(data);
        })
    },[])

    return datas
}

export default sql
