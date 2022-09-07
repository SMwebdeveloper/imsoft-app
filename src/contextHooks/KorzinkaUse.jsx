import { useContext } from "react";
import { KorzinkaContext } from "../context/useKorzinkaContext";

export const KorzinkaUse = () => {
    const context = useContext(KorzinkaContext)

    if (!context) {
        throw new Error('KorzinkaContext() must be in the KorzinkaContextProvider()')
    }

    return context
}