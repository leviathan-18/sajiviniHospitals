export default function GenericInfoPage({ title, text }) {
  return (
    <main className="content-page">
      <section>
        <p className="eyebrow">SANJIVINI Super Speciality Hospital</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </section>
    </main>
  );
}
