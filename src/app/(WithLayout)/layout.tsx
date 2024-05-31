import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Headers/Header";

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
