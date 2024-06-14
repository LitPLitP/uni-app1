import React, { useState } from 'react';
import './Achievements.css';

const initialAchievementsData = [
  {
    id: 1,
    images: [
      `${process.env.PUBLIC_URL}/Pics/1.jpg`,
      `${process.env.PUBLIC_URL}/Pics/11.jpg`,
    ],
    text: "Public speaking helped me a lot in overcoming my awkwardness when speaking in front of a large audience. Although I didn't have a problem, I would feel stressed..",
    currentImageIndex: 0,
  },
  {
    id: 2,
    images: [
      `${process.env.PUBLIC_URL}/Pics/2.jpg`,
      `${process.env.PUBLIC_URL}/Pics/31.jpg`,
      `${process.env.PUBLIC_URL}/Pics/32.jpg`,
    ],
    text: "I may not have won this competition, but I learned a valuable lesson: there will always be people competing with me in programming, so I need to improve. Despite not winning, I was the reason our school scored higher than others (after asking other teams how they did).",
    currentImageIndex: 0,
  },
  {
    id: 3,
    images: [
    `${process.env.PUBLIC_URL}/Pics/3.jpg`,
    `${process.env.PUBLIC_URL}/Pics/c6.jpg`,
    `${process.env.PUBLIC_URL}/Pics/c5.jpg`,
    ],
    text: "One of the best competitions I participated in taught me a lot about computer engineering and improved my skills in team management, as I was the leader. Although we didn't win, the knowledge I gained was substantial.",
    currentImageIndex: 0,
  },
  
  {
    id: 4,
    images: [
      `${process.env.PUBLIC_URL}/Pics/4.jpg`,
      `${process.env.PUBLIC_URL}/Pics/41.jpg`,
    ],
    text: (
      <span>
        TedX is one of my greatest and proudest achievements. I have worked hard to get on stage
        and I have perfected my presentation. The TedX experience has taught me a lot, from gaining
        more confidence to becoming a better presenter (although I already thought I was great at it).
        It even influenced my style of clothing, haha. You can watch my official TedX video  
        <a href="https://www.youtube.com/watch?v=znZrtQtHlm4&t=1s" target="_blank" rel="noopener noreferrer">here</a>.
      </span>
    ),
    currentImageIndex: 0,
  },
  {
    id: 5,
    image: `${process.env.PUBLIC_URL}/Pics/5.jpg`,
    text: 'A simple achievement but hey why not put it in?',
  },
  {
    id: 6,
    image: `${process.env.PUBLIC_URL}/Pics/6.jpg`,
    text: 'Another volunteering work.',
  },
  {
    id: 7,
    images: [
      `${process.env.PUBLIC_URL}/Pics/7.jpg`,
      `${process.env.PUBLIC_URL}/Pics/71.jpg`,
      `${process.env.PUBLIC_URL}/Pics/72.jpg`,
    ],
    text: <span>'This is one of my best competitions, it helped me with team This competition has been one of my best experiences. It has helped me improve my team management skills, understand computer engineering better, enhance my programming abilities, develop my research skills, and become a better team leader. Overall, it has been a great experience, and I had the opportunity to meet like-minded individuals. This is something that I have enjoyed in all of these competitions.managament skills, helped me understand computer engineering alot, helped me with programming skills, helped me with researching skills, team leading skills, and patience. Overall was a great experience and there I met a few people who share my likings. It is something that I liked in all of these competitions. You can watch my project <a href="https://youtube.com/shorts/g0xbqkWrh6U?feature=share" rel="noopener noreferrer"> here</a></span>,
    currentImageIndex: 0,
  },
  {
    id: 8,
    image: 
      `${process.env.PUBLIC_URL}/Pics/8.jpg`,
    text: (
      'Here I just participated to know more about careers in general.'
    ),

  },
  {
    id: 9,
    images: [
      `${process.env.PUBLIC_URL}/Pics/9.jpg`,
      `${process.env.PUBLIC_URL}/Pics/91.jpg`,
      `${process.env.PUBLIC_URL}/Pics/92.jpg`,
      `${process.env.PUBLIC_URL}/Pics/94.jpg`,
      `${process.env.PUBLIC_URL}/Pics/95.jpg`,
    ],
    text: (
      "Volunteering certificates, 74 hours in total. Volunteering specifically helped me a lot with interacting with others, being more patient, dealing with kids, and being responsible for my role. It helped me learn organizing crowds and trying to make everyone happy at once. I wanted to do more volunteering, but due to AP exams, I had a lot of studies and couldn't volunteer."
    ),
    currentImageIndex: 0,
  },
  {
  id: 10,
    images: [
      `${process.env.PUBLIC_URL}/Pics/s1.png`,
      `${process.env.PUBLIC_URL}/Pics/s2.png`,
      `${process.env.PUBLIC_URL}/Pics/s3.png`,
      `${process.env.PUBLIC_URL}/Pics/s4.png`,
      `${process.env.PUBLIC_URL}/Pics/s5.png`,
      `${process.env.PUBLIC_URL}/Pics/s6.png`,
    ],
    text: (
      "My Blender Projects. 3D designing."
    ),
    currentImageIndex: 0,
  },
  {
  id: 11,
    images: [
      `${process.env.PUBLIC_URL}/Pics/t1.png`,
      `${process.env.PUBLIC_URL}/Pics/t2.png`,
      `${process.env.PUBLIC_URL}/Pics/t3.png`,
      `${process.env.PUBLIC_URL}/Pics/t4.png`,
      `${process.env.PUBLIC_URL}/Pics/t5.png`,
      `${process.env.PUBLIC_URL}/Pics/t6.png`,
    ],
    text: (
      "Some courses I have purchased some courses and I am currently watching them. I wish to continue with them soon"
    ),
    currentImageIndex: 0,
  },
  {
    id: 12,
    text: (
      "I may not have won any competitions, and maybe I was close, but I want to be clear that my team never really received any assistance from the school. We were the ones who learned programming and actually did the programming, learned 3D design and 3D printing, and learned how to use Arduino and other related skills. Our school left us to do it all on our own. While I can't speak for other schools, I am happy with what I have learned on this journey."
    ),
    specialCase: true, // Adding a special case flag for custom rendering
  },
];

