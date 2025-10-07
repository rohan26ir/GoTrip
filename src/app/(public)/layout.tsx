import type { ReactNode } from "react";
import Navbar from "../../../components/shared/Navbar";
import Footer from "../../../components/shared/Footer";

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex flex-col w-[95%] max-w-[2000px] mx-auto my-5">
      <header className="mb-5">
        <Navbar />
      </header>

      <main className="min-h-screen">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
