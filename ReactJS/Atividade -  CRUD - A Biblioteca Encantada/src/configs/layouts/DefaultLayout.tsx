import { ReactNode } from "react";
import { navigations } from "../navigations/navigation";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <NavBar navigations={navigations} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
