import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {GlobalState} from '../../globalState'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import IconButton from '@material-ui/core/IconButton'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow)


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    card: {
        maxWidth: 750,
        margin: '5%'
    },
    smallCard: {
        minWidth: 300,
        margin: '5%',
        padding: 20,
        backgroundColor: '#F1F3EF'

  },
  division: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    price: {
        color: '#ff0000'
    },
    button: {
        margin: '5%',
    },
    basket: {
        color: 'grey',
        margin: '2%',
        fontFamily: 'Century Gothic',      
        
    }
})

export function Basket() {
    
    const classes = useStyles()
    const { selectedProducts, setSelectedProducts, arr } = React.useContext(GlobalState)
    const [amount , setAmount] = React.useState(1)
    
    function createData(name, price, amount, totalPrice) {
        return { name, price, amount, totalPrice }
    }
    

    let rows = [] 
    let overall =  {price:0, discount:0, totalPrice:0}
    return (
    <div className={classes.division}>
        <Card className={classes.card}>
            <Typography variant='h4' component='h4' className={classes.basket} align='center'>My Basket:
            {   
                    selectedProducts ? selectedProducts.map( item => {
                        rows.push(createData( item.name, item.price, amount , (item.price*item.amount)))
                    }) : <Typography>No product</Typography>
                    
            }
            </Typography>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Amount</StyledTableCell>
                        <StyledTableCell align="right">Total price</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                            {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">{`${row.price}$`}</StyledTableCell>
                        <StyledTableCell align="right">
                            <IconButton onClick={()=>{setAmount(amount+1)}} ><AddIcon fontSize='small'/></IconButton>
                                {row.amount}
                            <IconButton onClick={()=>{ amount>0 ? setAmount(amount-1) : setAmount(0)}}><RemoveIcon fontSize='small'/></IconButton>
                        </StyledTableCell>
                        <StyledTableCell align="right">{`${row.totalPrice}$`}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
        <Card className={classes.smallCard}>
            {   rows.map(row=>{
                            overall.price += row.totalPrice
                            overall.totalPrice = overall.price
                        })}
            <Typography component='h1' variant='h4' >Overall:</Typography>
            <Typography component='h3' variant='h6' >{`Price: ${overall.price}$`}</Typography>
            <Typography component='h3' variant='h6' >{`Discount: ${overall.discount}$`}</Typography>
            <Typography component='h3' variant='h6' >{`Total price: ${ overall.totalPrice }$`}</Typography>
            <Button variant='contained' color='secondary' className={classes.button}>Shop Now</Button>

        </Card>
    </div>
  )
}
