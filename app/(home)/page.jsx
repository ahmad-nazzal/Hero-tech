//import Footer from "../../components/footer/footer.jsx";
"use client";
import { Suspense } from "react";
import Header from "../components/header/header.jsx";
import "./home.css";

import Products from "./products.jsx";
import Loading from "./loading.jsx";


export default function Home() {
  return (
    <>
    
      <div className="top-img">
        <Header />
        <section className="content" dir="rtl" style={{ color: "white" }} >
          <div style={{ display: "flex" }}>
          <div style={{ marginRight: "150px"}}>
          <p className="men">تعمل الاكادمية العربية للبرمجة كجسر يربط العقول التكنولوجية العربية في المهجر بالطلبة العرب أينما كانو </p>
          </div>
        
          <div style={{ marginRight: "150px"}}>
          <p className="free-shipping">
            تقدم الأكاديمية العربية للبرمجة  تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية 
          </p>
          <p className="free-shipping">
          وأسلوب تدريسي ممتع يتناسب مع مختلف الطرق التعليمية للمبتدئين والمحترفين بإشراف مدربين ومبرمجين ذوي خبرة عالمية في المجال التقني
          </p>
          <button style={{ marginTop: "50px"}}>المسارات التعليمية </button>
          </div>
          
          </div>
          
        </section>
      </div>

      <main>
        <h1 className="recommended" dir="rtl"style={{ marginRight: "160px", marginLeft: "1222px",paddingTop: "50px", color: "#462576", borderBottom: "2px solid #462576", fontWeight: "bold" }}>
          الدورات التدريبية
        </h1>


        <Suspense fallback={<Loading/>}><Products /></Suspense>


      </main>


    </>
  );
}
