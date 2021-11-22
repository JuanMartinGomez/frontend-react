import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const Bands = (props) => {
  const { bands } = props;
  const [moreInfo, setmoreInfo] = useState('');
  const infoBand = (banda) => {
    setmoreInfo(banda);
  };
  return (
    <div
      style={{
        textAlign: 'start',
      }}
    >
      <ul>
        {/* the bands filter is performed */}
        <h4>Click on the name of the band for more information</h4>
        {bands.map((band) => (
          <h6 onClick={() => infoBand(band)} key={band.id}>
            {band.id} {band.name}
          </h6>
        ))}
      </ul>
      <div className="col">
        {moreInfo ? (
          // show the album information
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
              <Card.Text>Genre: {moreInfo.genreCode}</Card.Text>
              <Card.Text>Year: {moreInfo.year}</Card.Text>
              <Card.Text>Founded in: {moreInfo.country}</Card.Text>
              <Card.Text>
                Members of the band:
                {'\n'}
                <ul>
                  {moreInfo.members.map((member) => (
                    <h6 key={member.id}>{member.name}</h6>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
};

export default Bands;
