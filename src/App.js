import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './Header';
import AboutMe from './AboutMe';
import Sidebar from './Sidebar';
import Projects from './Projects';
import Work from './Experience';
import Education from './Education';

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

        <Route
          path="/experience"
          element={<Work
          />
          } />

        <Route
          path="/education"
          element={<Education
          />
          } />

        <Route
          path="/projects"
          element={<Projects
          />
          } />

      </Routes>
    </>
  );
}

export default App;
