import { Box, Grid } from "@mui/material";
import React from "react";
import Form from "./Form";

export default function Talk(){
    return (
        <div className="container-sm">
            <Box sx={{my: '3rem'}}>
              <Grid container spacing={5} >
                <Grid item xs={12} sm={6} md={6}>
                    <Form/>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <h2>Let’s <span>Talk.</span> about something special.</h2>
                  <p >Fast-forward to today, and I’ve had the privilege of working at an advertising. a start-up, a huge corporation,</p>
                  <p>amehabraham811@gmail.com</p>
                  <p></p>
                </Grid>
              </Grid>
            </Box>
        </div>
    )
}