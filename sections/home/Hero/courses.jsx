import React, { useEffect, useState } from "react";
import ButtonAC from "../../../components/ButtonAC";
import mazedlogo from "../../../public/images/🦆 icon _more horiz circled outline_.png";
import paylogo from "../../../public/images/🦆 icon _cart_.png";
import Loading from "./loading";
//async & await : Because API process takes time
async function getData() {
  //Loading 5 mintues
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //revalidate:3600 => 3600 seconds, which means that every hour the browser goes to check the data in db.json
  const res = await fetch("http://localhost:4000/courses", {
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Courses = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <section
      className="products flex"
      style={{ color: "#462576", padding: "0px 55px" }}
    >
      {/* array.map */}
      {data &&
        data.map((item) => {
          return (
            <article title={item.name} key={item.id} className="card" dir="rtl">
              <a href="/">
                <div
                  style={{
                    backgroundColor: "#FF6542",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    width={266}
                    height={285}
                    src={item.image}
                    alt=""
                    style={{
                      filter: "invert(1)",
                    }}
                  />
                </div>
              </a>

              <div style={{ fontWeight: "bold", width: "266px" }}>
                {/* {item.name.slice(0,15)}... : Displays first 15 characters of the title*/}
                <h1 className="title">{item.name.slice(0, 15)}...</h1>
                <div className="price">${item.price}</div>

                <div
                  style={{
                    color: "#555",
                    fontSize: "15px",
                    marginBottom: "8px",
                  }}
                >
                  <p> اسم المدرب: {item.trainer}</p>

                  <p>{item.duration}</p>
                </div>

                <div
                  className="bottons"
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <ButtonAC
                    alignSelf="center"
                    mt={8}
                    sizeVariant="lg"
                    color="white"
                    bg="secondary"
                    text="اقرأ المزيد"
                    icon={mazedlogo}
                    marginTop={{ lg: 0 }}
                    marginLeft={{ lg: 0 }}
                    sx={{
                      width: "190px",
                      height: "40px",
                    }}
                  />
                  <ButtonAC
                    alignSelf="center"
                    mt={8}
                    sizeVariant="lg"
                    color="white"
                    bg="tomato"
                    text="شراء"
                    icon={paylogo}
                    marginTop={{ lg: 0 }}
                    marginLeft={{ lg: 0 }}
                    sx={{
                      width: "150px",
                      height: "40px",
                    }}
                  />
                </div>
              </div>
            </article>
          );
        })}
    </section>
  );
};

export default Courses;
