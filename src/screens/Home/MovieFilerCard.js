import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';


const styles = (theme) => ({
  card: {
      margin: '2%',
      width: '90%',
      padding: '10px',
    },
  cmpPosition: {
    margin: theme.spacing.unit,
    minWidth: '240px',
    maxWidth: '240 px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    color: theme.palette.primary.light,
  },
  pos: {
    marginBottom: 12,
  },
});

const genreList = [
  'Drama',
  'Mystery',
  'Thriller',
  'Horror',
  'Historical',
  'Romance',
  'Action',
  'Science Fiction',
  'Fantasy',
  'Comedy',
];

const artistList = [
  {
    id: 0,
    first_name: 'Sajid',
    last_name: 'Sayed',
  },
  {
    id: 1,
    first_name: 'Kareena',
    last_name: 'Nazia',
  },
  {
    id: 2,
    first_name: 'Haseena',
    last_name: 'Banu',
  },
  {
    id: 3,
    first_name: 'Azgar',
    last_name: 'Ali',
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function SimpleCard(props) {
  const { classes } = props;

  const [GenreName, setGenreName] = React.useState([]);
  const handleGenreChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenreName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const [ArtistName, setArtistName] = React.useState([]);
  const handleArtistChange = (event) => {
    const {
      target: { value },
    } = event;
    setArtistName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [releaseStartData, setReleaseStartData] = React.useState(new Date("dd-mm-yyyy"));
  const handleReleaseStartData = (newValue) => {
    setReleaseStartData(newValue);
  };

  const [releaseEndData, setReleaseEndData] = React.useState(new Date("dd-mm-yyyy"));
  const handleReleaseEndData = (newValue) => {
    setReleaseEndData(newValue);
  };
  

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography  component="h1" className={classes.title} gutterBottom>
          FIND MOVIES BY:
        </Typography>

        {/* Movie Name Input */}
        <FormControl className={classes.cmpPosition}>
          <InputLabel htmlFor="my-input">Movie Name</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <br/>

        {/* Genre Input */}
        <FormControl className={classes.cmpPosition}>
          <InputLabel htmlFor="demo-multiple-checkbox" id="demo-multiple-checkbox-label">Genre</InputLabel>
          <Select
            id="demo-multiple-checkbox"
            multiple
            value={GenreName}
            onChange={handleGenreChange}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {genreList.map((genre) => (
              <MenuItem key={genre} value={genre}>
                <Checkbox checked={GenreName.indexOf(genre) > -1} />
                <ListItemText primary={genre} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br/>

        {/* Artists Name */}
        <FormControl className={classes.cmpPosition}>
          <InputLabel htmlFor="demo-multiple-checkbox-2" id="demo-multiple-checkbox-label-2">Artists</InputLabel>
          <Select
            id="demo-multiple-checkbox-2"
            multiple
            value={ArtistName}
            onChange={handleArtistChange}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {artistList.map((artist) => (
              <MenuItem key={artist.id} value={`${artist.first_name} ${artist.last_name}`}>
                <Checkbox checked={ArtistName.indexOf(artist) > -1} />
                <ListItemText primary={`${artist.first_name} ${artist.last_name}`} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br/>

        {/* Release Start Date */}
        <TextField  className={classes.cmpPosition}
          name=" Release Date Start"
          label=" Release Date Start"
          InputLabelProps={{ shrink: true}}
          type="date"
          defaultValue={releaseStartData}
      />

        {/* Release End Date */}
        <TextField  className={classes.cmpPosition}
          name="Release Date End"
          label="Release Date End "
          InputLabelProps={{ shrink: true}}
          type="date"
          defaultValue={releaseEndData}
      />
      <br/>

      {/* Apply Filter Button */}
      <Button  className={classes.cmpPosition} variant="contained" color="primary">APPLY</Button>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
