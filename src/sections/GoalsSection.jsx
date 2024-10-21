import React, { useState } from "react";

const GoalsSection = ({ toggleGoals }) => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryAmount, setCategoryAmount] = useState("");

  const addCategory = (e) => {
    e.preventDefault();
    setCategories([...categories, { name: categoryName, amount: categoryAmount }]);
    setCategoryName("");
    setCategoryAmount("");
  };

  return (
    <section className="w-full bg-white p-8 shadow-lg rounded-lg mb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">🎯Ziele</h1>
      </div>

      <form onSubmit={addCategory} className="flex flex-col items-start gap-4 mt-10">
        <label>Kategorie:</label>
        <input
          type="text"
          className="border-2 rounded-lg w-full p-2"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <label>Wunschbeitrag:</label>
        <input
          type="number"
          className="border-2 rounded-lg w-full p-2"
          value={categoryAmount}
          onChange={(e) => setCategoryAmount(e.target.value)}
        />
        <button className="bg-yellow-500 text-white py-2 w-full rounded-lg">Add</button>
      </form>

      <div className="mt-10">
        {categories.map((category, index) => (
          <div key={index} className="border p-5 rounded-lg mb-4">
            <p className="font-bold">{category.name}</p>
            <p>Amount: {category.amount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoalsSection;
