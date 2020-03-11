import React, { useState, useEffect } from 'react';
import DenseAppBar from '../components/appbar.js'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import BorderWrapper from 'react-border-wrapper'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut, tokenInsert } from '../actions'
import login from '../axiosRequests/login.js';
import validate from '../functions/validate'
import FetchMyRequests from '../functions/FetchMyRequests';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "green",
        color: theme.palette.common.white,
        width: 300
    },
    body: {
        fontSize: 20,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 500,

        },

    },
    wraper: {
        marginLeft: "16%",
        marginTop: "5%",

    }
}));



const MyEnterReqPage = () => {
    const classes = useStyles();
    const [AllreqArray, setAllreqArray] = useState([])
    const [errorMessage, seterrorMessage] = useState('')
    useEffect(() => {
        validate()
        FetchMyRequests().then((result) => {
            if (result === "No requests found")
                seterrorMessage(result)

            else {
                setAllreqArray(result.data)
                console.log(result.data)
            }
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (

        < body >
            <navbar>
                < DenseAppBar />
            </navbar>
            <div className={classes.wraper}>
                <React.Fragment>
                    <CssBaseline />
                    <Container fixed>
                        {AllreqArray.length > 0 ? <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>ID</StyledTableCell>

                                        <StyledTableCell align="right">Party ID</StyledTableCell>
                                        <StyledTableCell align="right">Party Owner ID</StyledTableCell>
                                        <StyledTableCell align="right">Request date</StyledTableCell>
                                        <StyledTableCell align="right">Confirmed by party owner</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {AllreqArray.map(row => (
                                        <StyledTableRow key={row.id}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.id}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.PartyID}</StyledTableCell>
                                            <StyledTableCell align="right">{row.PartyOwnerID}</StyledTableCell>
                                            <StyledTableCell align="right">{row.requestDate}</StyledTableCell>
                                            <StyledTableCell align="right">{row.confirmedByPartyOwner ? <p>True</p> : <p>False</p>}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer> : <Typography variant="h3" component="h2" color="secondary">
                                {errorMessage}</Typography>}

                    </Container>
                </React.Fragment>

            </div>



        </body >

    );
}

export default MyEnterReqPage;