import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Loader from './components/Loader';
import LandingPage from './components/LandingPage';

const AdminDashboard = lazy(() => import('./components/AdminDashboard'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const DownloadPage = lazy(() => import('./components/DownloadPage'));
const PricingPage = lazy(() => import('./components/PricingPage'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Base Background Layer */}
        <div className="fixed inset-0 bg-inviteease-bgDefault z-0"></div>

        {/* Ambient Dashboard Background Rectangle */}
        <div
          className="fixed -top-[50%] -right-[25%] w-[50%] h-[200%] bg-gradient-primary opacity-[0.15] pointer-events-none animate-float-slow z-0"
          style={{ transform: 'rotate(25deg)' }}
        ></div>

        <div className="relative z-10 min-h-screen">
          <Suspense fallback={
            <div className="min-h-screen bg-inviteease-bgDefault flex items-center justify-center">
              <Loader size={100} />
            </div>
          }>
            <Routes>
              {/* Public Landing Page */}
              <Route path="/" element={<LandingPage />} />

              {/* Administrative Dashboard */}
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/admin" element={<Navigate to="/dashboard" replace />} />

              {/* Contact Us Page */}
              <Route path="/contact" element={<ContactUs />} />

              {/* Download Page */}
              <Route path="/download" element={<DownloadPage />} />

              {/* Pricing Page */}
              <Route path="/pricing" element={<PricingPage />} />

              {/* How It Works Page */}
              <Route path="/how-it-works" element={<HowItWorks />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
