"use client"

import {useReducer, createContext} from "react";

export const Store = createContext ()
//el estado inicial o variable de estado
const initialState = {
    cart:{
        cartItems:[]
    }
}


//funcion reductora crear logica funcional
function reducer (state, action){

    switch (action.type) {
        case 'CARD_ADD_ITEM':{
            const newItem = action.payload
            const existItem = state.cart.cartItems.find(item => item.id === newItem.id)
            //si existe o no al guardar
            const cartItems = existItem ? state.cart.cartItems.map(item => item.name === existItem.name ? newItem: item)
            : [...state.cart.cartItems, newItem]

            return {...state, cart:{...state.cart, cartItems}}
        } 
    
        default:
        return state;
    }
}

//funcion para crear el store y childrens
export default function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    return <Store.Provider value={value}>{children}</Store.Provider>
}