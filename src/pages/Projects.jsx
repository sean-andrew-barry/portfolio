import Content from "../components/Projects";

export default function Projects() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">My projects</h1>
      <p className="mt-4">Text</p>
      <Content />
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">My Cool Project</h2>
        <p className="text-gray-600">Some details about what I built...</p>
      </div>
    </div>
  );
}
