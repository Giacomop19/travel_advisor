import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import  LocationOutlinedIcon from '@material-ui/icons/locationOutlined';
import { Rating } from "@material-ui/lab";

import useStyles from './styles';



const Map = () =>{
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: ''}}
                defaultCenter= {coordinates}
                defaultZoom = {15}
                margin= {[50, 50, 50, 50]}
                options

            >
                
            </GoogleMapReact>
        </div>  
    );
}

export default Map;  