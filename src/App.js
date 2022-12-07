import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useSelector } from "react-redux";
import { booksSelector } from "./features/booksSlice";
import LoadingCircle from "./components/LoadingCircle";
import Alert from "./components/Alert";

function App() {
  const { books, status } = useSelector(booksSelector);

  return (
    <div className="App">
      <Navbar />
      <div className="p-4 bg-gray-800 h-screen">
        {status === "loading" ? (
          <LoadingCircle />
        ) : books !== undefined ? (
          <>
            {books.length > 0 && (
              <div className="space-y-2">
                {books.map((book, index) => (
                  <Card book={book} key={index} />
                ))}
              </div>
            )}
          </>
        ) : (
          <div>
            <Alert />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
