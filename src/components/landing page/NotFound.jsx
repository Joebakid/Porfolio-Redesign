import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>

      <p className="text-lg font-medium mb-2">
        Page Not Found
      </p>

      <p className="text-neutral-600 max-w-xl mb-6">
        The page you’re looking for doesn’t exist or may have been moved.
        If you followed a broken link or typed the address incorrectly,
        please use the navigation below to continue exploring my work.
      </p>

      <div className="flex gap-3 flex-wrap justify-center">
        <Link
          to="/"
          className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90"
        >
          Go to Home
        </Link>

        <Link
          to="/resume"
          className="border px-6 py-3 rounded-lg hover:bg-neutral-100"
        >
          View Resume
        </Link>
      </div>
    </div>
  );
}
