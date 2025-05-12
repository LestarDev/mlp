import umiejetnosciType from "./umiejetnosciType"

type singlePlayerType = {
    nick: string,
    exp: number,
    lvl: number,
    id: number,
    cialo: number,
    umysl: number,
    urok: number,
    talents: umiejetnosciType[]
}

export default singlePlayerType