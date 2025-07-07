import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import NoNavLayout from './layouts/NoNavLayout';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import SpecialPage from './pages/SpecialPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes that use the MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Routes that use a layout without Navbar */}
        <Route element={<NoNavLayout />}>
          <Route path="/special" element={<SpecialPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;