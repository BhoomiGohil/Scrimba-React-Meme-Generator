import React from "react";

export default function Hero() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "./Images/project4-meme.png",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  const id = React.useId;

  function handleChange(event) {
    let { name, value } = event.target;
    setMeme((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
  }

  return (
    <div className="hero-section">
      <div className="hero-form-block">
        <div className="hero-form">
          <div className="hero-input">
            <label id={id + "topText"}>Top text</label>
            <input
              type="text"
              id={id + "topText"}
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            ></input>
          </div>
          <div className="hero-input">
            <label id={id + "bottomText"}>Bottom text</label>
            <input
              type="text"
              id={id + "bottomText"}
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>

      <div className="hero-meme">
        <img className="hero-meme-image" src={meme.randomImage}></img>
        <div className="hero-meme-text top">{meme.topText}</div>
        <div className="hero-meme-text bottom">{meme.bottomText}</div>
      </div>
    </div>
  );
}
