import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rachen Ziyad Zechran — Portfolio",
  description:
    "Software Engineer. Informatics student at UMN. Software Engineer Intern at Diskominfo Kota Tangerang.",
  keywords: [
    "portfolio",
    "web developer",
    "frontend",
    "React",
    "Next.js",
    "TypeScript",
    "cybersecurity",
  ],
  authors: [{ name: "Rachen Ziyad Zechran" }],
  openGraph: {
    title: "Rachen Ziyad Zechran — Portfolio",
    description: "Software Engineer",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
