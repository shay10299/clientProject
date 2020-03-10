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
import DeleteUser from '../axiosRequests/DeleteUser'
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
    const [FormIDvalue, setFormIDvalue] = useState('')


    const handlesubmit = async () => {
        if (!FormIDvalue)
            return alert('field is required!')
        try {
            const response = await DeleteUser(FormIDvalue)
            console.log(response.status)
            if (response.status === 200) {
                alert("User delete successfuly!")
            }

        }
        catch (error) {
            if (error.response.data === "User does not exist")
                alert("User does not exist")
            else if (error.response.data === "You can't delete yourself!")
                alert("You can't delete yourself!")
            else {
                alert("Something failed")

            }
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
                                Enter the id of the user you want to delete.
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
                                        <TextField id="ID" label="ID" variant="outlined" onChange={e => setFormIDvalue(e.target.value)} />
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