import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Book from "./components/Book";
import Books from "./components/Books";

function App() {
 

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Books />}></Route>
          <Route exact path="/book/:id" element={<Book />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
