import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button
} from "@material-ui/core";
import { useHistory,Redirect } from "react-router-dom";

const Welcome = props => {
  const [budget, setBudget] = useState('');
	const hChange = e => setBudget(e.target.value)
	const hClick=e=>{
		e.preventDefault();
		localStorage.setItem('budget',budget);
		history.push('/daily');
	}
	const history = useHistory();
	if(localStorage.getItem('budget')) return <Redirect to='/daily'/>
  return (
    <Grid style={{textAlign:'center'}}>
      <h1>Daily Budget Calculator</h1>
      <Typography>Total Money You have for this month:nbsp;</Typography>
      <TextField
        type="number"
        placeholder="Enter Amount"
        InputProps={{
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
        value={budget}
        min={0}
        max={50000}
        onChange={hChange}
      />
      <Button variant="outlined" onClick={hClick}>
        Next
      </Button>
    </Grid>
  );
};

export default Welcome;
