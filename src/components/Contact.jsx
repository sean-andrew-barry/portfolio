export default function Contact() {
  const email = 'seanandrewbarry@protonmail.com';

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Have a project in mind or just want to say hello?
      </p>
      <a
        href={`mailto:${email}`}
        className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold inline-block hover:bg-blue-700"
      >
        {email}
      </a>
    </section>
  );
}
