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
    </div>
  );
};

export default Layout;
