export default function Skills() {
  const skills = [
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Node.js',
    'C++',
    'C#',
    'Lua',
  ];
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <li key={skill} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
