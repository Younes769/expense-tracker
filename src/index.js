import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const data = {
  totalExpenses: 155.25,
  totalIncome: 3000.0,
  balance: 2844.75,
  recentTransactions: [
    {
      date: "2023-05-20",
      type: "income",
      category: "Freelance",
      amount: 500.0,
      description: "Freelance project payment",
    },
    {
      date: "2023-05-15",
      type: "expense",
      category: "Entertainment",
      amount: 30.0,
      description: "Movie tickets",
    },
    {
      date: "2023-05-10",
      type: "expense",
      category: "Utilities",
      amount: 75.0,
      description: "Electricity bill",
    },
    {
      date: "2023-05-05",
      type: "income",
      category: "Salary",
      amount: 2500.0,
      description: "May Salary",
    },
    {
      date: "2023-05-01",
      type: "expense",
      category: "Groceries",
      amount: 50.25,
      description: "Weekly grocery shopping",
    },
  ],
};

function App() {
  return <ExpenseTracker />;
}

function ExpenseTracker() {
  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <div className="summary">
        <div className="summary-item expenses">
          <h2>Total Expenses</h2>
          <p>${data.totalExpenses.toFixed(2)}</p>
        </div>
        <div className="summary-item income">
          <h2>Total Income</h2>
          <p>${data.totalIncome.toFixed(2)}</p>
        </div>
        <div className="summary-item balance">
          <h2>Balance</h2>
          <p>${data.balance.toFixed(2)}</p>
        </div>
      </div>
      <h2>Recent Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.recentTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>{transaction.category}</td>
              <td className={transaction.type === "income" ? "amount-income" : "amount-expense"}>
                ${transaction.amount.toFixed(2)}
              </td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="transaction-form">
        <h2>Add New Transaction</h2>
        <form>
          <div>
            <label>Date</label>
            <input type="date" name="date" />
          </div>
          <div>
            <label>Type</label>
            <select name="type">
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
          <div>
            <label>Category</label>
            <input type="text" name="category" />
          </div>
          <div>
            <label>Amount</label>
            <input type="number" name="amount" min="0" step="0.01" />
          </div>
          <div>
            <label>Description</label>
            <input type="text" name="description" />
          </div>
          <button type="button">Add Transaction</button>
        </form>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
