import React from 'react'
import Typography from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/ToggleButton"
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
function GradeItem({grades,handleValue,defaultValueNumber,defaultValueString,i,handleChange,id})
{
    
  return (
    <Box
        sx={{ display: "flex", width: "auto",minWidth:200,height:"auto" ,justifyContent: "space-evenly",alignItems:"center" , }}
        container
          
          
      >
          <Typography variant="p" component="p" gutterBottom>{ `Subject ${i + 1}`}</Typography>
          <TextField size="small" sx={{ width: 55, height:50}} type="number" defaultValue={defaultValueNumber} onChange={(e)=>handleValue(e,id)}></TextField>
        <Autocomplete
         
          id="combo-box-demo"
              options={grades}
              onChange={handleChange}
              size='small'
              defaultValue={defaultValueString}
                  sx={{ width: 90, height: 50 }}
          renderInput={(params) => <TextField {...params} />}
          />
          
      </Box>
  )
}

export default GradeItem