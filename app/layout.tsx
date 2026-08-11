import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedestrian Workshop",
  description:
    "A bilingual XR interactive art project translating Peking Opera gestures into Chinese landscape painting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
