import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredPrice, setFilteredPrice] = useState(50); // 기본 선택 값

  const filterChangeHandler = (selectedPrice) => {
    setFilteredPrice(selectedPrice);
  };

  // 가격 필터링
  const filteredExpenses = props.items.filter((expense) => {
    return expense.amount >= filteredPrice;
  });

  let expensesContent = <p>값이 없습니다.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredPrice}
        onFilterChange={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
