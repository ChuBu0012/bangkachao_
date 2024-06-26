import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Little Soul",
  description: "Your Little Soul Bangkachao",
  icons: {
    icon: "/Logo-02-02 1.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen grid place-items-center`}>
        <StoreProvider>
          <div className="w-full md:max-w-[390px] h-full min-h-[844px] flex justify-center items-center ">
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
