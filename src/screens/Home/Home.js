import React from 'react';
import './Home.css';
import UpcomingMoviesGrid from './UpcomingMoviesGrid';
import MainDashboardHome from './MainDashboardHome';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Header from '../../common/header/Header';

export default function Home(){
    return(
        <React.Fragment>
            <Header></Header>
            <AppBar position="static" id='upcoming-bar-style'>
                <Toolbar>
                    <span  id='upcoming-movies-style'>Upcoming Movies</span>
                </Toolbar>
            </AppBar>
            <UpcomingMoviesGrid/>
            <MainDashboardHome/>
        </React.Fragment>
    );
}


