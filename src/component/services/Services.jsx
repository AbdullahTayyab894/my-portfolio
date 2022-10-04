import { Box, Card, Typography, CardContent, CardMedia, CardActionArea, Grid } from '@mui/material'
import { data } from './api'

const Services = () => {
    return (
        <div >
            <Grid id="service" container sx={{
                pl: "70px",
                pt: "50px",
                background: "black",
                color: "white"
            }}>
                <Grid item md={12} sx={{
                    textAlign: "center",
                }}>

                    <Typography variant='h3' sx={{
                        color: "cyan"
                    }}>
                        Services
                    </Typography>
                    <Typography sx={{
                        color: "white"
                    }}>
                        All your digitals need... Covered
                    </Typography>
                </Grid>
                <Grid container>

                    {
                        data.map((item, index) => {
                            const { name, image,detail } = item;
                            return (
                                <Grid item xs={12} md={4} sx={{
                                    mt: "20px",
                                    mb: "30px"
                                }}>
                                    <div data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000">

                                        <Card sx={{
                                            width: "340px",
                                        }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="180"
                                                    image={image}
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                       {detail}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default Services
