import { Box, Button, TextField } from '@mui/material'
import React from 'react'

export default function Form (){
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '90%', mt: '1rem' },
                    mt: '2rem'
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Your Name" variant="outlined" />
                <TextField id="outlined-basic" label="Your Email" variant="outlined" />
                <TextField id="outlined-basic" label="Your Message" variant="outlined" />
                <Button variant='contained' sx={{width: '50% !important'}}> Send Message </Button>
            </Box>
        </div>
    )
}