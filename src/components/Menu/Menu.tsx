import { useState } from "react"

const Menu = () => {

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return <div>

    {
        isMenuOpened ? <></> : <>
            <span></span>
            <span></span>
            <span></span>
        </>
    }

    </div>
}

export default Menu