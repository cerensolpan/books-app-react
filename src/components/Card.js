import card from "../card.png";

export default function Card() {
  return (
    <div className="flex bg-gray-800 py-4 px-4 space-x-3">
      <img src={card} alt="img-book" />
      <div className="flex flex-col text-start space-y-2">
        <span className="text-violet-500 text-xl">
          Coding with JavaScript For Dummies
        </span>
        <div className="flex space-x-1">
          <span className="text-violet-500 text-sm">
            Chris Minnick,Eva Holland
          </span>
          <span className="text-violet-200 text-sm"> · 2015</span>
        </div>
        <span className="text-violet-200 text-sm">
          Java courses for beginners all the way to advanced courses. Learn Java
          with in-depth online courses from Pluralsight. Certification Prep.
          Skill Assessments. Mobile Apps. Role IQ. Offline Access. Expert-Led
          Courses. Hands-on Learning. Cloud Labs. Courses: IT Ops, AI, Big Data.
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
