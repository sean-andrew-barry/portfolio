import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Page not found.</p>
      <Link to="/" className="text-blue-500 hover:underline">Go back home</Link>
    </div>
  );
}
