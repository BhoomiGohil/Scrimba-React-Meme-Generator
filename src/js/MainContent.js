// Import necessary components
import Header from "./Header";
import Hero from "./Hero";

// MainContent component that serves as the main wrapper for the page
export default function MainContent() {
  return (
    // Wrapper div for the entire page content
    <div className="page-wrapper">
      {/* Render the Header component */}
      <Header />
      <main>
        {/* Render the Hero component */}
        <Hero />
      </main>
    </div>
  );
}
