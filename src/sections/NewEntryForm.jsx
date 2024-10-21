import React, { useState } from "react";
import { FaFilter } from "react-icons/fa"; // Import filter icon from react-icons
import {newPiggy} from '../assets/index'
import GoalsSection from "./GoalsSection";

// Mock data for initial entries
const initialEntries = [
  { id: "cardEntry_0", description: "Sicily", amount: -500, isCheck: false, date: "2024-10-01", category: "travel" },
  { id: "cardEntry_1", description: "The Lord of the Rings Series", amount: -550, isCheck: false, date: "2024-10-02", category: "books" },
  { id: "cardEntry_2", description: "Wollgarn", amount: 2000, isCheck: true, date: "2024-10-02", category: "crochet" },
  { id: "cardEntry_3", description: "Materials", amount: -100, isCheck: false, date: "2024-10-03", category: "crochet" },
  { id: "cardEntry_4", description: "Eingang", amount: 500, isCheck: true, date: "2024-10-03", category: "house" },
];

const NewEntryForm = () => {
  const [entries, setEntries] = useState(initialEntries);
  const [entry, setEntry] = useState({ category: "house", description: "", amount: 0, isCheck: false, date: "", });
  const [filters, setFilters] = useState({ showIncoming: true, showOutgoing: true, sortBy: "date", category: "all" });

  // Helper function to calculate balance, incoming, and outgoing amounts
  const calculateBalance = () => entries.reduce((acc, entry) => acc + entry.amount, 0);
  const calculateIncoming = () => entries.filter((e) => e.isCheck).reduce((acc, entry) => acc + entry.amount, 0);
  const calculateOutgoing = () => entries.filter((e) => !e.isCheck).reduce((acc, entry) => acc + entry.amount, 0);

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { ...entry, id: `cardEntry_${entries.length}` };
    setEntries([newEntry, ...entries]);
    setEntry({ category: "house", description: "", amount: 0, isCheck: false, date: "" });
  };

  // Handling filter changes (category, incoming, outgoing)
  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFilters((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  // Filtering and sorting logic
  const filteredEntries = entries
    .filter((entry) => {
      if (!filters.showIncoming && entry.isCheck) return false;
      if (!filters.showOutgoing && !entry.isCheck) return false;
      if (filters.category !== "all" && entry.category !== filters.category) return false;
      return true;
    })
    .sort((a, b) => (filters.sortBy === "date" ? new Date(a.date) - new Date(b.date) : b.amount - a.amount));

  return (
    <section className="py-10 bg-gray-100">
       <div className="mx-0 w-full shadow-lg mb-10">
    <div className="h-screen w-full mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {/* Left Column */}
      <div className="md:col-span-1 mt-8 p-10 bg-white flex flex-col justify-center items-center md:items-start">
        <h1 className="text-4xl font-serif">Willkommen zurück!</h1>
        <button className="mt-4 px-8 py-4 rounded-full text-base font-bold text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-300">
          <a href="#entry">New Entry</a>
        </button>
      </div>

      {/* Right Column */}
      <div className="md:col-span-1 bg-white p-10 flex flex-col gap-3 items-center justify-center">
      <p className="text-2xl font-medium font-mono text-[#212121] w-full md:w-auto text-center">Saldo: <br /> EUR {calculateBalance().toFixed(2)}</p>
        <img
          src={newPiggy}
          alt="Piggy Bank"
          className="w-1/2 z-10 h-auto object-cover transform transition-transform duration-300 ease-in-out"
        />
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="bg-green-100 text-green-800 p-5 rounded-lg w-full md:w-auto text-center">
            Eingänge: EUR {calculateIncoming().toFixed(2)}
          </div>
          <div className="bg-red-100 text-red-800 p-5 rounded-lg w-full md:w-auto text-center">
            Ausgänge: EUR {calculateOutgoing().toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  </div>

      {/* New Entry Form */}
      <div className="container mx-auto">
        <form id="entry" onSubmit={handleSubmit} className="w-full bg-white p-8 shadow-lg rounded-lg mb-8">
          <h1 className="text-2xl font-bold mb-4">🖋️Neuer Eintrag</h1>
          <select
            className="border p-3 rounded-lg w-full mb-4"
            value={entry.category}
            onChange={(e) => setEntry({ ...entry, category: e.target.value })}
          >
            <option value="house">#house</option>
            <option value="crochet">#crochet</option>
            <option value="travel">#travel</option>
            <option value="books">#books</option>
          </select>
          <input
            type="text"
            className="border p-3 rounded-lg w-full mb-4"
            placeholder="Beschreibung"
            value={entry.description}
            onChange={(e) => setEntry({ ...entry, description: e.target.value })}
          />
          <input
            type="number"
            className="border p-3 rounded-lg w-full mb-4"
            placeholder="Betrag"
            value={entry.amount}
            onChange={(e) => setEntry({ ...entry, amount: parseFloat(e.target.value) })}
          />
          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              className="mr-2"
              checked={entry.isCheck}
              onChange={(e) => setEntry({ ...entry, isCheck: e.target.checked })}
            />
            Ist Eingang
          </label>
          <input
            type="date"
            className="border p-3 rounded-lg w-full mb-4"
            value={entry.date}
            onChange={(e) => setEntry({ ...entry, date: e.target.value })}
          />
          <button className="bg-yellow-500 text-white py-2 w-full rounded-lg hover:bg-yellow-600 transition-all">
            Eintrag schicken
          </button>
        </form>
      </div>

      {/* Ein- & Ausgaben Verlauf Section with Filters */}
      <div className="py-10">
        <div className="container mx-auto bg-white p-10 rounded-lg shadow-lg">
          {/* Filters Section within the Verlauf */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-600" /> {/* Filter Icon */}
              <h2 className="text-lg font-bold">Filter</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  name="showIncoming"
                  checked={filters.showIncoming}
                  onChange={handleFilterChange}
                />
                Nur Eingänge
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  name="showOutgoing"
                  checked={filters.showOutgoing}
                  onChange={handleFilterChange}
                />
                Nur Ausgänge
              </label>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="border p-3 rounded-lg w-full md:w-auto"
              >
                <option value="all">Alle Kategorien</option>
                <option value="house">#house</option>
                <option value="crochet">#crochet</option>
                <option value="travel">#travel</option>
                <option value="books">#books</option>
              </select>
              <select
                name="sortBy"
                value={filters.sortBy}
                onChange={handleFilterChange}
                className="border p-3 rounded-lg w-full md:w-auto"
              >
                <option value="date">Nach Datum</option>
                <option value="amount">Nach Betrag</option>
              </select>
            </div>
          </div>

          {/* Entries Section */}
          <h2 className="text-2xl font-bold mb-5">📜Ein- & Ausgaben Verlauf</h2>
          <div className="flex flex-col gap-4">
            {filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className={`flex justify-between items-center p-4 rounded-lg shadow-sm ${
                  entry.isCheck ? "bg-green-50" : "bg-red-50"
                }`}
              >
                {/* Left side: Description and Category */}
                <div>
                  <p className="font-bold">{entry.description}</p>
                  <p className="text-sm text-gray-500">Kategorie: #{entry.category}</p>
                  <p className="text-sm text-gray-500">Datum: {entry.date}</p>
                </div>

                {/* Right side: Amount */}
                <div
                  className={`text-lg font-semibold ${
                    entry.amount > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {entry.amount.toFixed(2)} EUR
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto">
      <GoalsSection/>
      </div>
    </section>
  );
};

export default NewEntryForm;
