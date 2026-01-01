import { Poppins } from "next/font/google";
import "./globals.css";


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
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
