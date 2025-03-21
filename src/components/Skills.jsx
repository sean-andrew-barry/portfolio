export default function Skills() {
  const skills = ["JavaScript", "React", "Tailwind CSS", "Node.js"];
  return (
    <section className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <ul className="flex gap-4 justify-center">
        {skills.map((skill) => (
          <li key={skill} className="px-4 py-2 bg-gray-200 rounded-lg">{skill}</li>
        ))}
      </ul>
    </section>
  );
}
