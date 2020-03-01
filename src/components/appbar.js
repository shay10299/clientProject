import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 50
    },
    title: {
        cursor: 'pointer'

    },
    color: {
        backgroundColor: "#04adf7"
    }
}));

const DenseAppBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.color} >
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
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default DenseAppBar