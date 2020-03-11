import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import validateToken from '../functions/validateToken.js';
import validateAdmin from '../functions/validateAdmin.js';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

const DenseAppBar = () => {
    const classes = useStyles();
    const [isLogged, setisLogged] = useState(false)
    const [isAdmin, setisAdmin] = useState(false)

    const handleLogOut = () => {
        localStorage.removeItem('token')
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
        validateAdmin().then((result) => {
            if (result) {
                setisAdmin(true)
            }
            else {
                setisAdmin(false)
            }
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    return (

        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} >
                <Toolbar variant="dense">

                    <Typography variant="h4" color="inherit" className={classes.title}>
                        Party organizer
                     </Typography>
                    <Button style={{
                        padding: "18px 36px",
                        fontSize: "18px",
                        color: "#FFFFFF"
                    }} href="/home">
                        home
                    </Button>
                    {isLogged ? <Button style={{
                        padding: "18px 36px",
                        fontSize: "18px",
                        color: "#FFFFFF"
                    }} href="/" onClick={handleLogOut}>
                        Log Out
                    </Button> : <Button style={{
                            padding: "18px 36px",
                            fontSize: "18px",
                            color: "#FFFFFF"
                        }} href='/'>
                            Login
                    </Button>}
                    <Button style={{
                        padding: "18px 36px",
                        fontSize: "18px",
                        color: "#FFFFFF"
                    }} href="/register">
                        register
                    </Button>
                </Toolbar>
            </AppBar>
            {isLogged ? <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    <ListItem button component="a" href="/home">
                        <ListItemText primary={'My parties'} />
                    </ListItem>
                    <Divider />
                    <ListItem button component="a" href="/AllParties">
                        <ListItemText primary={'All parties'} />
                    </ListItem>
                    <Divider />
                    <ListItem button component="a" href="/CreatePartyPage">
                        <ListItemText primary={'Create party page'} />
                    </ListItem>
                    <Divider />
                    <ListItem button component="a" href="/CreateEnterReqPage">
                        <ListItemText primary={'Create request to enter a party'} />
                    </ListItem>
                    <Divider />
                    <ListItem button component="a" href="/MyEnterReq">
                        <ListItemText primary={'My requests to enter a party'} />
                    </ListItem>
                    <Divider />
                    <ListItem button component="a" href="/MyEnterReqToConfirm">
                        <ListItemText primary={'My requests to confirm'} />
                    </ListItem>
                    <Divider />
                    {isAdmin ? <ListItem button component="a" href="/AllUsers">
                        <ListItemText primary={'All users'} />
                    </ListItem> : null}
                    <Divider />
                    {isAdmin ? <ListItem button component="a" href="/DeleteUser">
                        <ListItemText primary={'Delete user'} />
                    </ListItem> : null}

                </List>

            </Drawer> : null}


        </div >
    );
}
export default DenseAppBar