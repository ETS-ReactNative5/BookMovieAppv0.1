import React from 'react';
import './Home.css';
import UpcomingMoviesGrid from './UpcomingMoviesGrid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


export default function Home(){
    return(
        <React.Fragment>
        <AppBar position="static" id='upcoming-bar-style'>
            <Toolbar>
                <span  id='upcoming-movies-style'>Upcoming Movies</span>
            </Toolbar>
        </AppBar>
        <UpcomingMoviesGrid/>
        </React.Fragment>
    );
}


