import { useSelector } from "react-redux";
import { booksSelector } from "../features/booksSlice";
import LoadingCircle from "./LoadingCircle";
import Card from "./Card";
import Alert from "./Alert";

export default function Books() {
    
  const { books, status } = useSelector(booksSelector);

  return (
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
  );
}
