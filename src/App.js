import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Book from "./components/Book";
import Books from "./components/Books";
import { useSelector } from "react-redux";
import { booksSelector } from "./features/booksSlice";

function App() {
  const { books} = useSelector(booksSelector);

  return (
    <div className="App">
      <Router>
      <Navbar />
      {!books &&
        <div className="h-screen text-center flex items-center justify-center bg-gray-800">
          <span className="font-ubuntu text-4xl text-white">Books Found Here!</span>
        </div>
      }
      <Routes>
          <Route exact path="/" element={<Books />}></Route>
          <Route exact path="/book/:id" element={<Book />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
