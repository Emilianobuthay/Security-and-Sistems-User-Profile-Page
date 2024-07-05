import { Inter } from "next/font/google";
import "./globals.css";
import HeaderLayout from '../components/HeaderLayout';
import Footer from '../components/Footer';
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Security and Sistem",
  description: "Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <HeaderLayout />
      {children}
      <Toaster position="top-right" />
      <Footer />
      </body>
    </html>
  );
}
