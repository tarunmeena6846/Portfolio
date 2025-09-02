import { useState } from "react";

import { useEffect } from "react";

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLargeDesktop, setIsLargeDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
      setIsTablet(window.innerWidth > 425 && window.innerWidth <= 768);
      setIsLaptop(window.innerWidth > 768 && window.innerWidth <= 1024);
      setIsDesktop(window.innerWidth > 1024 && window.innerWidth <= 1440);
      setIsLargeDesktop(window.innerWidth > 1440);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile, isTablet, isLaptop, isDesktop, isLargeDesktop };
};

export default useDeviceDetect;