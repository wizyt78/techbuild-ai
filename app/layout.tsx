import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechBuild AI — Describe it. Build it. Publish it.",
  description: "AI-powered website creation and publishing platform."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={inter.className}>{children}</body></html>;
}