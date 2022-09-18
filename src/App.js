import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Header from './Header';
import AboutMe from './AboutMe';
import Sidebar from './Sidebar';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<AboutMe
          />

          } />
      </Routes>
    </>
  );
}

export default App;
