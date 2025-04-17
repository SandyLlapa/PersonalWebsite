import React from 'react';



const AboutMeWindow=()=>{



  return(
    <div className="profileContainer">
      <div className="Intro">
        <img className="character" src="/src/assets/character.png"></img>

        <div className="chat-wrapper">
          <img className="chat-bubble" src="/src/assets/Bubble.png"></img>
          <p className="bubble-text">I'm Sandy — a recent CS grad who blends creativity with code. As a first-gen student and aspiring software engineer, I love turning complex problems into simple, elegant solutions. Programming is my craft, and I'm excited to keep building and learning in the tech world.</p>
        </div>
        
        

      </div>

      <div className="hobbies-section">
        <img className="hobbies-img" src="/src/assets/Hobbies.png"></img>
        <div className="hobbies-right">
          <h2>Hobbies:</h2>
          <ul>
            <li>Drawing & Painting</li>
            <li>Playing Video Games</li>
            <li>Gardening</li>
            <li> Fishing</li>
            <li>Running</li>
          </ul>
        </div>
        
        

      </div>

      <div className="facts-section">
        <div className="facts-left">
          <h2>Facts About Me:</h2>
          <ul>
            <li>I have 8 pet chickens</li>
            <li>Terrified of spiders</li>
            <li>Love stardew valley and wild rift</li>
            <li>A sucker for reality tv shows</li>
            <li>Love to learn new cooking recipes</li>
            <li>Nature lover</li>
            <li>Listening to music 24/7</li>
            <li>Hamilton is my favorite musical</li>
          </ul>
        </div>
        <img className="facts-img" src="/src/assets/Interests.png"></img>
        
      </div>

      <div className="music-section">
        <h2>What is on my playlist?</h2>

        <div className="albums">
          <div className="artist1">
            <a href="https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X">
              <img className="song1"src="/src/assets/badbunny.jpg"></img>
            </a>
            <p>BAILE INoLVIDABLE</p>
          </div>
          <div className="artist2">
            <a href="https://open.spotify.com/artist/74KM79TiuVKeVCqs8QtB0B">
              <img className="song2" src="/src/assets/sabrina.jpg"></img>
            </a>
            <p>Don't Smile</p>
          </div>
          <div className="artist3">
            <a href="https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq">
            <img className="song3" src="/src/assets/joji.jpg"></img>
            </a>
            <p>Feeling Like The End</p>
          </div>

        </div>
        
        

      </div>

    </div>
  )
}


export default AboutMeWindow;