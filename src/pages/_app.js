import "@/styles/globals.css";
import "@fontsource-variable/inter";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(!isLoaded);
  }, []);
  return (
    <ThemeProvider attribute="class">
      {isLoaded && <Component {...pageProps} />}
    </ThemeProvider>
  );
}
