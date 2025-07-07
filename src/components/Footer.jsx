import GithubIcon from '../assets/icons/github.svg?react';
import LinkedinIcon from '../assets/icons/linkedin.svg?react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Sean Andrew Barry</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a
            href="https://github.com/seanbarry" // <- change to your real username
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors"
          >
            {/* <Github size={20} /> */}
            <GithubIcon className="w-5 h-5 text-gray-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/seanbarry" // <- change to your real LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors"
          >
            {/* <Linkedin size={20} /> */}
            {/* <LinkedinIcon className="w-5 h-5" /> */}
            <LinkedinIcon className="w-5 h-5 text-gray-700" />
          </a>
        </div>
      </div>
    </footer>
  );
}
