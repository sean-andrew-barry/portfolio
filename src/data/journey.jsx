import { Link } from 'react-router-dom';

export const journey = [
  {
    year: 2014,
    title: 'Discovered Programming',
    description: 'Started coding Lua addons for World of Warcraft and immediately fell in love with programming.',
  },
  {
    year: 2016,
    title: 'C++ and Game Development',
    description: 'Dove deep into C++, focusing heavily on performance optimization and building a custom game engine.',
  },
  {
    year: 2018,
    title: 'Lead Web Development Role',
    description: (
      <>
        Began building and managing the entire technology stack for {" "}
        <Link
          to="/projects/be-fit-beyond-fifty"
          className="inline-flex items-center gap-1 text-blue-600 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          Be Fit Beyond Fifty
        </Link>
        , gaining expertise in web development and server management.
      </>
    ),
  },
  {
    year: 2019,
    title: 'Began Developing Taggly',
    description: (
      <>
        Developed{" "}
        <Link
          to="/projects/taggly"
          className="inline-flex items-center gap-1 text-blue-600 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          Taggly
        </Link>
        , a high-performance full-stack JavaScript framework emphasizing simplicity, efficiency, and unified client-server communication.
      </>
    ),
  },
  {
    year: 2024,
    title: 'Began Developing Warble',
    description: (
      <>
        Started developing{" "}
        <Link
          to="/projects/warble"
          className="inline-flex items-center gap-1 text-blue-600 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          Warble
        </Link>
        , a new systems-level programming language aiming for performance beyond C, C++, and Rust.
      </>
    ),
  },
];