import React from 'react'
import AppBar from '@mui/material/AppBar' 
import Toolbar from '@mui/material/Toolbar'
import { IconButton } from '@mui/material'
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
function NavBar() {
  return (
    <AppBar position="static">
              <Toolbar variant="dense">
                  <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr:2}}>
                    <CalculateOutlinedIcon></CalculateOutlinedIcon>
                  </IconButton>
                 
                  <Link href="#" color="inherit" underline="none">
                       <Typography variant="h6" color="inherit" component="div">University Grade Calculator</Typography>
                </Link>
              </Toolbar>

              
      </AppBar>

  )
}

export default NavBar