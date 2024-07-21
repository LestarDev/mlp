import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import umiejetnosciType from "./types/umiejetnosciType";

export type choosenType = 'Ekwipunek' | 'Umiejetnosci' | 'Zaklecia' | 'Handouty';


export interface CurrentState {
    nick: string,
    lvl: number,
    dodHP: number,
    Umysl: number,
    Cialo: number,
    Urok: number,
    Szczescie: number,
    idUzytkownika: number,
    wybranyTyp: choosenType,
    refreshPage: boolean,
    zloteGalopy: number,
    exp: number,
    umiejetnosci: umiejetnosciType[]
}


export const initialState: CurrentState = {
    nick: "",
    Cialo: 0,
    dodHP: 0,
    idUzytkownika: 0,
    lvl: 0,
    Szczescie: 0,
    Umysl: 0,
    Urok: 0,
    wybranyTyp: 'Ekwipunek',
    refreshPage: false,
    exp: 0,
    zloteGalopy: 0,
    umiejetnosci: []
}

export const thisSlice = createSlice({
    name: "current",
    initialState,
    reducers: {
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
        setSzczescie: (state, action: PayloadAction<number>) => {
            state.Szczescie = action.payload;
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
    }
})

export const {setNick, setCialo, setDodHP, setExp,setIdUzytkownika,setLvl,setSzczescie,setUmysl,setUrok,setZloteGalopy, setRefreshPage  } = thisSlice.actions

export default thisSlice.reducer