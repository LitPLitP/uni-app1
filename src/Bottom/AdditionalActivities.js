import React, { useEffect, useState } from 'react';
import './AdditionalActivities.css';

const AdditionalActivities = () => {
  const images = [
    "/uni-app/Pics/c2.jpg",
    "/uni-app/Pics/c.jpg",
  ];

  const text = "These are some of my favorite activities that I engage in during my free time. I enjoy horse riding, archery, and swimming. Each activity provides a unique sense of relaxation and excitement. Horse riding allows me to connect with nature, archery helps me improve my focus and precision, and swimming is a refreshing way to stay fit.";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="additional-activities">
      <h2>Other stuff I did not get certificate for</h2>
      <div className="activity-box">
        <iframe
          className="activity-video-left"
          src="https://www.youtube.com/embed/edEHZp9TL_s"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="activity-text-right">
          Here I helped with kids who have autism, where I volunteered to help them and play with them. This event was held at Al Sanawbar School, I only recorded two videos so that I can also focus on my responsibility. (Another video here: <a href="https://youtube.com/shorts/z6gwHW7K38c?feature=share" target="_blank" rel="noopener noreferrer">https://youtube.com/shorts/z6gwHW7K38c?feature=share</a>)
        </p>
      </div>
      <div className="activity-box connected">
        <p className="activity-text-left">
          This game marks a significant milestone in my coding journey. While I followed a YouTube tutorial for much of the development, I learned a great deal, particularly in coding and designing additional levels. Independently, I created a functional audio system with adjustable volume and made various other improvements to the game examples: Working Start and Exit button, and pause system. This project has provided me with valuable skills and a deeper understanding of game development.
        </p>
        <iframe
          className="activity-video-right"
          src="https://www.youtube.com/embed/IQ6ogzinJVw?si=Q--AWfUYNKm5GHXt"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="activity-box connected">
        <img className="activity-image-left rotating-image" src={images[currentImageIndex]} alt="Rotating activity" />
        <p className="activity-text-right">{text}</p>
      </div>
    </div>
  );
}

export default AdditionalActivities;
