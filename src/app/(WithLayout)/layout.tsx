import Header from "@/components/Headers/Header";
import Footer from "@/components/Shared/Footer/Footer";

import React from "react";
interface WithLayoutProps {
  children: React.ReactNode;
}
const WithLayout: React.FC<WithLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default WithLayout;
