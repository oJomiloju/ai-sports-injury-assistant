import "./globals.css";
import Navbar from "@/components/Navbar";
import { ModalProvider } from "@/components/ModalContext";

export const metadata = {
  title: "InjuryInsight.AI",
  description: "AI-Powered Sports Injury Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-poppins">
        <ModalProvider>
          <Navbar />
          <main>{children}</main>
        </ModalProvider>
      </body>
    </html>
  );
}
