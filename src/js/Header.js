// Header component that displays the navigation bar for the Meme Generator app
export default function Header() {
  return (
    <nav>
      <div className="nav-container">
        {/* Brand section with icon and title */}
        <div className="nav-brand">
          <img
            className="nav-icon"
            src="Icons/troll-icon.png"
            alt="Troll Icon"
          />{" "}
          {/* Icon for the brand */}
          <h5>Meme Generator</h5> {/* Title of the app */}
        </div>
        <h6>React Course - Project 3</h6>{" "}
        {/* Subtitle indicating the course and project number */}
      </div>
    </nav>
  );
}
