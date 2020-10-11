import React from 'react'
import {data} from '../../data'
import {GlobalState} from '../../globalState'
import {MyCard} from '../Card/MyCard'
import {Ad} from '../Ad/Ad.js'

export function Search() {
const {value,setValue} = React.useContext(GlobalState)

    return (
        <div>
            <Ad />
            <MyCard state = {data.products.map((e)=>{
                if(e.name == value)    
                return value
                })}/>      
        </div>
    )
}
