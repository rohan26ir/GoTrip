import type { ReactNode } from "react";
import Navbar from "../../../components/shared/Navbar";
import Footer from "../../../components/shared/Footer";

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="max-w-[2000px] mx-auto">
      <header className="">
        <Navbar />
      </header>

      <main className="min-h-screen">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
