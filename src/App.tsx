import { useEffect, useState } from 'react';
import reactLogo from './assets/images/react.svg';
import viteLogo from './assets/images/vite.svg';
import './App.css';
import { RoutePaths } from './types/Routes.type';
import { Link, NavLink } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React + TypeScript</h1>
      <div className='card'>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
          <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
          <button>
            <Link to={RoutePaths.HOME}>Go to Home page</Link>
          </button>
          <button>
            <Link to={RoutePaths.ABOUT}>Go to About page</Link>
          </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
