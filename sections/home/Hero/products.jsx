import React, { useEffect, useState } from "react";
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

const Products = () => {
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
              <a href="/pages/product-details.html">
                <img
                  width={266}
                  src={item.image}
                  alt=""
                  style={{ backgroundColor: "#FF6542" }}
                />
              </a>
              <div style={{ width: "266px" }} className="content">
                {/* {item.name.slice(0,15)}... : Displays first 15 characters of the title*/}
                <h1 className="title">{item.name}</h1>
                <p className="description">
                  {/* .title.slice(0,111) : Displays first 111 characters of the description*/}
                  {item.description.slice(0, 111)}....
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginBottom: "8px",
                  }}
                >
                  {item.duration}
                </p>
                <p
                  style={{
                    color: "#555",
                    fontSize: "15px",
                    marginBottom: "8px",
                  }}
                >
                  المدرب: {item.trainer}
                </p>
                <p
                  style={{
                    color: "#888",
                    fontSize: "14px",
                    marginBottom: "8px",
                    fontStyle: "italic",
                  }}
                >
                  المستوى: {item.level}
                </p>
                <div
                  className="flex"
                  style={{
                    justifyContent: "space-between",
                    paddingBottom: "0.7rem",
                  }}
                >
                  <div className="price">${item.price}</div>
                  <button className="add-to-cart flex">شراء</button>
                </div>
              </div>
            </article>
          );
        })}
    </section>
  );
};

export default Products;
