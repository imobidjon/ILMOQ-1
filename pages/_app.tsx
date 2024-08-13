import AppFrame from "@/components/appFrame/container";
import { ThemeProvider } from "@/components/core/theme-provider/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@/contexts/user-context";
import { LocalizationProvider } from "@/components/core/localization-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider>
      <UserProvider>
        <ThemeProvider>
          <AppFrame>
            <Component {...pageProps} />
          </AppFrame>
        </ThemeProvider>
      </UserProvider>
    </LocalizationProvider>
  );
}
