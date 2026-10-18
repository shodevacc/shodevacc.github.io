"use client";

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import { theme, Global } from "@/style/ThemeContext";

export default function Providers({ children }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Global />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
