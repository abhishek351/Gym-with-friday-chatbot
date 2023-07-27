import React, { useEffect } from 'react';
import "./App.css"
import { Helmet } from 'react-helmet';
const App = () => {
  useEffect(() => {
    const injectScript = document.createElement('script');
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
    injectScript.async = true;
    document.body.appendChild(injectScript);

    return () => {
      document.body.removeChild(injectScript);
    };
  }, []);
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Our Gym</h1>
      </header>
      <main className="main">
        <section className="section">
          <h2>Train with the Best</h2>
          <p>
            Get in shape, build strength, and improve your skills with our
            experienced instructors in martial arts, MMA, and boxing.
          </p>
          <button className="cta-btn">Learn More</button>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Gym Website. All rights reserved.</p>
      </footer>
      <Helmet>
      <script
          src="https://mediafiles.botpress.cloud/18c8c7d7-9dc4-4b06-9271-b0ed0dd315f4/webchat/config.js"
          defer
          
        ></script>
      </Helmet>
    </div>
  );
};

export default App;
