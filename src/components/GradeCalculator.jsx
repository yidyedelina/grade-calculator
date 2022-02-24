import React from "react";
import GPA from "./GPA";
import NavBar from "./NavBar";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid'
import Button from "@mui/material/Button"
import Description from "./Description"
function GradeCalculator() {
  return (
    <>
      <NavBar></NavBar>
      <Grid container mt={0} spacing={2} pb={5} sx={{ backgroundColor:'primary.dark'}}>
        <Grid item xs={12} md={7}>
          <Description/>
        </Grid>
        <Grid item xs={12} md={4}>
          <GPA></GPA>
        </Grid>
          </Grid>
    </>
  );
}

export default GradeCalculator;
