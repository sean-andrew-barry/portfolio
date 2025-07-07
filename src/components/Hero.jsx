import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Sean Andrew Barry</h1>
      <p className="text-xl text-gray-700 mb-8">
        JavaScript developer building responsive and performant web apps.
      </p>
      <div className="space-x-4">
        <Link
          to="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold inline-block hover:bg-blue-700"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold inline-block hover:bg-gray-300"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
