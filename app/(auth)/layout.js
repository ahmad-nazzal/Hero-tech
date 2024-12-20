"use client";
import Header from "../../sections/header/header";
import Footer from "../../sections/Footer/Footer";
import "./auth.css";
import AuthProvider from "../providers/AuthProvider";
export default function RootLayout({ children }) {
  return (
    <>
      <AuthProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </AuthProvider>
    </>
  );
}
