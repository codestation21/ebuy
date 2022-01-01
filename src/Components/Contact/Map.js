import { useState } from "react";
import { Box, Grid, Typography, ButtonBase } from "@mui/material";
import GoogleMapReact from 'google-map-react';

//Styles
import useStyles from "Styles/Contact/Map.styles";

//Favicon
import Favicon from "Assets/favicon.png";

const Map = () => {
    const [points, setPoints] = useState({
        lat: 41.8781136,
        lng: -87.6297982
    });
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.MapContainer}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.map }}
                    center={points}
                    defaultZoom={10}
                    yesIWantToUseGoogleMapApiInternals
                >
                    <Box
                        lat={points.lat}
                        lng={points.lng}
                    >
                        <Box component="img" width="30px" src={Favicon} alt="Pointer" />
                    </Box>
                </GoogleMapReact>
            </Box>
            <Box>
                <Grid container spacing={3}>
                    <Grid item mds={4} sm={6} xs={12}>
                        <Box className={classes.Address}>
                            <Typography variant="h6" component="h6">
                                Office
                            </Typography>
                            <Typography variant="body1" component="p">
                                205 North Michigan Avenue, Suite 810
                            </Typography>
                            <Typography variant="body1" component="p">
                                Chicago, 60601, USA
                            </Typography>
                            <Typography variant="body1" component="p">
                                Phone: (123) 456-7890
                            </Typography>
                            <Typography variant="body1" component="p">
                                Email: contact@Evara.com
                            </Typography>
                            <ButtonBase onClick={() => setPoints({ lat: 41.8781136, lng: -87.6297982 })}>
                                View Map
                            </ButtonBase>
                        </Box>
                    </Grid>
                    <Grid item mds={4} sm={6} xs={12}>
                        <Box className={classes.Address}>
                            <Typography variant="h6" component="h6">
                                Studio
                            </Typography>
                            <Typography variant="body1" component="p">
                                205 North Michigan Avenue, Suite 810
                            </Typography>
                            <Typography variant="body1" component="p">
                                Washington, 60601, USA
                            </Typography>
                            <Typography variant="body1" component="p">
                                Phone: (123) 456-7890
                            </Typography>
                            <Typography variant="body1" component="p">
                                Email: contact@Evara.com
                            </Typography>
                            <ButtonBase onClick={() => setPoints({ lat: 38.89511, lng: -77.03637 })}>
                                View Map
                            </ButtonBase>
                        </Box>
                    </Grid>
                    <Grid item mds={4} sm={6} xs={12}>
                        <Box className={classes.Address}>
                            <Typography variant="h6" component="h6">
                                Shop
                            </Typography>
                            <Typography variant="body1" component="p">
                                205 North Michigan Avenue, Suite 810
                            </Typography>
                            <Typography variant="body1" component="p">
                                New York, 60601, USA
                            </Typography>
                            <Typography variant="body1" component="p">
                                Phone: (123) 456-7890
                            </Typography>
                            <Typography variant="body1" component="p">
                                Email: contact@Evara.com
                            </Typography>
                            <ButtonBase onClick={() => setPoints({ lat: 40.730610, lng: -73.935242 })}>
                                View Map
                            </ButtonBase>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
export default Map;