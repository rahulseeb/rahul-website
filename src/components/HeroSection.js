import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
        <video src='/videos/molecules.mp4' autoPlay loop muted />
        <h1>Rahul Seebaransingh</h1>
        <p>An upcoming graduate Computer Science student at Queen's University</p>
    </div>
  )
}

export default HeroSection;
