import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import umiejetnosciType from "./types/umiejetnosciType";

export type choosenType = 'Ekwipunek' | 'Talenty' | 'Search' | 'Cechy';


export interface CurrentState {
    nick: string,
    lvl: number,
    dodHP: number,
    Umysl: number,
    Cialo: number,
    Urok: number,
    idUzytkownika: number,
    wybranyTyp: choosenType,
    refreshPage: boolean,
    zloteGalopy: number,
    exp: number,
    umiejetnosci: umiejetnosciType[],
    imgLink: string,
    rasa: string
}


export const initialState: CurrentState = {
    nick: "",
    Cialo: 0,
    dodHP: 0,
    idUzytkownika: 0,
    lvl: 0,
    rasa: "",
    Umysl: 0,
    Urok: 0,
    wybranyTyp: 'Talenty',
    refreshPage: false,
    exp: 0,
    zloteGalopy: 0,
    umiejetnosci: [],
    imgLink: ""
}

export const thisSlice = createSlice({
    name: "current",
    initialState,
    reducers: {
        setRasa: (state, action: PayloadAction<string>) => {
            state.rasa = action.payload;
        },
        setNick: (state, action: PayloadAction<string>) =>{
            state.nick=action.payload;
        },
        setCialo: (state, action: PayloadAction<number>) => {
            state.Cialo = action.payload;
        },
        setUmysl: (state, action: PayloadAction<number>) => {
            state.Umysl = action.payload;
        },
        setUrok: (state, action: PayloadAction<number>) => {
            state.Urok = action.payload;
        },
        setIdUzytkownika: (state, action: PayloadAction<number>) => {
            state.idUzytkownika = action.payload;
        },
        setLvl: (state, action: PayloadAction<number>) => {
            state.lvl = action.payload;
        },
        setExp: (state, action: PayloadAction<number>) => {
            state.exp = action.payload;
        },
        setZloteGalopy: (state, action: PayloadAction<number>) => {
            state.zloteGalopy = action.payload;
        },
        setDodHP: (state, action: PayloadAction<number>) => {
            state.dodHP = action.payload;
        },
        setRefreshPage: (state, action: PayloadAction<boolean>) => {
            state.refreshPage = action.payload
        },
        setUmiejetnosci: (state, action: PayloadAction<umiejetnosciType[]>) => {
            state.umiejetnosci = action.payload
        },
        setImgLink: (state, action: PayloadAction<string>) => {
            state.imgLink = action.payload;
        },
        setWybranyTyp: (state, action: PayloadAction<choosenType>) => {
            state.wybranyTyp = action.payload
        }
    }
})

export const {setNick, setCialo, setDodHP, setExp,setIdUzytkownika,setLvl,setRasa,setUmysl,setUrok,setZloteGalopy, setRefreshPage, setUmiejetnosci, setImgLink, setWybranyTyp  } = thisSlice.actions

export default thisSlice.reducer