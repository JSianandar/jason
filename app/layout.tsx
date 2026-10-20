import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JSenpai | Full Stack Developer",
  description: "Portfolio of JSenpai, Full Stack Developer and founder of Moncode.",
};

// Runs before first paint so there is no flash of the wrong theme.
const themeScript = `try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
