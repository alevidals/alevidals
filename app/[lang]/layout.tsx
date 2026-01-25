import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getDictionary, type Locale } from "@/app/[lang]/dictionaries";
import { BackToTopButton } from "@/components/back-top-top-button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { GridBackground } from "@/components/ui/grid-background";

type Params = Promise<{
  lang: string;
}>;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return {
    title: dict.siteConfig.title,
    description: dict.siteConfig.description,
    keywords: [
      "Alejandro Vidal",
      "Frontend Developer",
      "React",
      "Next.js",
      "Portfolio",
      "Desarrollador Frontend",
      "Portafolio",
    ],
    authors: [{ name: "Alejandro Vidal", url: "" }],
    creator: "Alejandro Vidal",
  };
}

type Props = {
  children: React.ReactNode;
  params: Params;
};

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang} suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GridBackground />
        <div className="max-w-5xl mx-auto flex flex-col min-h-screen w-full z-10 relative px-6">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex-1">
              <div className="py-6">
                <Header dict={dict.header} />
                {children}
              </div>
              <Footer dict={dict.footer} />
            </div>
          </ThemeProvider>
        </div>
        <BackToTopButton />
      </body>
    </html>
  );
}
