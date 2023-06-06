import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //I used filter() to filter expenses by filter Expenses by the filteredYear
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {
          //render an array of every expense element
          //rendring lists of data
          //this will help us get rid of hard coded expenseItems we used before

          filterExpenses.map((expense) => (
            <ExpenseItem
              //Added a key to help react identify individual items
              //You should always add a key when mapping out a list of items
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        }
      </Card>
    </div>
  );
};

export default Expenses;
