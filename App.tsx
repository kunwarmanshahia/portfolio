import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ForgeCaseStudy from './pages/ForgeCaseStudy';
import MosaicCaseStudy from './pages/MosaicCaseStudy';
import CloverXBarbershop from './pages/CloverXBarbershop';
import LaHaine from './pages/LaHaine';
import Triunity from './pages/Triunity';
import Gearbox from './pages/Gearbox';
import BrokenYolk from './pages/BrokenYolk';
import SignaturesForSound from './pages/SignaturesForSound';
import Resume from './pages/Resume';
import ProjectsPage from './pages/ProjectsPage';
import SelectWorkPage from './pages/SelectWorkPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen text-black" style={{ background: '#f4f4f2' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/select-work" element={<SelectWorkPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/case-study/forge" element={<ForgeCaseStudy />} />
          <Route path="/case-study/mosaic" element={<MosaicCaseStudy />} />
          <Route path="/project/clover-x-barbershop" element={<CloverXBarbershop />} />
          <Route path="/project/la-haine" element={<LaHaine />} />
          <Route path="/project/triunity" element={<Triunity />} />
          <Route path="/project/gearbox" element={<Gearbox />} />
          <Route path="/project/broken-yolk" element={<BrokenYolk />} />
          <Route path="/project/signatures-for-sound" element={<SignaturesForSound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
