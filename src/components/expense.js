import React from 'react';
import {Grid} from '@material-ui/core';

const ExpenseList=(props)=>{
	const {expenses} =props;
	return (
    <Grid>
      <ul>
        {expenses.map(e => (
          <li key={e.date}>
            {e.date
              .split("T")[0]
              .split("-")
              .reverse()
              .join("-")}
            |{e.desc} | {e.amt}
          </li>
        ))}
      </ul>
    </Grid>
  );
}
export default ExpenseList;
