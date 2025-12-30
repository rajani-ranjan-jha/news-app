import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fontPoppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "NewsHub - Latest News from Around the World",
  description: "Stay informed with the latest news across Business, Technology, Sports, Entertainment, Health, and Science.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${fontPoppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
