import React, { useState } from 'react';
import { Grid, Card, Typography, Tabs, Tab, Box } from '@mui/material';
// import img1 from './coomponents/images/img1.jpeg'
// import img1 from '\challenge\blog\src\images\img1.jpeg';
import img1 from '../../images/img1.jpeg';
import Login from './Login';
import Registration from './Registration';

const Tab1 = (props) => {
    const { children, value, index } = props;
    return (
        <div role='Tab1' hidden={value !== index}>
            {
                value === index && (
                    <Box>
                        {children}
                    </Box>
                )
            }
        </div>
    );
}

const Log = () => {

    const [value, setValue] = useState(0);
    const hanldeChange = (e, newValue) => {
        setValue(newValue);
    }
    return (
        <>
            <Grid container sx={{ height: '70vh' }} >
                <Grid item lg={7} sm={5} sx={{
                    backgroundImage: `url(${img1})`,
                    backgroundPosition: "center",
                    backgroundSize: 'cover'


                }}>


                </Grid>
                <Grid item lg={5} sm={7} >
                    <Card sx={{ width: '100%', height: '100%' }}>
                        <Box>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} textColor='secondary' onChange={hanldeChange}>
                                    <Tab label='login' sx={{ fontWeight: 'bold' }}>

                                    </Tab>
                                    <Tab label='register' sx={{ fontWeight: 'bold' }}></Tab>
                                </Tabs>
                                <Tab1 value={value} index={0} >
                                    <Login />
                                </Tab1>

                                <Tab1 value={value} index={1} >
                                    <Registration/>
                                </Tab1>


                            </Box>

                        </Box>

                    </Card>

                </Grid>

            </Grid>
        </>
    );
}

export default Log;
