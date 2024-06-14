import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import './App.css';
import ContentBox from './ContentBoxes/ContentBox';
import AdditionalActivities from './Bottom/AdditionalActivities';
import About from './About';
import Achievements from './Achievements';

function App() {
  const [isShrunk, setIsShrunk] = useState(false);

  return (
    <Router basename="/uni-app1">
      <Routes>
        <Route path="/" element={
          <>
            <Header setIsShrunk={setIsShrunk} />
            <div style={{ paddingTop: isShrunk ? '60px' : '150px' }}>
              <div className="content-container">
                <div className="content-box-wrapper">
                  <ContentBox imageSrc="/uni-app/Pics/horse.jpg" text="This is a picture of me horse riding, which is one of my favorite hobbies. I love the feeling of being on a horse and enjoying the outdoors. It's something I look forward to and try to do whenever I can. It's both fun and relaxing, and it always makes my day better. (Link: https://youtube.com/shorts/hxAs8W7Gje8?feature=share)" />
                  <ContentBox imageSrc="/uni-app/Pics/Archery.jpg" text="I’ve been dedicating time to practicing archery on my own, and I'm thrilled with the progress I’ve made so far. It’s been a rewarding journey, improving my skills and honing my focus. Archery has become a passion of mine, and I’m excited to keep pushing myself and seeing how far I can go" />
                  <ContentBox imageSrc="/uni-app/Pics/swimming.jpg" text="Swimming is another hobby of mine that I truly enjoy, even though I rarely get the chance to do it. Being in the water is incredibly refreshing and relaxing. Whenever I do manage to go swimming, I cherish the experience and make the most of every moment" />
                </div>
              </div>
              <AdditionalActivities />
            </div>
            <p>I created this website to show some of my skills I know it is not perfect but I loved it, I had not enough time to work more on it, as I started after my AP exams were over, but I learnt alot. I used my own skills, and youtube, and AI to help with this website and I did learn alot through this process.</p>
            <div className="thank-you">
              <span>Thank You</span>
            </div>
          </>
        } />
        <Route path="/about" element={
          <>
            <Header disableShrink initialShrunk />
            <About />
          </>
        } />
        <Route path="/achievements" element={
          <>
            <Header disableShrink initialShrunk />
            <Achievements />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
