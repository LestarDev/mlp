import { useEffect, useState } from "react";
import { sqlHostLink } from "../../config/config";

const sql = (query: TemplateStringsArray) => {

    const emptyResult: string[] = [];

    const [datas, setDatas] = useState(emptyResult);

    const asString = String.raw(query);
    const finalString = asString.split(" ").join("+");

    useEffect(()=>{
        fetch(sqlHostLink+finalString).then(response=>response.json()).then((data: string[])=>{
            setDatas(data);
        })
    },[])

    return datas
}

export default sql
