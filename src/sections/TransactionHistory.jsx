import React, { useState } from "react";

const TransactionHistory = () => {
  const [transactions] = useState([
    { id: 1, description: "Sicily", amount: -500, category: "travel" },
    { id: 2, description: "The Lord of the Rings", amount: -550, category: "books" },
  ]);

  return (
    <section className="py-10">
      <div className="container mx-auto bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-5">Ein- & Ausgaben Verlauf</h2>
        <div className="flex flex-col gap-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex justify-between p-4 bg-gray-100 rounded-lg">
              <div>
                <p className="font-bold">{transaction.description}</p>
                <p>{transaction.category}</p>
              </div>
              <div className={transaction.amount < 0 ? "text-red-500" : "text-green-500"}>
                {transaction.amount} EUR
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory;

