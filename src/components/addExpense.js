import React,{useState} from 'react';
import {Grid,InputAdornment,TextField,Button} from '@material-ui/core'
export default (props)=>{

const [expense, setExpense] = useState({ desc: "", amt: '' });
const hChangeDesc = e => setExpense({ desc: e.target.value, amt: expense.amt });
const hChangeAmt = e => setExpense({ desc: expense.desc, amt: e.target.value });
const hClick = e => {
		e.preventDefault();
		let ltExpense = parseInt(JSON.parse(localStorage.getItem("totalExpense")),10);
		let ldExpense = parseInt(JSON.parse(localStorage.getItem("dailyExpense")),10);
		console.log(typeof(ltExpense))
		let exp = JSON.parse(localStorage.getItem("expenses"));
		if(!exp)exp=[];
		exp.push({ date: (new Date()).toString(), ...expense });
		ltExpense=ltExpense?ltExpense+parseInt(expense.amt):expense.amt;
		ldExpense=ldExpense?ldExpense+parseInt(expense.amt):expense.amt;
		console.log(ltExpense,ldExpense)
		localStorage.setItem("expenses", JSON.stringify(exp));
		localStorage.setItem("dailyExpense", ldExpense);
		localStorage.setItem("totalExpense", ltExpense);
		props.setExpenses(exp);
		props.setDExpense(ldExpense);
		props.setTExpense(ltExpense);
		props.setDBudget(Math.floor((props.budget-ltExpense)/props.remainingDays));
		setExpense({desc:'',amt:''})

		
  };
return (<Grid>
	<form>
        <TextField
          type="text"
          placeholder="Enter Expense Detail"
					onChange={hChangeDesc}
					value={expense.desc}
        />
        <TextField
          type="number"
          placeholder="Enter Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>
          }}
          value={expense.amt}
          min={0}
          max={50000}
          onChange={hChangeAmt}
        />
				<Button onClick={hClick}>Add</Button>
      </form>
</Grid>);
}