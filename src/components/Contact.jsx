export default function Contact() {
  const email = "seanandrewbarry@protonmail.com";

  return (
    <section className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <p>
        Email: <a className="text-blue-500" href={`mailto:${email}`}>{email}</a>
      </p>
    </section>
  );
}
