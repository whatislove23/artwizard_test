import "./globals.css";
import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const unbounded = Unbounded({ subsets: ["cyrillic-ext"] });

export const metadata: Metadata = {
  title: "Афіша мистецьких подій: Найкращі події та локації для відпочинку",
  description:
    "Перегляньте найцікавіші мистецькі події ✅ Знайдіть кращі локації для відпочинку та розваг ✅ Купуйте квитки на ArtWizard ✅",
  openGraph: {
    title: "Афіша мистецьких подій: Найкращі події та локації для відпочинку",
    description:
      "Перегляньте найцікавіші мистецькі події ✅ Знайдіть кращі локації для відпочинку та розваг ✅ Купуйте квитки на ArtWizard ✅",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={unbounded.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
