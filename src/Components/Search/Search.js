import React from 'react'
import {data} from '../../data'
import {GlobalState} from '../../globalState'
import {MyCard} from '../Card/MyCard'
export function Search() {
const {value,setValue} = React.useContext(GlobalState)

    return (
        <div>
            <MyCard state = {data.products.map((e)=>{
                if((e.name==value) === true)    
                return value
                })}/>      
        </div>
    )
}
