import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useSelector } from "react-redux";
import { books } from "./features/booksSlice";

function App() {
  const booksResult = useSelector(books);

  return (
    <div className="App">
      <Navbar />
      <div className="p-4">
        {booksResult.length > 0 && (
          <div className="space-y-2">
            {booksResult.map((book) => (
              <Card book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
