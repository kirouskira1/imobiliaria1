import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <main className="flex-1 pt-16">
        {children}
      </main>
      {/* Botão flutuante do assistente */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => setChatOpen(true)}
          className="h-14 w-14 rounded-full bg-estate-primary hover:bg-estate-secondary shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Abrir assistente"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
      {/* Dialog do assistente */}
      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogContent className="sm:max-w-md" aria-describedby="assistant-dialog-description">
          <DialogHeader>
            <DialogTitle>Assistente Pedro André Negócios Imobiliários</DialogTitle>
            <DialogDescription id="assistant-dialog-description">
              Nosso assistente virtual está pronto para ajudar com suas buscas.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 text-center">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 text-estate-primary" />
            <p className="text-lg font-medium">Em breve, nosso assistente IA vai te ajudar aqui!</p>
          </div>
        </DialogContent>
      </Dialog>
      {/* Rodapé institucional */}
      <footer className="w-full bg-white border-t border-slate-100 mt-8">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo e nome */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="rounded-full bg-estate-primary text-white px-3 py-2 text-2xl font-extrabold" style={{fontFamily: 'sans-serif'}}>B</span>
            <span className="font-bold text-lg text-estate-primary">Pedro André Negócios Imobiliários</span>
            <span className="text-xs text-muted-foreground">A sua imobiliária digital</span>
          </div>
          {/* Navegação institucional */}
          <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
            <a href="/" className="text-sm text-slate-700 hover:text-estate-primary transition-colors">Início</a>
            <a href="/buscar" className="text-sm text-slate-700 hover:text-estate-primary transition-colors">Buscar Imóveis</a>
            <a href="/mapa" className="text-sm text-slate-700 hover:text-estate-primary transition-colors">Mapa</a>
            <a href="/favoritos" className="text-sm text-slate-700 hover:text-estate-primary transition-colors">Favoritos</a>
            <a href="/ajuda" className="text-sm text-slate-700 hover:text-estate-primary transition-colors">Ajuda</a>
          </div>
          {/* Redes sociais e contato */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-3 mb-2">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-estate-primary transition-colors">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><rect x="2" y="9" width="20" height="13" rx="2"/><circle cx="12" cy="12" r="4"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-500 hover:text-estate-primary transition-colors">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-500 hover:text-estate-primary transition-colors">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
            <span className="text-xs text-muted-foreground">Contato: contato@luximob.com.br</span>
            <span className="text-xs text-muted-foreground">© {new Date().getFullYear()} Pedro André Negócios Imobiliários</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
