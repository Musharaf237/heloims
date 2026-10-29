import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <a href="#contenu-principal" className="skip-link">Aller au contenu principal</a>
      <Header />
      <main id="contenu-principal" className="flex-1 pt-[calc(2.5rem+4rem)] sm:pt-[calc(1.75rem+4rem)]"><Outlet /></main>
      <Footer />
    </div>
  );
}
