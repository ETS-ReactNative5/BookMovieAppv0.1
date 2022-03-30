import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './UpcomingMoviesGrid.css';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: '#FFFFFF',
  },
  titleBar: {
    background: 'linear-gradient(260deg, rgba(2,0,36,1) 0%, rgba(34,34,36,0.014443277310924318) 35%, rgba(0,212,255,1) 100%)',
  },
});

function SingleLineGridList(props) {
  const { classes } = props;

  const [posterData, setPosterData] = useState([
      {
          id: 0,
          title: 'Spider-Man',
          poster_url: 'https://images.thedirect.com/media/article_full/spider-man-no-way-home-posters.jpg'
      },
      {
        id: 1,
        title: 'Avengers',
        poster_url: 'https://i.pinimg.com/originals/95/a8/03/95a803a0b195772069064a1b4bcad5a8.png'
    },
    {
        id: 2,
        title: 'SHANG-CHI',
        poster_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzw-QmYzP2Rlq70CnGALf7gJ3-tUO7gWxpA&usqp=CAU'
    },
    {
        id: 3,
        title: 'Captain America',
        poster_url: 'http://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_4932-704701.jpg?v=1622246745'
    },
    {
        id: 4,
        title: 'Black Widow',
        poster_url: 'https://images.thedirect.com/media/article_full/BW_R24cuTC.jpg'
    },
    {
        id: 5,
        title: 'THOR RAGNOROK',
        poster_url: 'https://exchange4media.gumlet.io/news-photo/1509961530_mohVYd_big_thor.jpg?format=webp&w=400&dpr=2.6'
    },
    {
        id: 6,
        title: 'ANT MAN',
        poster_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiALRrxn0uFNuHQeceeDg4JCWhKtM1NojAw&usqp=CAU'
    }
  ])

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={6} cellHeight={250}>
        {posterData.map(tile => (
          <GridListTile key={tile.id}>
            <img src={tile.poster_url} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SingleLineGridList);
