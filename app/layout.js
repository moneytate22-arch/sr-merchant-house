import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "SR Merchant House | Premium Global Export Solutions",
  description: "Global exporter of premium HDPE pipes, agricultural equipment, sustainable jute packaging, building materials, and organic commodities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
