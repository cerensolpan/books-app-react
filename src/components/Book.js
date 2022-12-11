import { useLocation } from "react-router-dom";
import StarIcon from "./StarIcon";

export default function Book() {
  const location = useLocation();
  const book = location.state.book;
  console.log("book", book);
  return (
    <div className="p-4 bg-gray-800 h-screen px-32">
      <div className="flex flex-col justify-center items-center">
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt="img-book"
          width={200}
        />
        <div className="flex flex-col items-center text-start space-y-2">
          <span className="text-violet-500 text-xl mt-6">
            {book.volumeInfo.title}
          </span>

          <div className="text-start space-y-2">
            {book.volumeInfo?.authors?.map((author) => (
              <div className="text-sm">
                <span className="text-violet-200">Author: </span>
                <span className="text-violet-500">{author}</span>
              </div>
            ))}
            {book.volumeInfo?.publishedDate && (
              <div className="text-sm">
                <span className="text-violet-200">Published Date: </span>
                <span className="text-violet-500">
                  {book.volumeInfo?.publishedDate?.split("-", 1)}
                </span>
              </div>
            )}
            {book.volumeInfo?.averageRating && (
              <div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-violet-200">Average Rating: </span>

                  <StarIcon fill="#FFFF00" />
                  <span className="text-violet-500">
                    {book.volumeInfo?.averageRating}
                  </span>
                </div>
              </div>
            )}
          </div>
          <span className="text-violet-200 pt-4 text-justify">
            {book.volumeInfo.description}
          </span>
        </div>
      </div>
    </div>
  );
}
