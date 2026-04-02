"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themeIcon =
    theme === "dark" ? (
      // <Sun className="h-5 w-5" />
      <motion.div
        key="sun"
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Sun className="h-5 w-5" />
      </motion.div>
    ) : (
      <motion.div
        key="moon"
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Moon className="h-5 w-5 " />
      </motion.div>
    );

  return (
    <Button
      text=""
      variant="ghost"
      size="icon"
      // icon={themeIcon}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">{themeIcon}</AnimatePresence>
    </Button>
  );
}
