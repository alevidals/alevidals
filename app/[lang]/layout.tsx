import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getDictionary, type Locale } from "@/app/[lang]/dictionaries";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

type Params = Promise<{
  lang: string;
}>;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const ogImage = {
    url: "/opengraph-image.png",
    width: 1200,
    height: 630,
    alt: `${dict.siteConfig.title} - ${dict.siteConfig.description}`,
  };

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    ),
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
    openGraph: {
      title: dict.siteConfig.title,
      description: dict.siteConfig.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.siteConfig.title,
      description: dict.siteConfig.description,
      images: [ogImage],
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Params;
};

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="relative mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-4 md:py-6">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
