import { Link } from 'react-router-dom';
import { journey } from '../data/journey';
import { developerValues } from '../data/developerValues';
import Portrait from '/src/assets/images/sean-barry-portrait-transparent-bg-1x1.png';
import BudgiesEating from '/src/assets/images/budgies-eating-millet.jpg';
import usePageTitle from '../hooks/usePageTitle';

export default function About() {
  usePageTitle('About');
  const current_year = new Date().getFullYear();
  const programming_years = current_year - 2014;
  const lead_developer_years = current_year - 2018;
  const hours_per_day = 5;
  const coding_hours = Math.floor((programming_years * 365 * hours_per_day) / 1000);

  const stats = [
    { number: programming_years, label: 'Years of Experience' },
    { number: lead_developer_years, label: 'Years as a Lead Developer' },
    { number: `${coding_hours}k+`, label: 'Hours Coding' },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a self-taught full-stack developer who enjoys crafting clear, efficient, and carefully thought-out solutions to complex technical problems. When I'm not working, you'll usually find me playing OSRS or OW2, taking care of my budgies, or diving deep into topics like compiler optimization and neuroscience.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            {stats.map((stat, index) => (
              <div key={index} className="basis-1/4 flex-shrink-0 text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">My Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  My journey into software development began with writing Lua addons for World of Warcraft during the long wait between expansions. Within days, I was completely hooked. Programming quickly became an obsession, and soon my entire life revolved around exploring new ideas, optimizing performance, and pushing my technical limits.
                </p>

                <p>
                  Eventually, my passion for performance optimization led me deep into C++, where I spent years designing and building a game engine from scratch. While that project never reached completion, the lessons I learned shaped me into the developer I am today.
                </p>

                <p>
                  About seven years ago, I transitioned into web development when I began building the tech behind Be Fit Beyond Fifty, my mom's coaching business. This experience inspired me to create Taggly, my own full-stack JavaScript framework. Working solo has taught me independence, flexibility, and ownership—but also the importance of collaboration, which I look forward to exploring in future roles.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 p-1">
                <img
                  src={Portrait}
                  alt="Sean Barry portrait"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl">
                <Coffee className="w-12 h-12 text-purple-600" />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Drives Me</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide every project I work on and every decision I make
              as a developer and collaborator.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {developerValues.map((value, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">My Journey</h2>
            <p className="text-lg text-gray-600">
              A timeline of key milestones in my development career
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <span className="hidden md:block absolute left-8 -translate-x-1/2 top-16 bottom-16 w-2 bg-gradient-to-b from-purple-600 to-pink-600 pointer-events-none" />

            <div className="space-y-12">
              {journey.sort((a, b) => a.year - b.year).map((item, index) => (
                <div key={index} className="relative flex items-center gap-8">
                  {/* Timeline dot */}
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {item.year}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with
            passionate people. Let's turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact me
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Budgies Section */}
      <section className="py-12 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <figure>
            <img
              src={BudgiesEating}
              alt="My three budgies eating millet"
              className="w-full h-full object-cover rounded-2xl"
            />
            <figcaption className="mt-4 text-sm italic text-slate-300">
              My dedicated development team providing moral support.
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}