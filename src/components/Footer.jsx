import React from 'react'
import {  Container, Grid, Typography} from '@mui/material'
import { Box } from '@mui/system'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer>
            <Box sx={{
                position: "absoule",
                bottom: 0, 
                mt: "3rem",
                p: "15px 0",
                background: "#F2F3F5"
            }}>
                <Container>
                    <Grid container spacing={1} rowSpacing={2} 
                        sx={{
                            '@media screen and (max-width: 600px)': {
                                flexDirection: "column"
                            },
                        }}
                    >
                        <Grid item sx={{
                            '@media screen and (max-width: 600px)': {
                                order: 2
                            },
                        }}>
                            <Typography
                                component="span"
                                sx={{
                                    color:"#AB94A0",
                                    mr: "2rem",
                                    fontSize: "0.8rem"
                                }}
                            >
                                ©2021 КнижнаяПолка
                            </Typography>
                        </Grid>
                        <Grid item sx={{
                             '@media screen and (max-width: 600px)': {
                                order: 1
                            },
                        }}>
                            <Typography component="span" sx={{color: theme => theme.palette.primary.main}}>
                                <FontAwesomeIcon className="icon" icon={["fab", "instagram"]}/>
                                <FontAwesomeIcon className="icon" icon={["fab", "youtube"]}/>
                                <FontAwesomeIcon className="icon" icon={["fab", "vk"]}/>
                                <FontAwesomeIcon className="icon" icon={["fab", "twitter"]}/>
                                <FontAwesomeIcon className="icon" icon={["fab", "telegram"]}/>
                                <FontAwesomeIcon className="icon" icon={["fab", "whatsapp"]}/>
                                <FontAwesomeIcon className="icon" icon={["fab", "github"]}/>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
        
    )
}

export default Footer
