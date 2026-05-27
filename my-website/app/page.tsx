import Image from "next/image";
export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <div className="icon">🚧</div>

        <h1>under construction</h1>

        <p>been a bit busy!</p>

        <div className="gifWrapper">
          <img
            className="gif"
            src="raj.gif"
            alt="Dancing animation"
          />
        </div>

        <div className="footer">© 2026 me</div>
      </div>
    </main>
  );
}