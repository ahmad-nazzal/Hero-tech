import Image from "next/image";
import "./header.css";
import ButtonAC from "../../components/ButtonAC";

import Link from "next/link";
import registerlogo from "../../public/images/🦆 icon _profile circled_.png";
import loginlogo from "../../public/images/🦆 icon _log in_.png";

const Header = () => {
  return (
    <header id="headerElement" className="flex" >
      <Image src="/images/8e6c847871186b9180f5ae9f99b6bcbc.png" width={200} height={50} style={{ margin: "10px 50px" }}  alt="Logo" />
    
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

      <nav className="links">
      
<ButtonAC
                        alignSelf="center"
                        mt={8}
                        sizeVariant="lg"
                        color="white"
                        bg="secondary"
                        text="إنشاء حساب"
                        icon={registerlogo}
                        href="/register"
                        marginTop={{ lg: 0 }}
                      sx={{
                        width: "200px",
                        height: "50px"
                      }}
                      />
                        <ButtonAC
                        alignSelf="center"
                        mt={8}
                        sizeVariant="lg"
                        color="white"
                         bg="tomato"
                        text="تسجيل الدخول"
                        icon={loginlogo}
                        href="/signin"
                        marginTop={{ lg: 0 }}
                        marginLeft={{ lg: 3 }}
                        sx={{
                          width: "200px",
                          height: "50px"
                        }}
                      />
      </nav>
  
    </header>
  );
};

export default Header;
