import "./header.css";

import Link from "next/link";
//      border: '5px solid red';
const Header = () => {
  return (
    <header id="headerElement" className="flex">
      <nav className="links">
        <Link className="sign-in" href="/signin">
          <img
            src="../../public/images/🦆 icon _log in_.png"
            alt="Login Icon"
            className="icon"
          />
          تسجيل دخول
        </Link>
        <Link className="register" href="/register">
          <img
            src="./images/🦆 icon _profile circled_.png"
            alt="Login Icon"
            className="icon"
          />
          إنشاء حساب
        </Link>
      </nav>
      <nav className="links">
        <Link href="/contact" className="link">
          التواصل
        </Link>
        <Link href="/education-paths" className="link">
          المسارات التعليمية
        </Link>
        <Link href="/sources" className="link">
          المصادر
        </Link>
      </nav>

      <img src="./images/8e6c847871186b9180f5ae9f99b6bcbc.png" alt="Logo" />
    </header>
  );
};

export default Header;
