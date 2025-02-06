import React, { useState } from "react";
import "./Poem.css";

export default function InfoButton() {
  return (
    <a
      href="https://github.com/EmmaKingDev/mywebsite"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="infoButton">What is this?</button>
    </a>
  );
}
