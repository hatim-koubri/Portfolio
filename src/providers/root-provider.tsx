"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

type RootProviderProps = {
  children: ReactNode;
};

export function RootProvider({ children }: RootProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
