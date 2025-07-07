export default function Projects() {
  const items = [
    { name: 'Taggly', desc: 'Organize your notes with smart tags.' },
    { name: 'Warble', desc: 'A minimal social platform experiment.' },
    { name: 'Be Fit Beyond Fifty', desc: 'Fitness tracking built for longevity.' },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
