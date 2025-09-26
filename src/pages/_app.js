import { NormalHeading } from "@/components/ui/Typography";
import "@/styles/globals.css";
import "@fontsource-variable/inter";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import * as WorkboxWindow from 'workbox-window';

export default function App({ Component, pageProps }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayNotice, setDisplayNotice] = useState(true);

  useEffect(() => {
    setIsLoaded(!isLoaded);
  }, []);

  const [isPwaInstalled, setIsPwaInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "navigator" in window) {
      setIsPwaInstalled(
        window.matchMedia("(display-mode: standalone)").matches ||
          document.referrer.includes("android-app://")
      );
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    const wb = new WorkboxWindow.Workbox("/sw.js");

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    wb.register();
  }, []);

  const handleInstallPwa = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === "accepted") {
        console.log("User accepted the install prompt");
      }
      setDeferredPrompt(null);
    }
  };

  return (
    <ThemeProvider attribute="class">
      {!isPwaInstalled && deferredPrompt && displayNotice && (
        <div className="fixed top-4 inset-x-0 bg-neutral-100/75 dark:bg-neutral-900/75 max-w-xs text-center mx-auto backdrop-blur-3xl rounded-3xl px-6 py-4 z-50">
          <NormalHeading>即刻开始，安装我们的 PWA 应用程序</NormalHeading>
          <button
            onClick={handleInstallPwa}
            className="bg-orange-600 text-white px-4 py-2 rounded-3xl mt-2 w-full font-medium"
          >
            安装应用
          </button>
          <button
            onClick={() => setDisplayNotice(false)}
            className="bg-neutral-200 dark:bg-neutral-800 px-4 py-2 rounded-3xl mt-2 w-full font-medium"
          >
            不，谢谢
          </button>
        </div>
      )}
      {isLoaded && <Component {...pageProps} />}
    </ThemeProvider>
  );
}
