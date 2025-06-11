import { IoClose } from "react-icons/io5"
import kostkaIcon from "./../../../assets/kostka.svg"
import { BsSearchHeart } from "react-icons/bs"

const SearchStack = () => {
    return <div className="search-section">
        <form>
            <div><img src={kostkaIcon} alt="kostka" /></div>
            <input type="search" name="search" placeholder="Szukaj" id="search" />
            <div>
                <IoClose />
            </div>
            <label htmlFor="search">
                <BsSearchHeart />
            </label>
        </form>
    </div>
}

export default SearchStack