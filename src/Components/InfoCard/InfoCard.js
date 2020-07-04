import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {useLocation,useHistory} from 'react-router-dom'


const useStyles = makeStyles({
  root: {
    maxWidth: 750,
    justifyContent: 'center',
    margin: 'auto',
    marginTop: '1%',
  },
  media: {
    height: '70vh',
  },
})

export function InfoCard() {
  const classes = useStyles()
  const {state} = useLocation()
  const {goBack} = useHistory()
   

  return (
        <Card className={classes.root} fade>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={state.img}
                    title={state.name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {state.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {state.description}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {`Price: ${state.price}$`}
                </Typography>
               
            
                
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={goBack}>
                Back
                </Button>
                <Button size="small" color="secondary" variant='outlined'>
                Shop Now
                </Button>
            </CardActions>
        </Card>
  )
}
