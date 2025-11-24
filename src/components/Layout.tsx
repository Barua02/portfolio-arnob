import { ReactNode } from "react";
import Navbar from "./Navbar";
import ParticleBackground from "./ParticleBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navbar />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;
