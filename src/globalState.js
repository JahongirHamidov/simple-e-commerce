import React, {createContext} from 'react'
export const GlobalState = createContext()


export function Provider(props){
    const [ numberProducts , setNumberProducts ] = React.useState(0)
    const [ selectedProducts, setSelectedProducts ] = React.useState([]) 
    const [arr, setArr] = React.useState([]) 
    const [value,setValue] = React.useState('')
    const values = {
        numberProducts,
        setNumberProducts,
        selectedProducts,
        setSelectedProducts,
        value,
        setValue
    }
    return(
        <GlobalState.Provider value={values}>
            {props.children}    
        </GlobalState.Provider>
    )
}