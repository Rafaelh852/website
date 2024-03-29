import React from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const Contact = ()=>{
    const theme = useTheme();

    return (
        <Box >
          <Box marginBottom={2} >
              <Typography
                color={'dark'}
                variant="h4"
                sx={{ fontWeight: 700 }}
                align="center"
              >
                Contact
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary" align="center">
                
              </Typography>


            </Box>

          <Box >
            <Grid container justifyContent="center">
              
            <Grid
            item 
            md = {6}
            padding={{ xs: 3, sm: 6 }}
            
            component={Card}
            boxShadow={1}
            marginBottom={4}
          >
              <form action="https://formsubmit.co/them@rafaelhernandez.dev" method="POST" >
            <input type="hidden" name="form-name" value="contact" />
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
    
                  <TextField
                    sx={{ height: 54 }}
                    label="First name"
                    variant="outlined"
                    color="primary"
                    size="medium"
                    name="firstName"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ height: 54 }}
                    label="Last name"
                    variant="outlined"
                    color="primary"
                    size="medium"
                    name="lastName"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ height: 54 }}
                    label="Email"
                    type="email"
                    variant="outlined"
                    color="primary"
                    size="medium"
                    name="email"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={6}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    name="message"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item container justifyContent={'center'} xs={12}>
                  <Button
                    sx={{ height: 54, minWidth: 150 }}
                    variant="contained"
                    color="primary"
                    size="medium"
                    type="submit"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item container justifyContent={'center'} xs={12}>
                  <Box>
                    <Typography component="p" variant="body2" align="left">
                      By clicking on "submit" you agree to our{' '}
                      <Box
                        component="a"
                        href=""
                        color={theme.palette.text.primary}
                        fontWeight={'700'}
                      >
                        Privacy Policy
                      </Box>
                      ,{' '}
                      <Box
                        component="a"
                        href=""
                        color={theme.palette.text.primary}
                        fontWeight={'700'}
                      >
                        Data Policy
                      </Box>{' '}
                      and{' '}
                      <Box
                        component="a"
                        href=""
                        color={theme.palette.text.primary}
                        fontWeight={'700'}
                      >
                        Cookie Policy
                      </Box>
                      .
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </form>    
            
            </Grid>
           
          </Grid>
           <Box>
              <Typography color="text.secondary" align="center">
                I'll get back to you in 1-2 business days.
              </Typography>
          </Box>
          </Box>
          

        </Box>
      );

}

export default Contact;