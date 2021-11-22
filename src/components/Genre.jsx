import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const Genre = (props) => {
  const { genres } = props;
  const [moreInfo, setmoreInfo] = useState('');
  const infoBand = (genres) => {
    setmoreInfo(genres);
  };
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <ul>
        <h4>Click on the name of the genre for more information</h4>

        {/* the genre filter is performed */}
        {genres.map((genre) => (
          <h6 onClick={() => infoBand(genre)} key={genre.id}>
            {genre.name}
          </h6>
        ))}
      </ul>
      <div className="col">
        {moreInfo ? (
          // show the gender information
          <Card
            style={{
              borderWidth: 5,
              borderColor: '#5858cc',
              shadowColor: '#000000',
              width: '100%',
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: 'start',
                }}
              >
                {moreInfo.name}
              </Card.Title>
              <Card.Text>Genre: {moreInfo.code}</Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
};

export default Genre;
