import React,{useState} from 'react';
import {Grid,Button} from '@material-ui/core';
import {Redirect,useHistory} from 'react-router-dom';
import moment from 'moment';
import ExpenseList from './expense';
import AddExpense from './addExpense';

const Daily =(props)=>{
	const budget=localStorage.getItem('budget');
	const lExpenses = localStorage.getItem("expenses");
	const ltExpense = localStorage.getItem('totalExpense');
	const ldExpense = localStorage.getItem('dailyExpense');
	const history=useHistory();
	const totalDays = moment()
    .endOf("month")
    .daysInMonth();
	const daysGone=(new Date()).getDate();
	const remainingDays=totalDays-daysGone;
	const [dailyBudget,setDBudget]=useState(Math.floor(budget/totalDays));
	const [expenses,setExpenses]=useState(lExpenses?JSON.parse(lExpenses):[]);
	const [dailyExpense, setDExpense]=useState(ldExpense?ldExpense:0);
	const [totalExpense, setTExpense] = useState(ltExpense?ltExpense:0);

	if(!budget) return <Redirect to='/'/>
	return (
    <Grid style={{ textAlign: "center" }}>
      <h1>Daily Budget</h1>
      <h3>
        Your Monthly Budget: ₹{budget}
        <Button
          onClick={() => {
            localStorage.clear();
            history.push("/");
          }}
        >
          Edit
        </Button>
      </h3>
      <h3>Remaining Days: {remainingDays}</h3>
      <h4>Daily Budget: ₹{dailyBudget}</h4>
      <h5>Money Spent Till Now: ₹{totalExpense}</h5>
      <h6>Money Spent Today: ₹{dailyExpense}</h6>
      <AddExpense
        setExpenses={setExpenses}
        setDExpense={setDExpense}
        setTExpense={setTExpense}
				setDBudget={setDBudget}
				budget={parseInt(budget)}
				remainingDays={remainingDays}
      />
      <ExpenseList expenses={expenses} />
    </Grid>
  );

}
export default Daily;