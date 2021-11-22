import React, { useState } from 'react';

import { Container, Dropdown } from 'react-bootstrap';

import Genre from '../components/Genre';
import Bands from '../components/Bands';
import Albums from '../components/Albums';

const Home = () => {
  const [bands, setBands] = useState([]);
  const [option, setOption] = useState('');

  const Filter = async (filter) => {
    setOption(filter);
    // get the data from the api
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/improvein/dev-challenge/' + filter
      );
      const data = await response.json();
      setBands(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container fluid>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Filter
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => Filter('bands')}>Bands</Dropdown.Item>
          <Dropdown.Item onClick={() => Filter('genre')}>Genres</Dropdown.Item>
          <Dropdown.Item onClick={() => Filter('albums')}>Albums</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="row mt-5">
        <div className="col"></div>
        <div className="col">
          {option === 'bands' ? (
            <Bands bands={bands} />
          ) : option === 'genre' ? (
            <Genre genres={bands} />
          ) : option === 'albums' ? (
            <Albums albums={bands} />
          ) : null}
        </div>
        <div className="col"></div>
      </div>
    </Container>
  );
};

export default Home;
