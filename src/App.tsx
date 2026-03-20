import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import Launches from "./pages/Launches";
import PropertyDetail from "./pages/PropertyDetail";
import GestaoAtivos from "./pages/GestaoAtivos";
import ForbesPage from "./pages/ForbesPage";
import QuemSomos from "./pages/QuemSomos";
import MapaDoSite from "./pages/MapaDoSite";
import NotFound from "./pages/NotFound";
import WhatsAppFab from "./components/WhatsAppFab";

const queryClient = new QueryClient();

const ConditionalWhatsAppFab = () => {
  const location = useLocation();
  const isPropertyDetail = location.pathname.startsWith("/imovel/");
  if (isPropertyDetail) return null;
  return <WhatsAppFab />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/imoveis" element={<Properties />} />
            <Route path="/lancamentos" element={<Launches />} />
            <Route path="/imovel/:id" element={<PropertyDetail />} />
            <Route path="/gestao-de-ativos-imobiliarios" element={<GestaoAtivos />} />
            <Route path="/forbes" element={<ForbesPage />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/mapa-do-site" element={<MapaDoSite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ConditionalWhatsAppFab />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
