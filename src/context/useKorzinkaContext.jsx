import { useReducer, createContext } from "react";

export const KorzinkaContext = createContext()

const changeState = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CHOOSEN":
            return {...state, choosenItem: [...state.choosenItem, action.payload]}
        case "DELETED" :
            return {...state, choosenItem: action.payload}
        default:
            return state
    }
}

export default function KorzinkaContextProvider({children}) {
    const [state, dispatch] = useReducer(changeState, {
        choosenItem: []
    })

    const addToChoosen = (tanlanganMaket) => {
        dispatch({type: "ADD_TO_CHOOSEN", payload:tanlanganMaket})
    }

    const deletedItem = (id) => {
        const items = state.choosenItem

        const deletedItem = items.filter((item) => {
            return item.id !== id
        })
        dispatch({type: "DELETED", payload:deletedItem})
    }

    return(
        <KorzinkaContext.Provider value={{...state, addToChoosen, deletedItem}}>
            {children}
        </KorzinkaContext.Provider>
    )
}
  