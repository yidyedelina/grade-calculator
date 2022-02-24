import { Container, Grid, Paper, Typography,Box } from '@mui/material'
import React from 'react'

function Description()
{
    const grades = [
    { label: "A+", value: 4 },
    { label: "A", value: 4 },
    { label: "A-", value: 3.75 },
    { label: "B+", value: 3.5 },
    { label: "B", value: 3 },
    { label: "B-", value: 2.75 },
    { label: "C+", value: 2.5 },
    { label: "C", value: 2 },
    { label: "C-", value: 1.75 },
    { label: "D", value: 1 },
    { label: "F", value: 0 },
  ];
  return (
      <Container>
          <Grid container>
              <Grid item mt={6} mb={3}>
                  <Typography  color="white" variant="h3" component="h3" textAlign="center">
                      Calculate your College and University GPA easily
                  </Typography>
              </Grid>
              <Grid item xs={6} mt={5} sx={{justifyContent:'center', margin:'auto' }}>
                  <Paper mt={5} sx={{paddingBottom:2,}} elevation={3}>
                      
                      <Typography variant="h5" gutterBottom={true} pt={3} color="warning">References</Typography>
                         {grades.map(grade =>
                  {
                      return (
                          <Box sx={{display:'flex', margin:'auto', paddingLeft:5 ,justifyContent:"space-between", paddingRight:5}}>
                              <Typography variant="p">{grade.label}</Typography>
                              <Typography variant="p">{grade.value}</Typography>
                          </Box>
                      )
                  })}
                  </Paper>
                 
              </Grid>
          </Grid>
    </Container>
  )
}

export default Description