import { fade, makeStyles } from '@material-ui/core/styles';

export const useMyAppBarStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    amazon_logo: {
        width: 100,
        paddingTop: 20
    },
    appbar: {
        backgroundColor: '#131A22',
        color: 'grey',
    },
    cardList: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 1),
        '&:visited': {
        border: '1px solid orange',
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        },
    },
    searchIcon: {
        height: '100%',
        color:'black',
        position: '',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    inputRoot: {
        color: 'black',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '80ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
        display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
        display: 'none',
        },

    },
    }));