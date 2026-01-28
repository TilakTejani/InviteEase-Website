import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';

const AdminDashboard = lazy(() => import('./components/AdminDashboard'));
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="min-h-screen bg-inviteease-bgDefault flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-inviteease-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Routes>
          {/* Public Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Administrative Dashboard */}
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/admin" element={<Navigate to="/dashboard" replace />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
