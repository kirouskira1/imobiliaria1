import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Map, 
  Search, 
  Calendar, 
  MessageCircle, 
  Heart, 
  Settings, 
  HelpCircle,
  ChevronDown,
  ChevronRight,
  X,
  UserCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

interface SidebarGroupProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const SidebarItem = ({ icon, label, to, active }: SidebarItemProps) => (
  <Link 
    to={to} 
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-estate-light",
      active ? "bg-estate-light text-estate-primary font-medium" : "text-estate-dark"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const SidebarGroup = ({ icon, label, children, defaultOpen = false }: SidebarGroupProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-2">
      <Button 
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 font-medium text-estate-dark hover:bg-estate-light"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span>{label}</span>
        </div>
        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </Button>
      
      {isOpen && (
        <div className="pl-4 mt-1 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">Imobiliária</span>
          </Link>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Botão de Login */}
        <div className="p-4 border-b">
          <Link 
            to="/login" 
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-estate-primary to-estate-secondary text-white shadow-md rounded-full font-semibold px-6 py-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:from-estate-secondary hover:to-estate-primary focus:ring-2 focus:ring-estate-primary focus:outline-none"
          >
            <UserCircle className="h-4 w-4" />
            <span>Login</span>
          </Link>
        </div>
        
        <div className="px-3 py-4">
          <nav className="space-y-6">
            <div className="space-y-1">
              <SidebarItem 
                icon={<Home className="h-5 w-5" />} 
                label="Início" 
                to="/" 
                active={currentPath === "/"} 
              />
              <SidebarItem 
                icon={<Map className="h-5 w-5" />} 
                label="Mapa" 
                to="/mapa"
                active={currentPath === "/mapa"} 
              />
              <SidebarItem 
                icon={<Search className="h-5 w-5" />} 
                label="Buscar" 
                to="/buscar"
                active={currentPath === "/buscar"} 
              />
              <SidebarItem 
                icon={<Heart className="h-5 w-5" />} 
                label="Favoritos" 
                to="/favoritos"
                active={currentPath === "/favoritos"} 
              />
            </div>
            
            <SidebarGroup 
              icon={<Calendar className="h-5 w-5" />} 
              label="Agendamentos"
              defaultOpen={currentPath.startsWith("/agendamento")}
            >
              <SidebarItem 
                icon={<Calendar className="h-4 w-4" />} 
                label="Meus Agendamentos" 
                to="/meus-agendamentos"
                active={currentPath === "/meus-agendamentos"} 
              />
              <SidebarItem 
                icon={<Calendar className="h-4 w-4" />} 
                label="Agendar Visita" 
                to="/agendar-visita"
                active={currentPath === "/agendar-visita"} 
              />
            </SidebarGroup>
            
              <SidebarItem 
                icon={<MessageCircle className="h-5 w-5" />} 
                label="Chat" 
                to="/chat"
                active={currentPath === "/chat"} 
              />
            
            <div className="pt-4 border-t border-slate-200 space-y-1">
              <SidebarItem 
                icon={<Settings className="h-5 w-5" />} 
                label="Configurações" 
                to="/configuracoes"
                active={currentPath === "/configuracoes"} 
              />
              <SidebarItem 
                icon={<HelpCircle className="h-5 w-5" />} 
                label="Ajuda" 
                to="/ajuda"
                active={currentPath === "/ajuda"} 
              />
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
