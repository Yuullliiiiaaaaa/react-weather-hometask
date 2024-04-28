import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/Yuullliiiiaaaaa"
          target="https://github.com/Yuullliiiiaaaaa"
        >
          Yuliia Demyanchuk
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Yuullliiiiaaaaa/Weather-app-and-hosting"
          target="https://github.com/Yuullliiiiaaaaa/Weather-app-and-hosting"
        >
          on GitHub{" "}
        </a>
        and{" "}
        <a
          href="https://app.netlify.com/teams/yuullliiiiaaaaa/sites"
          target="https://app.netlify.com/teams/yuullliiiiaaaaa/sites"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
