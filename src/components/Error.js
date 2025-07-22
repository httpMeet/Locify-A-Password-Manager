import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.error(err);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! 😢</h1>
        <p className="text-gray-700 text-lg mb-2">
          We couldn't find the page you were looking for.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Error {err?.status || "Unknown"} – {err?.statusText || "Something went wrong"}
        </p>
        <Link
          to="/home"
          className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
