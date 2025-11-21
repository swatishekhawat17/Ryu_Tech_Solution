import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "RTS App",
  description: "Next.js + Tailwind App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

