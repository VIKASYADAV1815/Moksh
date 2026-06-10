import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moksh Communication - Digital Marketing Company in Bangalore",
  description:
    "Leading digital marketing agency in Bangalore with 18+ years of experience in SEO, Google Ads, social media marketing, and website development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=supreme@400,500,700,800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased relative bg-slate-50 min-h-screen">
        {/* Left diagonal pattern pipe - fixed to edge */}
        <div className="fixed top-0 bottom-0 left-0 w-4 sm:w-6 md:w-8 border-r border-slate-300/55 z-50 pointer-events-none opacity-40 mix-blend-luminosity bg-pattern-left"></div>
        
        {/* Right diagonal pattern pipe - fixed to edge */}
        <div className="fixed top-0 bottom-0 right-0 w-4 sm:w-6 md:w-8 border-l border-slate-300/55 z-50 pointer-events-none opacity-40 mix-blend-luminosity bg-pattern-right"></div>
        
        <div className="relative z-10 pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8 overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