function Achievements() {
  const [achievementsData, setAchievementsData] = useState(initialAchievementsData);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [zoomedAchievement, setZoomedAchievement] = useState(null);

  const handleImageClick = (achievementId, image) => {
    setZoomedImage(image);
    setZoomedAchievement(achievementId);
  };

  const handleZoomOut = () => {
    setZoomedImage(null);
    setZoomedAchievement(null);
  };

  const handleNextImage = (achievementId) => {
    setAchievementsData((prevData) => {
      return prevData.map((achievement) => {
        if (achievement.id === achievementId && achievement.images) {
          const newIndex = (achievement.currentImageIndex + 1) % achievement.images.length;
          if (zoomedAchievement === achievementId) {
            setZoomedImage(achievement.images[newIndex]);
          }
          return {
            ...achievement,
            currentImageIndex: newIndex,
          };
        }
        return achievement;
      });
    });
  };

  const handlePreviousImage = (achievementId) => {
    setAchievementsData((prevData) => {
      return prevData.map((achievement) => {
        if (achievement.id === achievementId && achievement.images) {
          const newIndex =
            achievement.currentImageIndex === 0
              ? achievement.images.length - 1
              : achievement.currentImageIndex - 1;
          if (zoomedAchievement === achievementId) {
            setZoomedImage(achievement.images[newIndex]);
          }
          return {
            ...achievement,
            currentImageIndex: newIndex,
          };
        }
        return achievement;
      });
    });
  };

  return (
    <div className="achievements-container">
      {zoomedImage && zoomedAchievement && (
        <div className="zoomed-image-container">
          <button onClick={() => handlePreviousImage(zoomedAchievement)}>&lt;</button>
          <img src={zoomedImage} alt="Zoomed Achievement" className="zoomed-image" />
          <button onClick={() => handleNextImage(zoomedAchievement)}>&gt;</button>
          <button className="close-button" onClick={handleZoomOut}>X</button>
        </div>
      )}
      <div className="achievements-box">
        {achievementsData.map((achievement) => (
          <div
            key={achievement.id}
            className={`achievement ${achievement.id % 2 === 0 ? 'left' : 'right'} ${achievement.specialCase ? 'special-case' : ''}`}
          >
            {achievement.images ? (
              <div className="carousel">
                <button onClick={() => handlePreviousImage(achievement.id)}>&lt;</button>
                <img
                  src={achievement.images[achievement.currentImageIndex]}
                  alt={`Achievement ${achievement.id}`}
                  onClick={() => handleImageClick(achievement.id, achievement.images[achievement.currentImageIndex])}
                />
                <button onClick={() => handleNextImage(achievement.id)}>&gt;</button>
              </div>
            ) : (
              achievement.image && (
                <img
                  src={achievement.image}
                  alt={`Achievement ${achievement.id}`}
                  onClick={() => handleImageClick(achievement.id, achievement.image)}
                />
              )
            )}
            <p className={achievement.specialCase ? 'centered-text' : ''}>{achievement.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
