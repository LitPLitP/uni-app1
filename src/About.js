import React from 'react';
import './About.css';

function About() {
  return (
    <div className="container">
      <h2 className="title">My Portfolio</h2>
      <div className="box">
        <img 
          src="/uni-app/Pics/l1.jpg" 
          alt="Description" 
        />
        <div>
          <p>
            I, Abdulrahman, was born in Cairo, Egypt in 2006. I have always been curious and eager to learn new things, and as I've grown older, my thirst for knowledge has only increased. Socially, I was quite shy during my early years, but by the time I reached seventh grade, I had become more outgoing. However, I still feel that I need to be more confident in participating in fun activities, such as dancing, and not let shyness hold me back. Making friends comes naturally to me, and I am able to adapt quickly. I am fortunate to have a great social circle.
          </p>
          <p>
            Academically, I am grateful to be a diligent student who enjoys expanding my knowledge. I believe that success in life requires a balance in various aspects, including social skills, academics, life experiences, and spirituality.
          </p>
          <p>
            Since seventh grade, I have been drawn to the fields of Computer Science and Electrical Engineering. This interest led me to learn about programming languages such as Java, JavaScript, Python, HTML, and CSS. I also dabbled in C++ and C#. Additionally, I have some experience in 3D design, and I am considering revisiting this interest in the upcoming summer. I am particularly drawn to the field of Computer Science due to its promising future, especially in the realm of AI. With the increasing demand for professionals in this field, I see a bright future ahead.
          </p>
          <p>
            My time in grades 11 and 12 has been enriching. I have pursued diverse interests such as horse riding, swimming, archery, 3D design, web development, and stock market trading. I have also been working on establishing my own business and have dedicated time to volunteering. These experiences have significantly shaped my mindset and personality, and I have had the opportunity to meet many inspiring individuals and grow alongside them.
          </p>
          <p>
            Looking ahead, I aspire to start one or two businesses, enhance my programming skills, increase my involvement in community service, learn boxing and sword fighting, and continue on my journey of personal growth.
          </p>
          <p>
            All of these experiences have brought me to the point of making decisions about my future, particularly in terms of my university education. After researching various options, I have identified American University of Sharjah as one of my top choices, especially because of its specialization in AI. I believe that this university will provide me with the environment and resources to become the best version of myself. If given the opportunity, I am confident that I can contribute significantly to the university community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
