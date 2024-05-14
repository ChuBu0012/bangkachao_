import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Little Soul",
  description: "Your Little Soul Bangkachao",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen grid place-items-center`}>
        <StoreProvider>
          <div className="w-full max-w-[448px] h-full">{children}</div>
        </StoreProvider>
      </body>
    </html>
  );
}
