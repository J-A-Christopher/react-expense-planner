import React, { useState } from "react";
import Card from "../UI/Card";
import NewExpense from "../NewExpense/NewExpense";
import Expenses from "./Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 27),
  },
  {
    id: "e2",
    title: "Shopping",
    amount: 100.67,
    date: new Date(2021, 6, 27),
  },
  { id: "e3", title: "Health", amount: 300.67, date: new Date(2020, 4, 19) },
  { id: "e4", title: "Books", amount: 4.67, date: new Date(2023, 1, 20) },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };
  return (
    <Card className="expenses">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </Card>
  );
};

export default App;
