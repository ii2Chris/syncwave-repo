import { React } from "react";
import "./HomePage.css";

const HomePage = () => {
  const artists = [
    { name: "TEMP", type: "ARTIST", image: "" },
    { name: "TEMP", type: "ARTIST", image: "" },
    { name: "TEMP", type: "ARTIST", image: "" },
    { name: "TEMP", type: "ARTIST", image: "" },
    { name: "TEMP", type: "ARTIST", image: "" },
    { name: "TEMP", type: "ARTIST", image: "" },
  ];
  return (
    <div className="homepage">
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <div className="nav-item">
          <div className="nav-icon profile-icon"></div>
          <span>PROFILE</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon chats-icon"></div>
          <span>CHATS</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon friends-icon"></div>
          <span>FRIENDS</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <div className="hero">
          <div className="hero-content">
            <h1>
              <span>MEET</span>
              <span>YOUR</span>
              <span>CONCERT</span>
              <span>CREW</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati labore libero ipsa velit similique, fugit amet quod
              minus odio nemo, rerum optio? Corrupti eaque nostrum repudiandae?
              Ex commodi eum quo!
            </p>
          </div>
          <button className="near-me-button">NEAR ME</button>
        </div>

        {/* Events Section */}
        <section className="events">
          <h2>UPCOMING EVENTS</h2>
          <div className="artist-grid">
            {artists.map((artist, index) => (
              <div key={index} className="artist-card">
                <div className="artist-image"></div>
                <h3>{artist.name}</h3>
                <p>{artist.type}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
