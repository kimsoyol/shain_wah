import { Suspense } from "react";
import NavBar from "@/components/enduser/NavBar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <div>
        {children}
      </div>
    
    </div>
  );
}
