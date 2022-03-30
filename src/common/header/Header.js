import React, { useState } from 'react';
import './Header.css';
import Modal from 'react-modal';
import PropTypes from 'prop-types';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';



import logo from '../../assets/logo.svg';

Modal.setAppElement('#root');

export default function Header(props){
  const [modalStatus, setModalStatus] = useState(false);

  const toggleModal = () => {
        setModalStatus(!modalStatus);
  }


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return(
      <React.Fragment>
        {/* NavBar Code*/}
        <AppBar position="static" id='app-bar-style'>
                <Toolbar>
                    <img src={logo} className='brand-icon-style rotate-image'/>
                    <Button variant="contained" color="primary" className='book-show-btn-style'>Book Show</Button>
                    <Button variant="contained" color="default" className='login-logout-btn-style' onClick={toggleModal}>
                        Login
                    </Button>
                </Toolbar>
        </AppBar>
        
        {/* Modal Code */}
        <Modal
            style={customStyles}
            isOpen={modalStatus}
            onRequestClose={toggleModal}
            contentLabel="My dialog">
                   <div >
                      <Paper>
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                          <Tab label="Login" {...a11yProps(0)} />
                          <Tab label="Register" {...a11yProps(1)} />
                        </Tabs>
                      </Paper>

                      {/* Login Form */}
                      <TabPanel value={value} index={0}>
                        <FormControl className='modal-tabPanel-style'>
                          <TextField id="standard-basic" label="Username" required />
                          <TextField id="standard-basic" label="Password" required/>
                        </FormControl>
                        <div className="container">
                            <div className="vertical-center">
                                <Button  variant="contained" color="primary"onClick={toggleModal}>Login</Button>
                            </div>
                        </div>
                      </TabPanel>

                      {/* Register Code */}
                      <TabPanel value={value} index={1}>
                        <FormControl className='modal-tabPanel-style'>
                            <TextField id="standard-basic" label="First Name" required />
                            <TextField id="standard-basic" label="Last Name" required />
                            <TextField id="standard-basic" label="Email" required />
                            <TextField id="standard-basic" label="Password" required />
                            <TextField id="standard-basic" label="Contact No." required/>
                          </FormControl>
                          <div className="container">
                              <div className="vertical-center">
                                  <Button  variant="contained" color="primary"onClick={toggleModal}>Register</Button>
                              </div>
                          </div>
                      </TabPanel>
                  </div>
        </Modal>
        </React.Fragment>

  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div p={3}>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}