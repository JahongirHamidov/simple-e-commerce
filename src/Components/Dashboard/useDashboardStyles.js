import { makeStyles } from '@material-ui/core/styles';

export const useDashboardStyles = makeStyles((theme) => ({
    bgcolor: {
        backgroundColor: '#eaeded'
    },
    cardList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    }
}))