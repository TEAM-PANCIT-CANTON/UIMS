import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import Events from './pages/Events';
import SpotMap from './pages/SpotMap';
import ProjectActivity from './pages/ProjectActivity';
import Officials from './pages/Officials';
import Request from './pages/Request';
import HealthWorker from './dashboards/HealthWorker';



import PublicLayout from './layouts/PublicLayout';
import HealthWorker from './dashboards/HealthWorker';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/events" element={<Events />} />
          <Route path="/spotmap" element={<SpotMap />} />
          <Route path="/projectactivity" element={<ProjectActivity />} />
          <Route path="/officials" element={<Officials />} />
          <Route path="/request" element={<Request />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
