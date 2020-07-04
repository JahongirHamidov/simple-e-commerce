import { makeStyles } from '@material-ui/core/styles';

export const useDashboardStyles = makeStyles((theme) => ({

    cardList: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    }
}))