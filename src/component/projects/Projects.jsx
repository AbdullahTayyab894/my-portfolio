
import React from 'react'
import { Card, Typography, CardContent, CardMedia, CardActionArea, Grid, Button } from '@mui/material'
import { projectdata } from './projectapi'

const Projects = () => {
    return (
        <div id='projects'>
            <Grid id="service" container sx={{
                pl: "70px",
                pt: "50px",
            }}>
                <Grid item md={12} sx={{
                    textAlign: "center",
                }}>

                    <Typography variant='h3' sx={{
                        color: "black",
                    }}>
                        Projects
                    </Typography>
                </Grid>
                <Grid container>
                    {
                        projectdata.map((item, i) => {

                            return (
                                <Grid item xs={12} md={4} sx={{
                                    mt: "20px",
                                    mb: "30px"
                                }}>
                                    <Card sx={{
                                        width: "340px",
                                    }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                width="340"
                                                height="180"
                                                image={item.image}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography variant="h5" sx={{
                                                    textAlign:"center",
                                                    mb:"20px"
                                                }}>
                                                    {item.name}
                                                </Typography>
                                                <a href={item.url} target="_blank" style={{
                                                    textDecoration:"none"
                                                }}>
                                                    <Button variant='contained' sx={{
                                                        width:"100px",
                                                        color:"white",
                                                        ml:"100px",
                                                    }}>
                                                        Open
                                                    </Button>
                                                </a>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </div>
    )
}
export default Projects