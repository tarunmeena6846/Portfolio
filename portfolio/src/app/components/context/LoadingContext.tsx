import { createContext, useContext, useEffect, useState } from "react";
interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const routes = [
  { route: "/", name: "Home" },
  { route: "/about", name: "About" },
  { route: "/projects", name: "Projects" },
  { route: "/contact", name: "Contact" },
];
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  // const [route, setRoute] = useState(routes[0]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const loadingContext = useContext(LoadingContext);
  if (!loadingContext) {
    throw new Error("TodoContext not found");
  }
  const { isLoading, setIsLoading } = loadingContext;
  // return useContext(LoadingContext);
  return {
    isLoading,
    setIsLoading,
  };
}
