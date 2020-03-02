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
import login from '../axiosRequests/login'
import store from '../store'
import { useHistory } from 'react-router-dom';
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

const LoginPage = () => {
    const classes = useStyles();
    const Token = useSelector(state => state.token)
    const dispatch = useDispatch()
    const [FormEvalue, setFormEvalue] = useState('')
    const [FormPvalue, setFormPvalue] = useState('')
    const [isLogged, setisLogged] = useState(false)

    const history = useHistory()

    const handlesubmit = async () => {

        try {
            const response = await login(FormEvalue, FormPvalue)
            dispatch(tokenInsert(response.data))
            localStorage.setItem("token", response.data)
            dispatch(logIn())
            setisLogged(true)


        }
        catch (error) {
            if (error.response.data === "Invalid input")
                alert("Too short email or password or wrong format!")
            else if (error.response.data === "Invalid email or password")
                alert("Wrong email or password!")
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
                        Hello! please login.
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

                    <Typography variant="h4" component="h2">
                        If you do not have an account you need to register.
                    </Typography>
                    <br></br>
                    <Button variant="contained" color="secondary" href="/register">
                        Register
                    </Button>
                </BorderWrapper>
            </div>



        </body >

    )


}

export default LoginPage;