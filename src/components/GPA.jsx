import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import GradeItem from "./GradeItem";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box'

function GPA() {
  const [result, setResult] = useState([
    { label: "A+", value: 4, creditHour: 3, id: 1 },
    { label: "A+", value: 4, creditHour: 3, id: 2 },
    { label: "A+", value: 4, creditHour: 3, id: 3 },
    { label: "A+", value: 4, creditHour: 3, id: 4 },
  ]);
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
  const [gpa, setGpa] = useState(0);
  useEffect(() => {
    calculateGpa(result);
    console.log("state is uptodate");
    console.log(result);
  }, [result]);
  const calculateGpa = (res) => {
    const grade = res.reduce(
      (total, item) => total + item.value * item.creditHour,
      0
    );
    const total = res.reduce((total, elem) => total + elem.creditHour, 0);
    const yourgpa = grade / total;
    console.log(grade);
    setGpa(yourgpa);
  };

  const handleChange = (e, value, id) => {
    let items = [...result];

    const elem = result.findIndex((item) => item.id === id);
    const item = { ...result[elem] };

    item.label = value.label;
    item.value = value.value;
    items[elem] = item;

    setResult(items);
  };
  const handleClick = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setResult([...result, { label: "A+", value: 4, creditHour: 3, id: newId }]);
    console.log(newId);
  };
  const handleRemove = (id) => {
    const newArray = result.filter((result) => result.id !== id);

    setResult(newArray);
  };
  const handleValue = (e, id) => {
    const items = [...result];
    const elem = result.findIndex((el) => el.id === id);
    const item = { ...items[elem] };
    item.creditHour = parseInt(e.target.value);
    items[elem] = item;
    setResult(items);
  };

  return (
    <Paper
      elevation={3}
      mt={4}
      pb={4}
      sx={{ margin: "auto", marginTop: 10, padding: 5 }}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        GPA Calculator
      </Typography>
      {result?.map((res, index) => {
        return (
          <>
            <Grid
              key={res.id}
              container
              sx={{ margin: "auto", marginBottom: 0 }}
              my={0}
            >
              <Grid xs={11} item my={0}>
                <GradeItem
                  i={index}
                  handleChange={(e, value) => handleChange(e, value, res.id)}
                  grades={grades}
                  defaultValueNumber={res.creditHour}
                  defaultValueString={res.label}
                  handleValue={handleValue}
                  id={res.id}
                ></GradeItem>
              </Grid>
              <Grid xs={1} item my={0}>
                {" "}
                <IconButton
                  onClick={() => handleRemove(res.id)}
                  mx={0}
                  sx={{ color: "red" }}
                >
                  <RemoveCircleOutlineOutlinedIcon></RemoveCircleOutlineOutlinedIcon>
                </IconButton>
              </Grid>
            </Grid>
          </>
        );
      })}

      <Button variant="outlined" startIcon={<AddIcon />} onClick={handleClick}>
        ADD
      </Button>

          <Box sx={{ display: 'flex', justifyContent:'center',}}>
              <Typography color="white" variant="h1" component="h3">Your GPA</Typography>
              <Typography variant="h1" component="h3" sx={{color:"primary"}}> {`= ${gpa.toFixed(2)}`}</Typography>
          </Box>
    </Paper>
  );
}

export default GPA;
