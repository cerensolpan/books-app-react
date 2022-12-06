import card from "../card.png";

export default function Card({book}) {
  return (
    <div className="flex bg-gray-800 py-4 px-4 space-x-3">
      <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="img-book" />
      <div className="flex flex-col text-start space-y-2">
        <span className="text-violet-500 text-xl">
          {book.volumeInfo.title}
        </span>
        <div className="flex space-x-1">
          {book.volumeInfo.authors.map((author)=>(
          <span className="text-violet-500 text-sm">
            {author}
          </span>
          ))}
          <span className="text-violet-200 text-sm"> · {book.volumeInfo.publishedDate.split("-",1)}</span>
        </div>
        <span className="text-violet-200 text-sm line-clamp-3">
        {book.volumeInfo.description}
        </span>
        <div>
          <button
            type="button"
            className="inline-flex items-center px-3.5 py-2 border border-violet-200 leading-4 text-sm font-medium rounded-full shadow-sm text-violet-200 bg-transparent hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}
