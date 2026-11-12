import type { Metadata, Viewport } from "next";
import { Oswald, Jost } from "next/font/google";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { COOKIE_KEYS } from "@/lib/cookies";
import { THEME_HEX } from "@/lib/themeColors";
import "./globals.css";

type Theme = "light" | "dark";
type Lang = "en" | "mk";

const toTheme = (value: string | undefined): Theme | undefined =>
  value === "light" || value === "dark" ? value : undefined;

// With no theme cookie the server can't know the system preference and renders light.
// A raw blocking script runs before first paint; next/script's beforeInteractive only queues
// the code for Next's runtime, which can run after the light frame has painted.
const SYSTEM_THEME_SCRIPT =
  "if(window.matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.classList.add('dark')";

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
  weight: "400",
  variable: "--font-body-raw",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: THEME_HEX.paper },
    { media: "(prefers-color-scheme: dark)", color: THEME_HEX.night },
  ],
};

const BASE_OPEN_GRAPH = {
  type: "website",
  url: "https://gordanaleksandrovski.com",
  siteName: "Gordan Aleksandrovski",
  locale: "en_US",
  alternateLocale: "mk_MK",
} satisfies Metadata["openGraph"];

const BASE_TWITTER = {
  card: "summary_large_image",
} satisfies Metadata["twitter"];

export const metadata: Metadata = {
  metadataBase: new URL("https://gordanaleksandrovski.com"),
  title: "Gordan Aleksandrovski — Infrastructure · Full-Stack Engineer",
  description:
    "Infrastructure and full-stack engineer with SRE on-call and production operations experience. Builds and runs web applications with Next.js, TypeScript and Node.js.",
  authors: [{ name: "Gordan Aleksandrovski", url: "https://gordanaleksandrovski.com" }],
  alternates: {
    canonical: "https://gordanaleksandrovski.com",
  },
  openGraph: {
    ...BASE_OPEN_GRAPH,
    title: "Gordan Aleksandrovski",
    description:
      "Infrastructure and full-stack engineer with SRE on-call and production operations experience.",
  },
  twitter: {
    ...BASE_TWITTER,
    title: "Gordan Aleksandrovski — Infrastructure · Full-Stack Engineer",
    description:
      "Infrastructure and full-stack engineer with SRE on-call and production operations experience. Builds and runs web applications with Next.js, TypeScript and Node.js.",
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
      data-scroll-behavior="smooth"
      className={`${oswald.variable} ${jost.variable}${themeClass}`}
    >
      {theme === undefined && (
        <head>
          <script dangerouslySetInnerHTML={{ __html: SYSTEM_THEME_SCRIPT }} />
        </head>
      )}
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
