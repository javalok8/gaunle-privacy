// src/App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div
      style={{
        padding: 20,
        maxWidth: 800,
        margin: "auto",
        fontFamily: "Arial",
      }}
    >
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last Updated:</strong> July 13, 2025
      </p>

      <p>
        This Privacy Policy explains how Gaunle collects, uses, and protects
        your information.
      </p>

      <h2>1. Information Collection</h2>
      <p>We collect data such as your name, email and media you upload.</p>

      <h2>2. Use of Information</h2>
      <p>
        Your data is used to personalize your experience, improve the app, and
        deliver ads.
      </p>

      <h2>3. Tracking & Ads</h2>
      <p>
        We may use third-party services like AdMob and Facebook Ads to show
        personalized ads.
      </p>

      <h2>4. Permissions</h2>
      <p>
        The app may request access to your camera, photos, and storage for
        features to work.
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        We do not sell your data. Some data may be shared with third-party
        services (e.g., Firebase, AdMob).
      </p>

      {/* --- NEW CONTACT SECTION --- */}
      <h2>6. Contact Us</h2>
      <p>
        For any questions, concerns, or support regarding this application,
        please contact us directly:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:punarjuna@yahoo.co.uk">punarjuna@yahoo.co.uk</a>
      </p>
      <p>
        <strong>Developer:</strong> Arjuna Garbuja Pun
      </p>
      <p>
        <strong>Phone:</strong> 07517107171
      </p>
      {/* --- END NEW SECTION --- */}

      <h2>7. Privacy Policy Updates</h2>
      <p>
        We may update this policy from time to time. Please review it
        periodically.
      </p>
    </div>
  );
}

export default App;
