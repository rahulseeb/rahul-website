import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>Rahul Seebaransingh</h1>
        <p>A 3rd year Computer Science student at Queen's University</p>
    </div>
  )
}

export default HeroSection;
