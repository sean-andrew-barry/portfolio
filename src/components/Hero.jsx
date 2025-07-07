import { Link } from 'react-router-dom';
import portrait from '../assets/images/sean-barry-portrait.jpg';

export default function Hero() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-fuchsia-700 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <img
          src={portrait}
          alt="Sean Barry"
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-4">Sean Andrew Barry</h1>
        <p className="text-xl mb-8">
          JavaScript developer building responsive and performant web apps.
        </p>
        <div className="space-x-4">
          <Link
            to="/projects"
            className="bg-white text-gray-900 px-6 py-3 rounded-md font-semibold inline-block hover:bg-gray-100"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-md font-semibold inline-block hover:bg-opacity-30"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
