
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <header>
      <div id="bar">
        <h1>HELLO?</h1>
        <FontAwesomeIcon icon={faWifi} />
      </div>
    </header>
  );
}

export default Home;