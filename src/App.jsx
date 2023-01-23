import { Routes, Route } from 'react-router';

import { Navbar, Home } from './components/index';

import styles, { layout } from './style';

const App = () => (
  <div className='bg-white opacity-60 w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter} ${layout.navbarContainer}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Routes>
      <Route
        path='/'
        element={<Home />}>
        <Route
          path='weddingForm'
          element={<Home />}
        />
        <Route
          path='*'
          element={<Home />}
        />
      </Route>
    </Routes>
  </div>
);

export default App;
