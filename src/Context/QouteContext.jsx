import { createContext, useReducer } from "react";
import QouteReducer from "./QouteReducer";

const QouteContext = createContext()

export const QouteProvider = ({children}) =>{
       
  const initialState = {
    qoute: null
  }

    const [state , dispatch] = useReducer(QouteReducer , initialState)

    return(
        <QouteContext.Provider value={{
            ...state , dispatch
            }}>
            {children}
        </QouteContext.Provider>
    )
}

export default QouteContext