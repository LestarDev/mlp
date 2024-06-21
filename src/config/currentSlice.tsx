import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import umiejetnosciType from "./types/umiejetnosciType";

export type choosenType = 'Ekwipunek' | 'Umiejetnosci' | 'Zdolnosci' | 'Handouty';


export interface CurrentState {
    nick: string,
    lvl: number,
    dodHP: number,
    Umysl: string,
    Cialo: string,
    Urok: string,
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
    Cialo: '',
    dodHP: 0,
    idUzytkownika: 0,
    lvl: 0,
    Szczescie: 0,
    Umysl: '',
    Urok: '',
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

    }
})

export const {setNick,  } = thisSlice.actions

export default thisSlice.reducer