import type { Metadata, Viewport } from "next";
import { Oswald, Jost } from "next/font/google";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { COOKIE_KEYS } from "@/lib/cookies";
import "./globals.css";

type Theme = "light" | "dark";
type Lang = "en" | "mk";

const toTheme = (value: string | undefined): Theme | undefined =>
  value === "light" || value === "dark" ? value : undefined;

const toLang = (value: string | undefined): Lang =>
  value === "mk" ? "mk" : "en";

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-raw",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-body-raw",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3ef" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1b17" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gordanaleksandrovski.com"),
  title: "Gordan Aleksandrovski — Fullstack Developer",
  description:
    "Fullstack developer building well-structured web applications with React, Next.js, and Node.js.",
  authors: [{ name: "Gordan Aleksandrovski", url: "https://gordanaleksandrovski.com" }],
  alternates: {
    canonical: "https://gordanaleksandrovski.com",
  },
  openGraph: {
    type: "website",
    url: "https://gordanaleksandrovski.com",
    siteName: "Gordan Aleksandrovski",
    title: "Gordan Aleksandrovski",
    description:
      "Fullstack developer building well-structured web applications.",
    locale: "en_US",
    alternateLocale: "mk_MK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gordan Aleksandrovski — Fullstack Developer",
    description:
      "Fullstack developer building well-structured web applications with React, Next.js, and Node.js.",
  },
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const theme = toTheme(cookieStore.get(COOKIE_KEYS.theme)?.value);
  const lang = toLang(cookieStore.get(COOKIE_KEYS.lang)?.value);
  const themeClass = theme === "dark" ? " dark" : "";

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${oswald.variable} ${jost.variable}${themeClass}`}
    >
      <body>
        <ThemeProvider initialTheme={theme}>
          <LanguageProvider initialLang={lang}>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
