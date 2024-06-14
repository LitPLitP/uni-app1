import React from 'react';
import './ContentBox.css';

const ContentBox = ({ imageSrc, text }) => {
  const textPart = text.split("(Link: ")[0];
  const linkPart = text.split("(Link: ")[1]?.slice(0, -1);

  return (
    <div className="content-box">
      <img src={imageSrc} alt={textPart} className="content-media" />
      <p className="content-text">
        {textPart}
        {linkPart && (
          <>
            (<a href={linkPart} target="_blank" rel="noopener noreferrer">
              {linkPart}
            </a>)
          </>
        )}
      </p>
    </div>
  );
};

export default ContentBox;
