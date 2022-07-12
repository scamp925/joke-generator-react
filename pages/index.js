import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import getJoke from '../api/jokeData';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get a Joke');

  const handleClick = () => {
    if (btnText === 'Get a Joke' || btnText === 'Get Another Joke') {
      getJoke().then(setJoke).then(() => {
        setBtnText('Get Punchline'); // Had to put this in a .then b/c the previous joke setup would stay on the DOM until the API promise came in with the new joke's setup.
      });
    } else if (btnText === 'Get Punchline') {
      setBtnText('Get Another Joke');
    }
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h2>{ btnText === 'Get a Joke' ? '' : joke.setup}</h2>
      <h4>{ btnText === 'Get Another Joke' ? joke.delivery : ''}</h4>
      <Button variant="light" size="lg" onClick={handleClick}>{btnText}</Button>{' '}
    </div>
  );
}

export default Home;
