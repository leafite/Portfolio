import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="about-container containers">
        <div className="about-title">
          <h1>About me</h1>
        </div>
        <p className="about-body">
          Hi, my name is Christopher Bautista-Cruz, and my journey with
          technology started with Pokémon Silver on the Game Boy Color. From
          those early days of gaming, I’ve been captivated by how technology
          creates immersive worlds. This fascination only grew as I spent
          countless hours gaming with friends, always curious about the
          intricate systems driving each movement.<br></br>
          <br></br>For the past five years, I’ve been working full-time as a
          bookkeeper, where I’ve sharpened my skills in attention to detail,
          organization, and financial acumen. But my passion for tech was always
          there, running alongside my work. Recently, I completed a Full-Stack
          Development course from Arizona State University - edX, where I gained
          proficiency in technologies like React, Node.js, and database
          management, allowing me to work on both front-end and back-end
          development.<br></br>
          <br></br>Now, I’m eager to dive into the tech industry, collaborate
          with other talented professionals, and continue growing my skills.
          Ultimately, I aim to create innovative, impactful projects that
          inspire others—just as gaming and technology have inspired me
          throughout my life.
        </p>
      </div>

      <div className='map-container containers'>
            <img src='map' alt='AZ-map'/>
        </div>

    </div>
  );
};

export default About;
