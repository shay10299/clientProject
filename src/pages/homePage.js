import React, { useState, useEffect } from 'react';
import DenseAppBar from '../components/appbar.js'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import BorderWrapper from 'react-border-wrapper'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 500,
        },
    }
}));

const HomePage = () => {
    const classes = useStyles();


    return (
        <body>
            <navbar>
                < DenseAppBar />
            </navbar>
            <div>
                
            </div>



        </body >

    );
}

export default HomePage;