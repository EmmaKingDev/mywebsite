import { useState } from 'react';
import './Poem.css';

export default function InfoButton() {
  return (
    <button class="infoButton" on:click={() => window.open("https://github.com/EmmaKingDev/mywebsite", "_blank")}>
      What is this?
    </button>
  );
}
