import React from 'react'
import Container from '@material-ui/core/Container'
import {MyCard} from '../Card/MyCard'
import {Link} from 'react-router-dom'
import {useDashboardStyles} from './useDashboardStyles'
import {data} from '../../data'
import {GlobalState} from '../../globalState'
import {Ad} from '../Ad/Ad'

export function Dashboard() {
    const classes = useDashboardStyles()
  
    
    return (
        <div className={classes.bgcolor}>
            <Ad />
            <Container fixed className={classes.cardList}>
                {
                    data.products.map( (user) => (
                        
                        (<Link to={{ pathname: '/cardInfo', state: user }} className={classes.link} key={user.id}>
                            <MyCard state={user}/>
                        </Link>) 
                        ))
                }
            </Container>
            
        </div>
    )
}
