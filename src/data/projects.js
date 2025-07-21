import { Code, Dumbbell, Zap } from 'lucide-react';
import BFBF from '/src/assets/images/be-fit-beyond-fifty-sunflower-logo.png';
import Warble from '/src/assets/images/warble-logo.svg';

export const projects = [
  {
    title: 'Be Fit Beyond Fifty',
    description: 'A fully custom membership and course platform I\'ve built and maintained since 2018 as the sole full-stack engineer. Built from scratch to replace expensive SaaS solutions, saving over $12,000 annually while delivering a professional, unified user experience.',
    image: BFBF,
    imageAlt: "Be Fit Beyond Fifty sunflower logo",
    icon: Dumbbell,
    tags: ['Custom SPA Platform', 'Taggly.js Framework', 'Node.js', 'MongoDB', 'Stripe'],
    link: '/projects/be-fit-beyond-fifty',
    external: 'https://befitbeyondfifty.com',
    github: undefined,
    gradient: ['from-green-500', 'to-emerald-600'],
    bgColor: 'bg-green-50',
    years: '2018-Present',
    featured: true,
  },
  {
    title: 'Taggly',
    description: 'A full-stack JavaScript web development framework I created as an alternative to React and Vue. Focuses on simplicity, performance, and developer experience with innovative approaches to component architecture and state management.',
    icon: Code,
    tags: ['Custom Framework', 'JavaScript', 'Web Development', 'Performance'],
    link: '/projects/taggly',
    external: undefined,
    github: 'https://github.com/sean-andrew-barry/taggly/',
    gradient: ['from-purple-500', 'to-pink-600'],
    bgColor: 'bg-blue-50',
    years: '2022-Present',
    featured: true,
  },
  {
    title: 'Warble',
    description: `Warble is a modern programming language designed for simplicity, elegance, and performance. Drawing inspiration from C++, Rust, and JavaScript, Warble combines clear semantics, strong static typing, and intuitive syntax to produce concise, readable, and maintainable code. It offers expressive pattern matching, efficient polymorphism, intuitive concurrency, and lightning fast compilation, making Warble ideal for any application.`,
    image: Warble,
    imageAlt: "Warble flying budgie logo",
    icon: Zap,
    tags: ['Programming Language', 'Compiler', 'Systems Programming'],
    link: '/projects/warble',
    external: undefined,
    github: 'https://github.com/sean-andrew-barry/warble/',
    gradient: ['from-blue-500', 'to-indigo-600'],
    bgColor: 'bg-purple-50',
    years: '2023-Present',
    featured: true,
  }
];