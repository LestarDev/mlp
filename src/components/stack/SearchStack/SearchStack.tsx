import { IoClose } from "react-icons/io5"
import kostkaIcon from "./../../../assets/kostka.svg"
import { BsSearchHeart } from "react-icons/bs"
import { useEffect, useRef, useState } from "react"
import usePlayer from "../../../hooks/usePlayer"
import Talent from "../../Talent/Talent"

const SearchStack = () => {

    const [text, setText] = useState('');

    const refSerach = useRef<HTMLInputElement>(null);

    const [toShow, setToShow] = useState<JSX.Element[]>([]);

    const player = usePlayer();
    useEffect(()=>{
        setToShow([]);
        if(!text) return;
        player.umiejetnosci.filter(u=>u.nazwa.includes(text)).forEach((v,i)=>{
            setToShow(prevV=>[...prevV,<div>
                <Talent umiejka={v} key={`search-${i}`} />
            </div>])
        })
    },[text])

    return <div className="search-section">
        <form>
            <div><img src={kostkaIcon} alt="kostka" /></div>
            <input type="search" name="search" ref={refSerach} placeholder="Szukaj" id="search" onChange={()=>{
                setText(refSerach.current!.value);
            }} />
            <div onClick={()=>{
                setText("");
                refSerach.current!.value="";
            }}>
                <IoClose />
            </div>
            <label htmlFor="search">
                <BsSearchHeart />
            </label>
        </form>
        <div className="allTalenty">

        {toShow}
        </div>
    </div>
}

export default SearchStack