import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { CONTACT_INFO } from '../lib/data';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <a href="#contenu-principal" className="skip-link">Aller au contenu principal</a>
      <Header />
      <main id="contenu-principal" className="flex-1 pt-[calc(2.5rem+4rem)] sm:pt-[calc(1.75rem+4rem)]"><Outlet /></main>
      <Footer />
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nous contacter sur WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-[#1DA851] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.48 0 .11 5.37.11 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62a11.94 11.94 0 0 0 5.89 1.5h.01c6.6 0 11.97-5.37 11.98-11.97a11.9 11.9 0 0 0-3.55-8.43ZM12.09 21.85a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.67.96.98-3.58-.24-.37a9.86 9.86 0 0 1-1.51-5.3c0-5.46 4.45-9.91 9.92-9.91a9.84 9.84 0 0 1 7.01 2.91 9.84 9.84 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.98 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
