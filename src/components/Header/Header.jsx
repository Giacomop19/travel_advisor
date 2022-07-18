import React from "react";

//sto importando librerie custom
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
//import icon -> look into the right folder (/Search)
import SearchIcon from '@material-ui/icons/Search';
//import modulo da styles.js e lo assegno a una costante che viene richiamat come function
import useStyles from './styles';


const Header = () =>{
    const classes = useStyles();
    
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput}} />
                    {/* </Autocomplete> */}
                    
                </Box>


            </Toolbar>


        </AppBar>
    );
}

export default Header;