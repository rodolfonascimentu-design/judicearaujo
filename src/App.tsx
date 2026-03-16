import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import Launches from "./pages/Launches";
import PropertyDetail from "./pages/PropertyDetail";
import GestaoAtivos from "./pages/GestaoAtivos";
import ForbesPage from "./pages/ForbesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
