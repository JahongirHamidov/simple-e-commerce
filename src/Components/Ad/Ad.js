import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    
  },
  image: {
    width: '100%'
  }
 
})

export function Ad() {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.root} >
        <img className={classes.image} src='https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/f4b165f5-678a-48bb-a049-11e7ddc2168d._UR3000,600_SX1500_FMwebp_.jpg'></img>
    </Paper>
  )
}
