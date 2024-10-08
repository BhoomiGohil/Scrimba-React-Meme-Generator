import React from "react";

// Hero component that allows users to create memes
export default function Hero() {
  // State to hold meme information: top text, bottom text, and random image
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "./Images/project4-meme.png",
  });

  // State to hold the array of all memes fetched from the API
  const [allMemes, setAllMemes] = React.useState([]);

  // Effect hook to fetch memes from the API on component mount
  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      // Set the fetched memes to state
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  const id = React.useId(); // Generate a unique ID for form labels

  // Handle input changes for the text fields
  function handleChange(event) {
    let { name, value } = event.target;
    setMeme((prevState) => {
      return { ...prevState, [name]: value }; // Update state with new text values
    });
  }

  // Function to fetch a random meme image from the list of all memes
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length); // Generate a random index
    const url = allMemes[randomNumber].url; // Get the URL of the meme at the random index

    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url, // Update the randomImage in state
      };
    });
  }

  return (
    <div className="hero-section">
      <div className="hero-form-block">
        <div className="hero-form">
          {/* Input field for top text */}
          <div className="hero-input">
            <label id={id + "topText"}>Top text</label>
            <input
              type="text"
              id={id + "topText"}
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </div>
          {/* Input field for bottom text */}
          <div className="hero-input">
            <label id={id + "bottomText"}>Bottom text</label>
            <input
              type="text"
              id={id + "bottomText"}
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Button to get a new meme image */}
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>

      <div className="hero-meme">
        {/* Display the selected meme image */}
        <img className="hero-meme-image" src={meme.randomImage} alt="Meme" />
        {/* Display the top and bottom text on the meme */}
        <div className="hero-meme-text top">{meme.topText}</div>
        <div className="hero-meme-text bottom">{meme.bottomText}</div>
      </div>
    </div>
  );
}
