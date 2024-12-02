"use client";
import Header from "../../sections/header/header";
import Footer from "../../sections/Footer/Footer";
import "./auth.css";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

