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
import FetchParties from '../functions/FetchParties.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import getParticipants from '../axiosRequests/getParticipants.js';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

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

    },

}));

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },

});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(5),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


const HomePage = () => {
    const classes = useStyles();
    const [myPartiesArray, setmyPartiesArray] = useState([])
    const [errorMessage, seterrorMessage] = useState('')
    const [Participants, setParticipants] = useState([])
    const [open, setOpen] = useState(false);

    const handleClickOpen = async (PartyID) => {
        setOpen(true);
        try {
            const response = await getParticipants(PartyID)
            setParticipants(response.data)

        }
        catch (error) {
            if (error.response.data === "Something failed")
                alert("Something failed")
        }
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        validate()
        FetchParties().then((result) => {
            if (result === "No parties found")
                seterrorMessage(result)

            else {
                setmyPartiesArray(result.data)
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
                        {myPartiesArray.length > 0 ? <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>ID</StyledTableCell>
                                        <StyledTableCell align="right">Party name</StyledTableCell>
                                        <StyledTableCell align="right">Date</StyledTableCell>
                                        <StyledTableCell align="right">Number of participants</StyledTableCell>
                                        <StyledTableCell align="right">Hour</StyledTableCell>
                                        <StyledTableCell align="right">Participants</StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {myPartiesArray.map(row => (
                                        <StyledTableRow key={row.id}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.id}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.PartyName}</StyledTableCell>
                                            <StyledTableCell align="right">{row.date}</StyledTableCell>
                                            <StyledTableCell align="right">{row.NumberOfParticipants}</StyledTableCell>
                                            <StyledTableCell align="right">{row.hour}</StyledTableCell>
                                            <StyledTableCell align="right">{<Button variant="contained" color="secondary" onClick={() => handleClickOpen(row.id)}>
                                                Participants</Button>}</StyledTableCell>

                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer> : <Typography variant="h3" component="h2" color="secondary">
                                {errorMessage}</Typography>}
                        <Dialog maxWidth={'xl'} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}
                        >
                            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                Participants
                          </DialogTitle>
                            <DialogContent dividers>
                                {Participants.map(participant => (
                                    <List>
                                        <ListItem key={participant}>
                                            <Typography variant="h5" component="h2" color="primary">
                                                {participant}
                                            </Typography>
                                        </ListItem>
                                    </List>
                                ))}
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleClose} color="secondary">
                                    Ok
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Container>
                </React.Fragment>
            </div>



        </body >

    );
}

export default HomePage;