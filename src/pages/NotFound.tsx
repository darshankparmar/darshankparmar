
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    sessionStorage.redirect = window.location.href;
    window.location.replace("/");
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-16">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">404</h1>
        <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Oops! Page not found
        </p>
        <a 
          href="/" 
          className="flex items-center gap-2 glass-card px-6 py-3 rounded-md hover-lift animate-fade-in" 
          style={{ animationDelay: "0.2s" }}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Home</span>
        </a>
      </div>
    </Layout>
  );
};

export default NotFound;
