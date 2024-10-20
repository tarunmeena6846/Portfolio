import { createContext, useContext, useEffect, useState } from "react";

const LoadingContext = createContext(null);
export const routes = [
  { route: "/", name: "Home" },
  { route: "/about", name: "About" },
  { route: "/projects", name: "Projects" },
  { route: "/contact", name: "Contact" },
];
export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [route, setRoute] = useState(routes[0]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <LoadingContext.Provider
      value={{ isLoading, setIsLoading, route, setRoute }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
