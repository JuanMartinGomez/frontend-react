import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const Albums = (props) => {
  const { albums } = props;
  const [moreInfo, setmoreInfo] = useState('');
  const infoBand = (album) => {
    setmoreInfo(album);
  };
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <ul>
        <h4>Click on the name of the album for more information</h4>

        {/* the albums filter is performed */}
        {albums.map((album) => (
          <h6 onClick={() => infoBand(album)} key={album.id}>
            {album.name}
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
              <Card.Text>Year: {moreInfo.year}</Card.Text>
              <BandName nameband={moreInfo.bandId} />
            </Card.Body>
          </Card>
        ) : (
          <span />
        )}
      </div>
    </div>
  );

  function BandName({ nameband }) {
    // this function uses the bandId to show the band that belongs to the album
    let band = '';
    switch (nameband) {
      case 1:
        band = 'Kiss';
        break;
      case 2:
        band = 'Aerosmith';
        break;
      case 3:
        band = 'The Beatles';
        break;
      case 4:
        band = 'Angra';
        break;
      case 5:
        band = 'Metallica';
        break;
      case 6:
        band = 'Iron Maiden';
        break;
      case 7:
        band = 'Cradle of Filth';
        break;
      case 8:
        band = 'Within Temptation';
        break;
      case 9:
        band = 'Queen';
        break;
      case 10:
        band = 'Pearl Jam';
        break;
      case 11:
        band = 'Rhapsody of Fire';
        break;
      case 12:
        band = 'Dream Theater';
        break;
      default:
        break;
    }
    return <Card.Text>Band: {band}</Card.Text>;
  }
};

export default Albums;
