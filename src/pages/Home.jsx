import { useNavigate } from "react-router-dom"
import "./Home.css"

function Home() {

  const navigate = useNavigate()

  return (
    <div className="home">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          MG STUDIO
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Creators</a>
          <a href="#">Contact</a>
        </div>

      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <p className="tagline">
            FUTURE OF STREETWEAR CUSTOMIZATION
          </p>

          <h1>
            DESIGN <br />
            YOUR <span>IDENTITY</span>
          </h1>

          <p className="description">
            Experience futuristic fashion customization with
            immersive visuals, premium streetwear aesthetics,
            and AI-powered creativity.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/customize")}
            >
              Customize Your Experience
            </button>

            <button className="secondary-btn">
              Explore Collection
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">

          <div className="glow"></div>

          <img
            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop"
            alt="Streetwear"
          />

        </div>

      </section>

      {/* BACKGROUND EFFECTS */}
      <div className="gradient-one"></div>
      <div className="gradient-two"></div>

    </div>
  )
}

export default Home