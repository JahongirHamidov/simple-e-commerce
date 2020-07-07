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
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

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

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  
  const [value, setValue] = React.useState(props.state.rating)

  return (
  <>  
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.state.img}
          title="Contemplative Reptile"
        />
        <Link to='/'>
          <Box component="fieldset" mt={1} mb={-2} borderColor="transparent">
            <Rating 
              value={value}
              name="simple-controlled"
              onChange={(event, newValue) => {setValue(newValue)}}
              />
          </Box>
        </Link>

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
    <Link to='/myCart'>
      <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={open}
          autoHideDuration={1500}
          message={`${props.state.name} added`}  
          onClose={handleClose}       
      />
    </Link>
  </>
  )
}
