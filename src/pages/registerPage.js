import React, { useState, useEffect } from 'react';
import DenseAppBar from '../components/appbar.js'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import BorderWrapper from 'react-border-wrapper'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut, tokenInsert } from '../actions'
import register from '../axiosRequests/register'
import store from '../store'
import { Redirect } from 'react-router';
import validateToken from '../functions/validateToken.js';

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

const RegisterPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [FormEvalue, setFormEvalue] = useState('')// Form of username
    const [FormPvalue, setFormPvalue] = useState('')//Password form
    const [FormNvalue, setFormNvalue] = useState('')// Form of username
    const [FormAvalue, setFormAvalue] = useState('')//Password form
    const [isLogged, setisLogged] = useState(false)

    const handlesubmit = async () => {
        if (!FormNvalue || !FormAvalue || !FormEvalue || !FormPvalue)
            alert('One or more fields are required!')
        try {
            const response = await register(FormEvalue, FormPvalue, FormNvalue, FormAvalue)
            dispatch(tokenInsert(response.data))
            localStorage.setItem("token", response.data)
            dispatch(logIn())
            localStorage.setItem('isLogged', isLogged)
            setisLogged(true)


        }
        catch (error) {
            if (error.response.data === "Invalid input")
                alert("Username must be 3-30 characters, age between 3 to 120, valid email ")
            else if (error.response.data === "User already registered")
                alert("User already registered!")
            else if (error.response.data === "User already registered")
                alert("Something failed , try again!")
        }

    }
    useEffect(() => {
        validateToken().then((result) => {
            if (result) {
                setisLogged(true)
            }
            else {
                setisLogged(false)
            }
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    if (isLogged)
        return (<Redirect to="/home" />);
    return (
        <body>
            <navbar>
                < DenseAppBar />
            </navbar>
            <div className={classes.wraper}>
                <BorderWrapper borderColour="blue" >
                    <Typography variant="h4" component="h2">
                        Hello! please register.
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
                                <TextField id="name" label="Name" variant="outlined" onChange={e => setFormNvalue(e.target.value)} />
                            </Grid>
                            <Grid item  >
                                <TextField id="age" label="Age" variant="outlined" onChange={e => setFormAvalue(e.target.value)} />
                            </Grid>
                            <Grid item  >
                                <TextField id="email" label="Email" variant="outlined" onChange={e => setFormEvalue(e.target.value)} />
                            </Grid>
                            <Grid item >
                                <TextField id='password'
                                    type="password"
                                    label="Password"
                                    variant="outlined"
                                    onChange={e => setFormPvalue(e.target.value)}>
                                </TextField>
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
            </div>



        </body >

    )


}

export default RegisterPage;