import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import {Link} from 'react-router-dom'
import {useMyAppBarStyles} from './useMyAppBarStyles'
import { MyDrawer } from '../Drawer/Drawer'
import {GlobalState} from '../../globalState'
import Button from '@material-ui/core/Button'


export function MyAppBar() {
    const classes = useMyAppBarStyles()
    const {numberProducts, setNumberProducts} = React.useContext(GlobalState)
    
            const [anchorEl, setAnchorEl] = React.useState(null)
            const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

            const isMenuOpen = Boolean(anchorEl)
            const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
            const {value,setValue} = React.useContext(GlobalState)            
            const newValue = e => {
                setValue(e.target.value)
            }
            const handleProfileMenuOpen = (event) => {
                setAnchorEl(event.currentTarget)
            }

            const handleMobileMenuClose = () => {
                setMobileMoreAnchorEl(null)
            }

            const handleMenuClose = () => {
                setAnchorEl(null)
                handleMobileMenuClose()
            }

            const handleMobileMenuOpen = (event) => {
                setMobileMoreAnchorEl(event.currentTarget)
            }

            const menuId = 'primary-search-account-menu'
            const renderMenu = (
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    id={menuId}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Registration</MenuItem>
                </Menu>
            )

            const mobileMenuId = 'primary-search-account-menu-mobile'
            const renderMobileMenu = (
                <Menu
                    anchorEl={mobileMoreAnchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    id={mobileMenuId}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMobileMenuOpen}
                    onClose={handleMobileMenuClose}
                    >

                    <Link to='/myCart' className={classes.link}>
                        <MenuItem>
                            <IconButton color="inherit" onClick={()=>handleMobileMenuClose()}>
                                <Badge badgeContent={numberProducts} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                            <p>My Cart</p>
                        </MenuItem>
                    </Link>
                    <MenuItem onClick={handleProfileMenuOpen}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={()=>handleMobileMenuClose()}
                        >
                        <AccountCircle />
                        </IconButton>
                        <p>Profile</p>
                    </MenuItem>
                </Menu>
            )


    return (
        <div>
            <div className={classes.grow}>
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar>
                        <MyDrawer/>
                        <Link to='/'>
                            <Typography className={classes.title} variant="h6" noWrap>
                                <img     
                                    className={classes.amazon_logo}
                                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                                />
                            </Typography>
                        </Link>
                        <div className={classes.search}>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                value={value}
                                onChange={newValue}
                            />
                        </div>
                        <div>
                        { value.length > 0 ? (    
                            <Link to='/search'>
                                <Button className={classes.searchIcon} variant='contained'>
                                    <SearchIcon/>
                                </Button>
                            </Link> ) : 
                            (<Link to='/'>
                                <Button className={classes.searchIcon} variant='contained'>
                                    <SearchIcon/>
                                </Button>    
                            </Link>)
                        }   
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                        
                        <Link to='/myCart' className={classes.link}>
                            <IconButton aria-label="show 4 new mails" color="inherit" >
                            <Badge badgeContent={numberProducts} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                            </IconButton>
                        </Link>

                            <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={1} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                            <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                            <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
                
            </div>
        </div>
    )
}
