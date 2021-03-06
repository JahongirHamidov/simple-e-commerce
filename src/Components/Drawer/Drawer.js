import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import StorefrontIcon from '@material-ui/icons/Storefront'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  },
  choose: {
    padding: '30px',
    color: '#ffffff',
    fontSize: '25px',
    backgroundColor: '#131A22'
  },
  menu: {
    textDecoration: 'none',
    color: 'inherit'
  },
  menuIcon: {
    border: '1px solid white',
    marginRight: 20
  }
})

export function MyDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography className={classes.choose}><AccountCircleIcon />  Hello, Sign in</Typography>
      <Divider />
      <List>
        <Link to='/'  className={classes.menu}>
          <ListItem button>
            <ListItemIcon><StorefrontIcon/></ListItemIcon>
              Products
            <Divider/>
          </ListItem>
        </Link>
        <Link to='/myCart' className={classes.menu}>
          <ListItem button>
            <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
              Cart
            <Divider/>
          </ListItem>
        </Link>
        <Link to='/addCard' className={classes.menu}>
          <ListItem button>
            <ListItemIcon><AccountCircleIcon/></ListItemIcon>
              Profile
            <Divider/>
          </ListItem>
        </Link>
      </List>

      
    </div>
  )

  return (
    <div>
        {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)} color='inherit' className={classes.menuIcon}>{
                    <MenuIcon/>
                }</Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
                ))}
    </div>
  )
}
