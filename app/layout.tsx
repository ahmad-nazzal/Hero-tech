import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Tajawal } from "next/font/google";


const tajawal = Tajawal({
  weight: ["400", "700"],
  subsets: ["arabic"],
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'الرئيسية - الأكاديمية العربية للبرمجة',
  description: 'تقدم الأكاديمية العربية للبرمجة دورات متخصصة لتعليم البرمجة باللغة العربية، حيث يمكن للطلاب اكتساب المهارات التقنية وتعلمة لغات البرمجة من خلال محتوى تعليمي مميز ومناسب للناطقين باللغة العربية',
  icons: {
    icon: "./images/android-chrome-192x192.png"
  }  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" dir="rtl">
=======

    <html lang="ar" dir="rtl">
>>>>>>> cb8b5b3940a18751632a7b7a1575cd7e3e7afb7d
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tajawal.className} antialiased`}
      >
        

          {children}
  
      </body>

    </html>
  );
}
