import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Página não encontrada | Judice & Araujo";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6 font-medium">
            Erro 404
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-foreground mb-6 tracking-wide">
            Página não encontrada
          </h1>
          <p className="font-sans text-sm text-muted-foreground leading-[1.8] font-light mb-10">
            A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground text-[11px] font-sans font-medium tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:bg-primary/90"
          >
            Voltar para o início
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
