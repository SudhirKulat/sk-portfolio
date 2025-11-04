import ParticlesBackground from "./components/ParticlesBackground";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.variable} font-mono bg-black text-white relative overflow-x-hidden`}
      >
        <ParticlesBackground />
        <main className="relative z-10 flex justify-center">
          <div className="w-full max-w-5xl px-6 md:px-10 py-12">{children}</div>
        </main>
      </body>
    </html>
  );
}
