import Header from "./Header";
import Hero from "./Hero";

export default function MainContent() {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
