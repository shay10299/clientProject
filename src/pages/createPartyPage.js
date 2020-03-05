import React, { useState, useEffect } from 'react';
import DenseAppBar from '../components/appbar.js'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import BorderWrapper from 'react-border-wrapper'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux'
import { logIn, tokenInsert } from '../actions'
import CreateParty from '../axiosRequests/CreateParty'
import { Redirect } from 'react-router';
import validate from '../functions/validate.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 500,
        },
    },
    wraper: {
        marginLeft: "25%",
        marginTop: "10%"
    }
}));

const CreatePartyPage = () => {
    const classes = useStyles();
    const [FormNvalue, setFormNvalue] = useState('')
    const [FormDvalue, setFormDvalue] = useState('')
    const [FormHvalue, setFormHvalue] = useState('')//Password form

    const handlesubmit = async () => {
        if (!FormNvalue || !FormDvalue || !FormHvalue)
            alert('One or more fields are required!')
        try {
            const response = await CreateParty(FormNvalue, FormDvalue, FormHvalue)
            console.log(response.status)
            if (response.status === 200) {
                alert("Party created successfuly!")

            }

        }
        catch (error) {
            if (error.response.data === "Invalid input")
                alert("wrong format!")

        }

    }
    useEffect(() => {
        validate()
    }, [])

    return (
        <body>
            <navbar>
                < DenseAppBar />
            </navbar>
            <div className={classes.wraper}>
                <React.Fragment>
                    <CssBaseline />
                    <Container fixed>
                        <BorderWrapper borderColour="blue" >
                            <Typography variant="h4" component="h2">
                                Hello! please create your Party.
                    </Typography>
                            <br></br>



                            <br></br>
                            <form className={classes.root} noValidate autoComplete="off">
                                <Grid
                                    container
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="flex-start"

                                >
                                    <Grid item  >
                                        <TextField id="Party name" label="Party name" variant="outlined" onChange={e => setFormNvalue(e.target.value)} />
                                    </Grid>
                                    <Grid item  >
                                        <TextField id="Date" label="Date" variant="outlined" onChange={e => setFormDvalue(e.target.value)} />
                                    </Grid>
                                    <Grid item  >
                                        <TextField id="Hour" label="Hour(0-24)" variant="outlined" onChange={e => setFormHvalue(e.target.value)} />
                                    </Grid>

                                </Grid>

                            </form>
                            <br></br>
                            <Button variant="contained" color="primary" onClick={handlesubmit}>
                                submit
                    </Button>
                            <br></br>
                            <br></br>

                        </BorderWrapper>
                    </Container>
                </React.Fragment>
            </div>



        </body >

    )


}

export default CreatePartyPage;