import "./ExpenseForm.css";
import React from "react";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="text" />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2024-12-31" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
