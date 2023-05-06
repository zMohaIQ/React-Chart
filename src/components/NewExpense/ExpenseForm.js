import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [entredTitle, setEntredTitle] = useState("");
  const [entredAmount, setEntredAmount] = useState("");
  const [entredDate, setEntredDate] = useState("");

  const titleChangeHandler = function (e) {
    setEntredTitle(e.target.value);
  };

  const amountChangeHandler = function (e) {
    setEntredAmount(e.target.value);
  };

  const dateChangeHandler = function (e) {
    setEntredDate(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();

    const expenseData = {
      title: entredTitle,
      amount: +entredAmount,
      date: new Date(entredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEntredTitle("");
    setEntredAmount("");
    setEntredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={entredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={entredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" value={entredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
