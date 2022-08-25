
import React , { useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@/components/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



const Promotions = () => {

const promoList = [
        {"title":"Newsletter","desc":"","link":"#"},
        {"title":"Podcast","desc":"","link":"#"},
        {"title":"Medium","desc":"","link":"#"},
    ];

    const topicList = [
        {"title":"Causal Inference","link":"/nolink"},
        {"title":"Machine Learning","link":"/nolink"},
        {"title":"Natural Language Processing","link":"/nolink"},
        {"title":"Regression Analysis","link":"/nolink"},
        {"title":"Statistical Inference","link":"/nolink"},
        {"title":"Multivariate Analysis","link":"/nolink"},
        //{"title":"Text Analysis","link":"/nolink"},
        //{"title":"Sentiment Analysis","link":"/nolink"},
        //{"title":"Deep Learning","link":"/nolink"},
    ];

    return (
        <Container border="2px solid black">
            <Grid 
                container 
                direction="row"
                justifyContent="center"
                alignContent="center"
                
                spacing={2}
            >
                {promoList.map((promo)=>(
                    <Grid item
                         xs={8}
                        textAlign="center"
                        paddingY="35px"
                        marginY={"10px"}
                        bgcolor="common.white"
                        
                    >
                        <Typography>
                            {promo.title}
                        </Typography>
                        <Typography>
                            {promo.desc}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
            <Grid 
                container
                direction="row"
                spacing={4}
                marginTop={4}
            >
                {topicList.map((promo)=>(
                    <Grid item xs = {4} textAlign="center"  border="2px solid black" boxShadow={"revert"}>
                        <Typography>
                            {promo.title}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}


export default Promotions;