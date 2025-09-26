import { SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { navItems, iconSize } from "@/data/config";

export default function Navbar() {
  const router = useRouter();
  const glassStyle =
    "rounded-full border border-neutral-300/25 dark:border-neutral-700/25 bg-neutral-50/50 dark:bg-neutral-950/50 backdrop-blur-3xl";
  const NavButton = ({ children, className, ...props }) => {
    return (
      <button
        className={`${className} transition-all duration-500 rounded-full py-2 hover:bg-neutral-100/25 dark:hover:bg-neutral-900/25`}
        {...props}
      >
        {children}
      </button>
    );
  };

  const [scrollDirection, setScrollDirection] = useState("initial");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setScrollDirection("initial");
      } else if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const displayDetail =
    scrollDirection === "initial" || scrollDirection === "up";

  return (
    <div className="fixed bottom-4 inset-x-0">
      <div className="transition-all duration-500 flex flex-row space-x-4 items-center max-w-xl mx-auto justify-center">
        <div
          className={`transition-all duration-500 p-2 flex flex-row justify-center ${
            !displayDetail ? "gap-1 h-15 w-48" : "gap-1.5 h-20 w-72"
          } ${glassStyle}`}
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? router.asPath === "/"
                : router.asPath.includes(item.href);
            return (
              <NavButton
                key={item.name}
                onClick={() => router.push(item.href)}
                className={`transition-all duration-500 flex flex-col justify-center items-center space-y-1 ${
                  active ? `*:text-orange-600` : "opacity-75"
                } ${!displayDetail ? "px-2" : "px-4"}`}
              >
                <span>{item.icon}</span>
                {displayDetail && (
                  <span className="text-xs opacity-50 truncate">{item.name}</span>
                )}
              </NavButton>
            );
          })}
        </div>
        <div className={`size-15 p-2 ${glassStyle}`}>
          <NavButton className="p-2! flex justify-center items-center">
            <SearchIcon size={iconSize} />
          </NavButton>
        </div>
      </div>
    </div>
  );
}
