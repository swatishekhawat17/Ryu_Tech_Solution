import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import ContactUs from "./components/contact_us";


export const metadata = {
  title: "Ryu Tech Solution App",
  description: "Next.js + Tailwind App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
        <ContactUs />
        <Footer/>
      </body>
    </html>
  );
}

