import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import FloatingContact from './components/FloatingContact.jsx';
import Home from './pages/Home.jsx';
import ListingPage from './pages/ListingPage.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import { services } from './data/services.js';
import { caseStudies } from './data/caseStudies.js';
import { blogs } from './data/blogs.js';

export default function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
      <CursorGlow />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ListingPage title="Services" eyebrow="Growth systems" items={services} type="services" />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/about" element={<ListingPage title="Creative Minds. Data-Driven Decisions." eyebrow="About us" type="about" />} />
            <Route path="/portfolio" element={<ListingPage title="Portfolio" eyebrow="Selected work" items={caseStudies} type="portfolio" />} />
            <Route path="/case-studies" element={<ListingPage title="Case Studies" eyebrow="Demo growth stories" items={caseStudies} type="cases" />} />
            <Route path="/pricing" element={<ListingPage title="Pricing" eyebrow="Custom growth packages" type="pricing" />} />
            <Route path="/blog" element={<ListingPage title="Blog" eyebrow="Marketing insights" items={blogs} type="blog" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingContact />
      <BackToTop />
    </>
  );
}


