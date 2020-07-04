import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../globalState'
import Snackbar from '@material-ui/core/Snackbar'

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    margin: 25,
  },
  media: {
    height: 140,
  },
  button: {
    justifyContent: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
})

export function MyCard(props) {
  const classes = useStyles()
  const {setNumberProducts, numberProducts, selectedProducts, setSelectedProducts, arr, setArr } = React.useContext(GlobalState)

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  }
  
  return (
  <>  
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.state.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.state.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.state.description}
          </Typography>
          <Typography variant='h5' component='h2'> { `Price: ${props.state.price}$`} </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Link to='/' className={classes.link}>
          
          <Button
            size="small"
            color="secondary"
            variant='contained'
            onClick={()=>{

              handleClick()

              setNumberProducts(numberProducts+1)
              
              setSelectedProducts(data=>[...data, props.state])
              }}> 
            Add to cart
          </Button>

        </Link>
        <Button size="small" color="primary" variant='outlined'>
          Learn more
        </Button>
      </CardActions>
    </Card>
    <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={1000}
        message={`${props.state.name} added`}         
      />
  </>
  )
}
