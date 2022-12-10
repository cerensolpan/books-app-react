import { useLocation } from "react-router-dom";

export default function Book() {
  const location = useLocation();
  const book = location.state.book;

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="img-book" />
      <div className="flex flex-col text-start space-y-2">
        <span className="text-violet-500 text-xl">{book.volumeInfo.title}</span>
        <div className="flex space-x-1">
          {book.volumeInfo?.authors?.map((author) => (
            <span className="text-violet-500 text-sm">{author}</span>
          ))}
          <span className="text-violet-200 text-sm">
            · {book.volumeInfo?.publishedDate?.split("-", 1)}
          </span>
        </div>
        <span className="text-violet-200 text-sm line-clamp-3">
          {book.volumeInfo.description}
        </span>
      </div>
    </div>
  );
}
