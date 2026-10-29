import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Medecins from './pages/Medecins';
import RendezVous from './pages/RendezVous';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: Services },
      { path: 'medecins', Component: Medecins },
      { path: 'rendez-vous', Component: RendezVous },
      { path: 'contact', Component: Contact },
      {
        path: '*',
        Component: () => (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <p className="text-7xl font-bold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>404</p>
            <h1 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Page introuvable</h1>
            <p className="text-slate-500 mb-8">La page que vous cherchez n'existe pas ou a été déplacée.</p>
            <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A8A] text-white font-semibold rounded-xl hover:bg-[#1e3070] transition-colors text-sm">Retour à l'accueil</a>
          </div>
        ),
      },
    ],
  },
]);
