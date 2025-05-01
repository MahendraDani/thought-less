import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Thoughtless",
  description: "Write. Don't look back. Type what's on your mind. You don't need a therapist. You need a moment of honesty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ebGaramond.className}`}>
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="antialiased relative min-h-screen overflow-x-hidden selection:bg-emerald-400/10 selection:text-emerald-400">
            {/* Background Image */}
            <div className="fixed inset-0 -z-30">
              <Image
                src="/ghibli.jpg"
                alt="Background"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Dark Gradient Corners */}
            <div className="fixed inset-0 -z-25 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_black_0%,_transparent_60%),radial-gradient(ellipse_at_top_right,_black_0%,_transparent_60%),radial-gradient(ellipse_at_bottom_left,_black_0%,_transparent_60%),radial-gradient(ellipse_at_bottom_right,_black_0%,_transparent_60%)] opacity-90" />

            {/* Overlay tint */}
            <div className="fixed inset-0 -z-20 bg-black/75" />

            {/* Main content */}
            <main className="relative z-0 p-4">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
